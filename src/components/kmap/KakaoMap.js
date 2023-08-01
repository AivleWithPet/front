import { useEffect, useState } from "react";
import { HList, HListPage } from './map.style';


export default function KakaoMap(props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=0bc3b2c7b13c039671b60d0f0767e977&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map");
        
        // 마커를 담을 배열
        var markers = [];

        // 사용자의 현재 위치를 가져옵니다.
        navigator.geolocation.getCurrentPosition(function (position) {
          const { latitude, longitude } = position.coords;

          const mapOption = {
            center: new window.kakao.maps.LatLng(latitude, longitude),
            level: 3,
          };
          const map = new window.kakao.maps.Map(mapContainer, mapOption);

          // 사용자의 현재 위치에 마커 생성
          const userMarkerPosition = new window.kakao.maps.LatLng(latitude, longitude);
          const userMarker = new window.kakao.maps.Marker({
            position: userMarkerPosition,
            image: new window.kakao.maps.MarkerImage(
              "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi-dotless2.png",
              new window.kakao.maps.Size(22, 35),
              { offset: new window.kakao.maps.Point(11, 35) }
            ),
          });
          userMarker.setMap(map);

          // 주위 동물병원 검색
          const ps = new kakao.maps.services.Places();
          const infowindow = new kakao.maps.InfoWindow({zIndex:1});

          // 키워드로 장소를 검색
          searchPlaces();

          // 키워드 검색을 요청하는 함수입니다
          function searchPlaces() {

            var keyword = document.getElementById('keyword').value;

            if (!keyword.replace(/^\s+|\s+$/g, '')) {
                alert('키워드를 입력해주세요!');
                return false;
            }

            // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
            ps.keywordSearch( keyword, placesSearchCB, {
              location: new kakao.maps.LatLng(latitude, longitude)
            }); 
          }

          // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
          function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {

                // 정상적으로 검색이 완료됐으면
                // 검색 목록과 마커를 표출합니다
                displayPlaces(data);

                // 페이지 번호를 표출합니다
                displayPagination(pagination);

            } else if (status === kakao.maps.services.Status.ZERO_RESULT) {

                alert('검색 결과가 존재하지 않습니다.');
                return;

            } else if (status === kakao.maps.services.Status.ERROR) {

                alert('검색 결과 중 오류가 발생했습니다.');
                return;

            }
          }

          // 검색 결과 목록과 마커를 표출하는 함수입니다
          function displayPlaces(places) {

            var listEl = document.getElementById('placesList'), 
            menuEl = document.getElementById('menu_wrap'),
            fragment = document.createDocumentFragment(), 
            bounds = new kakao.maps.LatLngBounds(), 
            listStr = '';
            
            // 검색 결과 목록에 추가된 항목들을 제거합니다
            removeAllChildNods(listEl);

            // 지도에 표시되고 있는 마커를 제거합니다
            removeMarker();
            
            for ( var i=0; i<places.length; i++ ) {

                // 마커를 생성하고 지도에 표시합니다
                var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
                    marker = addMarker(placePosition, i), 
                    itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                bounds.extend(placePosition);

                // 마커와 검색결과 항목에 mouseover 했을때
                // 해당 장소에 인포윈도우에 장소명을 표시합니다
                // mouseout 했을 때는 인포윈도우를 닫습니다
                (function(marker, title) {
                    kakao.maps.event.addListener(marker, 'mouseover', function() {
                        displayInfowindow(marker, title);
                    });

                    kakao.maps.event.addListener(marker, 'mouseout', function() {
                        infowindow.close();
                    });

                    itemEl.onmouseover =  function () {
                        displayInfowindow(marker, title);
                    };

                    itemEl.onmouseout =  function () {
                        infowindow.close();
                    };
                })(marker, places[i].place_name);

                fragment.appendChild(itemEl);
            }

            // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
            listEl.appendChild(fragment);
            menuEl.scrollTop = 0;

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds);
          }

          // 검색결과 항목을 Element로 반환하는 함수입니다
          function getListItem(index, places) {

            var el = document.createElement('li'),
            itemStr = '<br/><span className="markerbg marker_' + (index+1) + '"></span>' +
                        '<div className="info" style={{border:1px solid}}>' +
                        '   <h3>' + places.place_name + '</h3>';

            if (places.road_address_name) {
                itemStr += '    <span>' + places.road_address_name + '</span>' +
                            '   <span className="jibun gray">' +  places.address_name  + '</span>' + '<br/>';
            } else {
                itemStr += '    <span>' +  places.address_name  + '</span>'; 
            }
                        
              itemStr += '  <span className="tel">' + places.phone  + '</span>' + '<br/>' +
                        '</div>';           

            el.innerHTML = itemStr;
            el.className = 'item';

            return el;
          }

          // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
          function addMarker(position, idx, title) {
            // '../../../public/pet_marker_origin.png'
            // https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png
            var imageSrc = './pet_marker_origin.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
                imageSize = new kakao.maps.Size(36, 37),  // 마커 이미지의 크기
                imgOptions =  {
                    spriteSize : new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
                    spriteOrigin : new kakao.maps.Point(0, (idx*46)+10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
                    offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
                },
                markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
                    marker = new kakao.maps.Marker({
                    position: position, // 마커의 위치
                    image: markerImage 
                });

            marker.setMap(map); // 지도 위에 마커를 표출합니다
            markers.push(marker);  // 배열에 생성된 마커를 추가합니다

            return marker;
          }

          // 지도 위에 표시되고 있는 마커를 모두 제거합니다
          function removeMarker() {
            for ( var i = 0; i < markers.length; i++ ) {
                markers[i].setMap(null);
            }   
            markers = [];
          }

          // 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
          function displayPagination(pagination) {
            var paginationEl = document.getElementById('pagination'),
                fragment = document.createDocumentFragment(),
                i; 

            // 기존에 추가된 페이지번호를 삭제합니다
            while (paginationEl.hasChildNodes()) {
                paginationEl.removeChild (paginationEl.lastChild);
            }

            for (i=1; i<=pagination.last; i++) {
                var el = document.createElement('a');
                el.href = "#";
                el.innerHTML = i;

                if (i===pagination.current) {
                    el.className = 'on';
                } else {
                    el.onclick = (function(i) {
                        return function() {
                            pagination.gotoPage(i);
                        }
                    })(i);
                }

                fragment.appendChild(el);
            }
            paginationEl.appendChild(fragment);
          }

          // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
          // 인포윈도우에 장소명을 표시합니다
          function displayInfowindow(marker, title) {
            var content = '<div style="padding:5px;z-index:1;">' + title + '</div>';

            infowindow.setContent(content);
            infowindow.open(map, marker);
          }

          // 검색결과 목록의 자식 Element를 제거하는 함수입니다
          function removeAllChildNods(el) {   
            while (el.hasChildNodes()) {
                el.removeChild (el.lastChild);
            }
          }
        });
      });
    };
  }, []);




  return (
    <div className="map_wrap" style={{ width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
      
      <div id="map" style={{ width: "50%"}}></div>
      <div id="menu_wrap" className="bg_white" style={{border:'0px solid white'}}>
        <div className="option">
          <div style={{display:'none'}}>
            <form onSubmit={() => searchPlaces()}>
              키워드 :{" "}
              <input type="text" defaultValue="동물병원" id="keyword" size="15" />
              <button type="submit">검색하기</button>
            </form>
          </div>
        </div>
        
        
        <div style={{overflow:'auto', width: '38em', height: '36em', display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
          <HList>
            <ul id="placesList" style={{listStyle:'none'}}></ul>
          </HList>
          <HListPage>
            <div id="pagination" style={{textAlign:'center', display:'none'}}></div>
          </HListPage>
        </div>
      </div>
    </div>
  );
}
