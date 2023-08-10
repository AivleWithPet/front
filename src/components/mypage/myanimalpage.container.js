import React, { useState, useEffect } from "react";
import axios from "axios";

import SideBar from "./sidebar.container";
import RegisterFB from "./registerbutton.container";
import AnimalListView from "./animallist.container";

import { Layout } from "antd";
const { Content, Sider } = Layout;

const END_URL = "http://localhost:8080/pet/myPets";

export default function MyAnimalPage() {
  const [petList, setPetList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSideBarItemClick = (key) => {
    setSelectedItem(key);
  };

  useEffect(() => {
    getPetLists();
  }, []);

  const getPetLists = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      withCredentials: true,
    };

    try {
      const response = await axios.get(
        `${END_URL}?memberId=${localStorage.getItem("memberId")}`,
        config
      );

      if (response.status === 200) {
        console.log("데이터 전송 성공", response.data);
        setPetList(response.data); // 서버에서 받아온 반려동물 data
        setSelectedItem(
          response.data.length > 0 ? response.data[0].petId : null
        ); // 기본 선택
      } else {
        console.log("데이터 전송 실패", response.status);
      }
    } catch (error) {
      console.error("Error fetching pet names:", error);
    }
  };

  return (
    <Layout style={{ height: "calc(100vh - 80px)", display: "flex" }}>
      <Sider
        width={300}
        style={{
          backgroundColor: "#68A5FE",
          boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        <SideBar
          petList={petList}
          selectedItem={selectedItem}
          onItemClick={handleSideBarItemClick}
        />
      </Sider>

      <Layout style={{ padding: "0 24px 24px", backgroundColor: "#EEF3FF" }}>
        <Content>
          <AnimalListView selectedItem={selectedItem} />
        </Content>
        <RegisterFB page={"mypage"} />
      </Layout>
    </Layout>
  );
}
