import React, { useState, useEffect } from "react";
import axios from "axios";
import RegisterInduction from "./induction.container";

const END_URL = "http://localhost:8080/pet";

// pet/{pet_id}로 통신하면 됨

export default function AnimalListView({ selectedItem }) {
  const [petData, setPetData] = useState(null);
  console.log("젤처음뭔데", selectedItem);

  useEffect(() => {
    if (selectedItem != "register") {
      // selectedPet이 register가 아닐 때에만 Axios 통신을 수행
      fetchPetData(selectedItem);
    }
  }, []);

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
        <div>
          {selectedItem}여기에 펫데이터 쓸거임 굳이 컴포넌트 안 만들고 여기 위에
          const로 하자
        </div>
      )}
    </div>
  );
}
