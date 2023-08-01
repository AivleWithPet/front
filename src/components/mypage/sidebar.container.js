import React, { useState, useEffect } from "react";
import { Menu } from "antd";




export default function SideBar({  handleMenuItemClick }) {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(1);

  const handleMenuClick = (key) => {
    setSelectedItem(key);
    handleMenuItemClick(key);
  };

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[1]}
      selectedKeys={[selectedItem]}
      onClick={({ key }) => handleMenuClick(key)}
    >
      {items.length > 0 ? (
        items.map((item) => <Menu.Item key={item.key}>{item.label}</Menu.Item>)
      ) : (
        <Menu.Item key="register">
          {/* key도 바꾸면 됨...상위 컴포넌트로 올라가는 값에 해당하는거라 */}
          등록 유도 내용 컴포넌트가 들어갈 예정임다
        </Menu.Item>
      )}
    </Menu>
  );
}
