import React, { useState, useEffect } from "react";
import axios from "axios";
import RegisterInduction from "./induction.container";
import { Card } from "antd";
import { useSelector } from "react-redux";
const { Meta } = Card;

const END_URL = "http://localhost:8080/pet";

const AnimalsList = ({ data }) => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "row",
        width: "60vw",
        height: "24vh",
      }}
      hoverable
      cover={
        <img
          alt="example"
          src={`data:image/png;base64,${data.imageBase64}`}
          style={{
            marginTop: 5,
            marginLeft: 5,
            width: "15vw",
            height: "95%",
            objectFit: "cover", // 이미지 비율을 유지한 채로 채우도록 설정
            borderRadius: "5%",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      }
    >
      <Meta
        title={<div style={{ fontSize: "2.8vh" }}>{data.diseaseName}</div>}
        description={
          <div style={{ fontSize: "2vh" }}>
            {data.percentage.toFixed(2)}% 의 확률로 {data.diseaseName}이
            의심됩니다. <br />
            {data.diseaseName}은 {data.inform}한 질환입니다.
          </div>
        }
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "12vh",
        }}
      >
        <div style={{ fontSize: "1.5vh" }}>
          추천 영양제 : {data.supplements} <br />
        </div>
        <div style={{ fontSize: "1.5vh", marginLeft: "24vw" }}>
          진단 일자 : {data.createdAt.substring(0, 10)}
        </div>
      </div>
    </Card>
  );
};

export default function AnimalListView({ petList, selectedItem }) {
  const [petData, setPetData] = useState([]);
  console.log("dkdkdk", petData);
  // const accessToken = useSelector((state) => state.isToken.accessToken);

  useEffect(() => {
    if (selectedItem != "register") {
      // selectedPet이 register가 아닐 때에만 Axios 통신을 수행
      fetchPetData(selectedItem);
    }
  }, [selectedItem]);
  if (typeof window !== 'undefined') {
    console.log(localStorage.getItem("accessToken"))
  }

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
      ) : (
        <div
          style={{
            marginTop: "8vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {petData.length > 0 ? (
            petData.map((data, index) => (
              <div
                key={index}
                style={{ marginBottom: "16px" }} // 이 부분이 변경되었습니다.
              >
                <AnimalsList data={data} />
              </div>
            ))
          ) : (
            <div
              style={{
                fontSize: "5vh",
                marginTop: "20vh",
                textAlign: "center",
              }}
            >
              진단 내역이 없습니다!
              <br />
              먼저 [진단하기]로 이동하여 <br />
              AI를 통한 질병 진단을 해주세요!
            </div>
          )}
        </div>
      )}
    </div>
  );
}
