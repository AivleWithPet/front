import React, { useState, useEffect } from "react";
import { Menu } from "antd";

const Profile = ({ data }) => {
  return (
    <div>
      <h2>{data.petName}</h2>
      <p>종류: {data.species}</p>
      <p>출생 연도: {data.birthYear}</p>
      <p>추가 정보: {data.info}</p>
    </div>
  );
};

export default function SideBar({ petList, selectedItem, onItemClick }) {
  useEffect(() => {
    if (petList.length > 0 && !selectedItem) {
      // petList가 있고 selectedItem이 null인 경우 첫 번째 항목을 선택 상태로 설정
      onItemClick(petList[0].petId);
    }
  }, [petList, selectedItem, onItemClick]);

  // petList에서 selectedItem과 일치하는 항목 찾기..근데 이거 selectedItem에 따라 안 바뀜..이유가 뭘까?
  const selectedPet = petList.find((item) => item.petId === selectedItem);

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
          <Profile data={selectedPet} />
        </div>
      )}
    </Menu>
  );
}
