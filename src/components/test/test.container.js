import {ReconciliationOutlined} from '@ant-design/icons'
import styled from '@emotion/styled';
import { All, Div1, Div11, Div1_1, Div1_2,
   Div1title,
   Div3, Div3_1, Div3_2, Div3_3, Div3_3_1, Div6, DivContents } from './test.style'; 
import axios from 'axios'
import { useState, useEffect } from 'react';
import KakaoMap from '../kmap/KakaoMap';
import { useDispatch, useSelector } from 'react-redux'; // 리덕스 관련

const MyIcon = styled(ReconciliationOutlined)`
  color: red;
  font-size: 30px;
`

const displayImageFromBase64 = (base64String) => {
  // const image = document.createElement('img');
  // image.src = `data:image/jpeg;base64,${base64String}`;
  // const imageElement = document.getElementById('result-image');
  // imageElement.appendChild(image);
};

export default function TestContainer() {
  const transData = useSelector((state) => {return state.isTrans}); // 리덕스 관련
  console.log(transData)
  displayImageFromBase64(transData.imageBase64); // base64 디코딩해서 이미지로 출력


  
    return (
      <>
        <All>
          <Div1>
            <Div1_1>
               <MyIcon />
               <h2>모모의 AI 진단 체크 결과</h2>
            </Div1_1>
            <Div11>
              <Div1title>{transData}(가)이 00% 확률로 의심됨. </Div1title>
                <Div6>
                  <Div1_2><div id='result-image'>back에서 받아온 결과 사진</div></Div1_2>
                  <Div1_2>
                    <div>
                      <DivContents>{transData}</DivContents>
                      <DivContents>백에서 받아온 병 설명</DivContents>
                    </div>
                    <div>
                      <DivContents>좋은 음식</DivContents>
                      <DivContents>백에서 받아온 병의 좋은음식</DivContents>
                    </div>
                  </Div1_2> 
                </Div6>
            </Div11>
          </Div1>
          <Div3>
              <Div3_1>
                  <Div3_3>
                      <Div3_3_1>
                        <KakaoMap isMap={true} />
                      </Div3_3_1>
                  </Div3_3>
              </Div3_1>
          </Div3>
        </All>     
    </>)       
}
