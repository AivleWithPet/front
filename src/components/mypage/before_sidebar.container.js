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

export default function SideBar({  handleMenuItemClick }) {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(1);

  const handleMenuClick = (key) => {
    setSelectedItem(key);
    handleMenuItemClick(key);
  };

  const getPetLists = async () => {
    const config = {};
    config.params = {}; // 여기에 멤버 아이디, 토큰 등을 담아 파라미터로 보냄!!!!
    config.headers = {};
    config.params["memberId"] = localStorage.getItem("memberId");
    config.params["accessToken"] = localStorage.getItem("accessToken");
    config.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };


    try {
      const response = await axios.get(END_URL, config);

      if (response.status === 200) {
        // 전송 성공 여부 확인하고 리스트로 넘어감
        console.log("데이터 전송 성공", response.data);
        const petList = response.data; // 서버에서 받아온 반려동물 이름 리스트

        if (petList.length > 0) {
          // 서버에서 받아온 리스트 있으면 해당 리스트로 items 배열을 업데이트
          // 받는 데이터는 [{},{},...] 형식
          const updatedItems = petList.map((petName, petId) =>
            getItem(petName, petId)
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
