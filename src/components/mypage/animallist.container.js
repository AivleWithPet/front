import React, { useState, useEffect } from "react";
import axios from "axios";
import RegisterInduction from "./induction.container";
import { Card } from "antd";
const { Meta } = Card;

import catImage from "../../../public/catcat.png"; //임시

const END_URL = "http://localhost:8080/pet";

// pet/{pet_id}로 통신하면 됨

const AnimalsList = ({ petData }) => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "row",
        width: "70vw",
        height: "20vh",
      }}
      hoverable
      cover={<img alt="example" src={"../../../public/catcat.png"} />}
    >
      <Meta
        title={<div style={{ fontSize: "1.8vh" }}>안냥 이름 넣을래</div>}
        description={<div style={{ fontSize: "1.5vh" }}>안냥 설명 넣을랭</div>}
      />
      <div>여기 진단일자 넣을랭</div>
      <div>여긴 품종 넣을랭</div>
    </Card>
  );
};

export default function AnimalListView({ selectedItem }) {
  const [petData, setPetData] = useState(null);
  console.log("젤처음뭔데", selectedItem);

  useEffect(() => {
    if (selectedItem != "register") {
      // selectedPet이 register가 아닐 때에만 Axios 통신을 수행
      fetchPetData(selectedItem);
    }
  }, []);

  // 통신 수행하는 부분
  const fetchPetData = async (petId) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      };

      const response = await axios.get(`${END_URL}/${petId}`, config);

      if (response.status === 200) {
        console.log("반려동물 데이터 가져오기 성공", response.data);
        setPetData(response.data);
      } else {
        console.log("반려동물 데이터 가져오기 실패", response.status);
      }
    } catch (error) {
      console.error("animallist 컨테이너 에러:", error);
    }
  };

  // 'register'인자가 넘어오면 반려동물을 어떻게 등록하는지 설명해주는 컴포넌트가 나타나도록 함
  return (
    <div>
      {selectedItem === "register" ? (
        <div>
          <RegisterInduction />
        </div>
      ) : (
        <div
          style={{
            marginTop: "8vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AnimalsList />
        </div>
      )}
    </div>
  );
}
