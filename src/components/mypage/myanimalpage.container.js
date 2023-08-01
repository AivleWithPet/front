import React, { useState, useEffect } from "react";
import axios from "axios";

import SideBar from "./sidebar.container";
import RegisterFB from "./registerbutton.container";

import { Layout } from "antd";
const { Content, Sider } = Layout;

const END_URL = "http://localhost:8080/pet/myPets";

function getItem(label, key) {
  return {
    key,
    label,
  };
}

export default function MyAnimalPage() {
  const [selectedItem, setSelectedItem] = useState(1);
  const handleMenuClick = (key) => {
    setSelectedItem(key);
    console.log("상위로 오는거 맞니?", selectedItem);
    //여기서 실제 리스트 데이터에서 여기에 맞게 설정
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
        console.log("데이터 전송 성공", response.data);
        const petList = response.data; // 서버에서 받아온 반려동물 이름 리스트

        if (petList.length > 0) {
          // 받는 데이터는 [{},{},...] 형식
          const updatedItems = petList.map((petName, petId) =>
            getItem(petName, petId)
          );
          setItems(updatedItems);
          setSelectedItem(updatedItems[0].key); // 첫 번째 항목을 선택 상태로 설정
        } else {
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
    <Layout style={{ height: "calc(100vh - 80px)", display: "flex" }}>
      <Sider
        width={300}
        style={{ color: "white", boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.1)" }}
      >
        <SideBar handleMenuItemClick={handleMenuClick} />
      </Sider>

      <Layout style={{ padding: "0 24px 24px", backgroundColor: "gray" }}>
        <Content>
          {/* 여기에 리스트 컴포넌트가 들어가고  selectedItem를 포함한 data를 파라미터로 전달해줌*/}
        </Content>
        <RegisterFB page={"mypage"} />
      </Layout>
    </Layout>
  );
}
