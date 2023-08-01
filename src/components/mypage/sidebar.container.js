import React, { useState, useEffect } from "react";
import { Menu } from "antd";

export default function SideBar({ petList, selectedItem, onItemClick }) {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[petList.length > 0 ? petList[0].key : null]}
      selectedKeys={[selectedItem]}
      onClick={({ key }) => onItemClick(key)}
    >
      {petList.length > 0 ? (
        petList.map((item) => (
          <Menu.Item key={item.petId}>{item.petName}</Menu.Item>
        ))
      ) : (
        <Menu.Item key="register">
          등록 유도 내용 컴포넌트가 들어갈 예정입니다.
        </Menu.Item>
      )}
    </Menu>
  );
}
