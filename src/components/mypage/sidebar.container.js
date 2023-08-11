import React, { useState, useEffect } from "react";
import { Menu } from "antd";

const Profile = ({ number, petList }) => {
  console.log("selectedPet 조회 시도", number, petList);
  const selectedPet = petList.find((item) => item.petId == number);
  console.log("selectedPet 찾음", selectedPet);

  if (!selectedPet) {
    return null; // data가 없으면 아무것도 렌더링하지 않음
  }
  return (
    <div
      style={{
        textAlign: "right",
        fontSize: "1.5vh",
      }}
    >
      <h2>{selectedPet.petName}</h2>
      <p>종류: {selectedPet.species}</p>
      <p>출생 연도: {selectedPet.birthYear}</p>
      <p>추가 정보: {selectedPet.info}</p>
    </div>
  );
};

export default function SideBar({ petList, selectedItem, onItemClick }) {
  useEffect(() => {
    if (petList.length > 0 && !selectedItem) {
      // petList가 있고 selectedItem이 null인 경우 첫 번째 항목을 선택 상태로 설정
      onItemClick(petList[0].petId);
    }
  }, [selectedItem, onItemClick]); //petList

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[
        petList.length > 0 ? petList[0].petId.toString() : null,
      ]}
      selectedKeys={[selectedItem]}
      onClick={({ key }) => onItemClick(key)}
      style={{ backgroundColor: "#68A5FE" }}
    >
      {petList.length > 0 ? (
        petList.map((item) => (
          <Menu.Item
            key={item.petId}
            style={{
              textAlign: "right",
              height: "8vh",
              fontSize: "1.8vh",
            }}
          >
            {item.petName}
          </Menu.Item>
        ))
      ) : (
        <Menu.Item key="register">서비스가 처음이신가요?</Menu.Item>
      )}
      {petList.length > 0 && (
        <div
          style={{
            position: "absolute",
            bottom: "0",
            width: "300px",
            height: "12vh",
            backgroundColor: "#4A85DC",
          }}
        >
          {/* <Profile data={profile} /> */}
          <Profile number={selectedItem} petList={petList} />
        </div>
      )}
    </Menu>
  );
}
