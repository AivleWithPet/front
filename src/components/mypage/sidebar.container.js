import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import axios from "axios";

const END_URL = "http://localhost:8080/pet/myPets";

function getItem(label, key) {
  return {
    key,
    label,
  };
}

export default function SideBar({ handleMenuItemClick }) {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(1);

  const handleMenuClick = (key) => {
    setSelectedItem(key);
    handleMenuItemClick(key);
  };

  const getPetLists = async () => {
    try {
      const response = await axios.get(END_URL, {
        // 여기선 헤더에 뭐 넣나요? 토큰? 아직 개발중이라길래 보류
        headers: {
          "Content-Type": "multipart/form-data",
          withCredentials: true, // CORS
        },
      });
      const petList = response.data; // 서버에서 받아온 반려동물 이름 리스트

      if (response.status === 200) {
        // 전송 성공 여부 확인하고 리스트로 넘어감
        console.log("데이터 전송 성공", response.data);
        if (petList.length > 0) {
          // 서버에서 받아온 리스트 있으면 해당 리스트로 items 배열을 업데이트
          const updatedItems = petList.map((petName, index) =>
            getItem(petName, index + 1)
          );
          setItems(updatedItems);
          setSelectedItem(updatedItems[0].key); // 첫 번째 항목을 선택 상태로 설정
        } else {
          // 리스트가 비어있다면 등록 유도 메시지를 보여주기 위해 items 배열을 빈 배열로 설정
          // 등록유도 메세지는 따로 만들기
          setItems([]);
          setSelectedItem(null); // 선택 상태도 초기화
        }
      } else {
        console.log("데이터 전송 실패", response.status);
      }
    } catch (error) {
      console.error("Error fetching pet names:", error);
    }
  };

  useEffect(() => {
    getPetLists(); // SideBar 컴포넌트가 처음 마운트될 때 반려동물 이름 리스트를 가져옴
  }, []);

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[1]}
      selectedKeys={[selectedItem]}
      onClick={({ key }) => handleMenuClick(key)}
    >
      {items.length > 0 ? (
        items.map((item) => <Menu.Item key={item.key}>{item.label}</Menu.Item>)
      ) : (
        <Menu.Item key="register">
          {/* key도 바꾸면 됨...상위 컴포넌트로 올라가는 값에 해당하는거라 */}
          등록 유도 내용 컴포넌트가 들어갈 예정임다
        </Menu.Item>
      )}
    </Menu>
  );
}

// import React, { useState } from "react";
// import { Menu } from "antd";
// import axios from "axios";

// function getItem(label, key) {
//   return {
//     key,
//     label,
//   };
// }

// export default function SideBar({ handleMenuItemClick }) {
//   // 이 items를 통신 후에 반복문으로 바꿔야함 (반려동물 여러마리인 사람들을 위해)
//   // 근데 이 부분이 length === 0 이면 반려동물 등록유도페이지가 보여야함
//   // 등록된 반려동물을 찾을수가 없다는 안내와 함께 버튼 클릭 유도

//   const items = [getItem("누구", 1), getItem("집", 2), getItem("고양이", 3)];

//   const [selectedItem, setSelectedItem] = useState(1);

//   const handleMenuClick = (key) => {
//     setSelectedItem(key);
//     handleMenuItemClick(key);
//   };

//   return (
//     <Menu
//       mode="inline"
//       defaultSelectedKeys={[1]}
//       selectedKeys={[selectedItem]}
//       onClick={({ key }) => handleMenuClick(key)}
//     >
//       {items.map((item) => (
//         <Menu.Item key={item.key}>{item.label}</Menu.Item>
//       ))}
//     </Menu>
//   );
// }
