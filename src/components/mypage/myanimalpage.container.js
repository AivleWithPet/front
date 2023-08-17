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
  const [selectedItem, setSelectedItem] = useState(1);
  // 여기가 초기값 설정 파트라 여기 null을 줬더니 처음도 null이 되는 문제가 발생 했었음
  console.log("아이디 왜 안나와", selectedItem);

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
        // 위의 state에서 사실상 초기값이 결정되니 굳이 필요없음..필요하다 바보야 register용 생각 안하나
        if (response.data.length < 1) {
          setSelectedItem("register");
        }
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
