import React, { useState, useEffect } from "react";
import axios from "axios";
import RegisterInduction from "./induction.container";
import { Card } from "antd";
const { Meta } = Card;


const END_URL = "http://localhost:8080/pet";

// pet/{pet_id}로 통신하면 됨

const AnimalsList = ({ data, selectePetName, selectePetSpecies }) => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "row",
        width: "70vw",
        height: "20vh",
      }}
      hoverable
      cover={<img alt="example" src={""} />}
    >
      <Meta
        title={<div style={{ fontSize: "1.8vh" }}>{selectePetName}</div>}
        description={<div style={{ fontSize: "1.5vh" }}>안냥 설명 넣을랭</div>}
      />
      <div>여기 진단일자 넣을랭</div>
      <div>{selectePetSpecies}</div>
    </Card>
  );
};

export default function AnimalListView({ petList, selectedItem }) {
  const [petData, setPetData] = useState(null);
  const [selectePetName, setSelectePetName] = useState("");
  const [selectePetSpecies, setSelectePetSpecies] = useState("");

  useEffect(() => {
    if (selectedItem != "register") {
      // selectedPet이 register가 아닐 때에만 Axios 통신을 수행
      fetchPetData(selectedItem);
      // 과거 진단 내역 리스트를 위함
      const selectedPet = petList.find((item) => item.petId == selectedItem);
      setSelectePetName(selectedPet.petName);
      setSelectePetSpecies(selectedPet.species);
    }
  }, [selectedItem]);

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

      const response = await axios.get(
        `${END_URL}/results?petId=${petId}`,
        config
      );

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
        <div
          style={{
            marginTop: "8vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RegisterInduction />
        </div>
      ) : petData.length > 0 ? (
        <div
          style={{
            marginTop: "8vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AnimalsList
            data={petData}
            selectePetName={selectePetName}
            selectePetSpecies={selectePetSpecies}
          />
        </div>
      ) : (
        <div
          style={{
            marginTop: "8vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "5vh",
          }}
        >
          진단 내역이 없습니다!
          <br />
          먼저 AI를 통한 질병 진단을 해주세요!
        </div>
      )}
    </div>
  );
}
