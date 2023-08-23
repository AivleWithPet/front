import React, { useState, useEffect } from "react";
import { Menu } from "antd";

const Profile = ({ number, petList }) => {
  const selectedPet = petList.find((item) => item.petId == number);

  if (!selectedPet) {
    return null; // data가 없으면 아무것도 렌더링하지 않음
  }
  return (
    // 그리드 컨테이너의 역할 수행

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        width: "300px",
        height: "15vh",
        backgroundColor: "#4A85DC",
        position: 'fixed',
        bottom: 0,
        left: 0
      }}
    >
      <div>
        <img
          src={`data:image/png;base64,${selectedPet.photoData}`}
          style={{
            gridColumn: 1,
            marginLeft: 30,
            textAlign: "left",
            height: "68px",
            width: "68px",
            borderRadius: "50%",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
      <div
        style={{
          gridColumn: 2,
          marginRight: 30,
          marginTop: 20,
          textAlign: "right",
          fontSize: "1.8vh",
        }}
      >
        <p style={{ fontSize: "1.8vh" }}>
          {selectedPet.petName}
          {` (${selectedPet.birthYear})`}
        </p>
        <p style={{ marginTop: 30 }}>{selectedPet.species}</p>
        <p style={{ marginTop: 10 }}>{selectedPet.info}</p>
      </div>
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
      style={{
        backgroundColor: "#68A5FE",
      }}
    >
      {petList.length > 0 ? (
        petList.map((item) => (
          <Menu.Item
            key={item.petId}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "11vh",
              fontSize: "2vh",
              padding: 0,
              margin: 4,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "11vh",
              }}
            >
              <img
                src={`data:image/png;base64,${item.photoData}`}
                style={{
                  marginLeft: 30,
                  height: "48px",
                  width: "48px",
                  borderRadius: "50%",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
                }}
              />
              <div style={{ marginLeft: 150 }}>{item.petName}</div>
            </div>
          </Menu.Item>
        ))
      ) : (
        <Menu.Item
          key="register"
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            height: "11vh",
            fontSize: "2vh",
            padding: 0,
            margin: 4,
          }}
        >
          서비스가 처음이신가요?
        </Menu.Item>
      )}
      {petList.length > 0 && (
        <div
          style={{
            position: "absolute",
            bottom: "0",
          }}
        >
          <Profile number={selectedItem} petList={petList} />
        </div>
      )}
    </Menu>
  );
}
