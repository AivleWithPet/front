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
    // MyAnimalPage 컴포넌트가 처음 마운트될 때만 tempPetList를 petList로 설정
    const tempPetList = [
      { petId: 1, petName: "나비", species: "벵갈" },
      { petId: 2, petName: "콩이", species: "코숏" },
      { petId: 3, petName: "초코", species: "먼치킨" },
    ];
    setPetList(tempPetList);
  }, []); // 빈 배열을 전달하여 처음 마운트될 때만 실행되도록 함

  //   useEffect(() => {
  //     getPetLists();
  //   }, []);

  //   const getPetLists = async () => {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //        withCredentials: true,
  //       params: {
  //         memberId: localStorage.getItem("memberId"),
  //         accessToken: localStorage.getItem("accessToken"),
  //       },

  //     };

  //     try {
  //       const response = await axios.get(END_URL, config);

  //       if (response.status === 200) {
  //         console.log("데이터 전송 성공", response.data);
  //         setPetList(response.data); // 서버에서 받아온 반려동물 data
  //         setSelectedItem(
  //           response.data.length > 0 ? response.data[0].petID : null
  //         ); // 기본 선택
  //       } else {
  //         console.log("데이터 전송 실패", response.status);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching pet names:", error);
  //     }
  //   };

  return (
    <Layout style={{ height: "calc(100vh - 80px)", display: "flex" }}>
      <Sider
        width={300}
        style={{ color: "white", boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.1)" }}
      >
        <SideBar
          petList={petList}
          selectedItem={selectedItem}
          onItemClick={handleSideBarItemClick}
        />
      </Sider>

      <Layout style={{ padding: "0 24px 24px", backgroundColor: "gray" }}>
        <Content>
          <AnimalListView selectedItem={selectedItem} />
        </Content>
        <RegisterFB page={"mypage"} />
      </Layout>
    </Layout>
  );
}
