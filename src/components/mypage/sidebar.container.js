import React, { useState, useEffect } from "react";
import { Menu } from "antd";

export default function SideBar({ petList, selectedItem, onItemClick }) {
  useEffect(() => {
    if (petList.length > 0 && !selectedItem) {
      // petList가 있고 selectedItem이 null인 경우 첫 번째 항목을 선택 상태로 설정
      onItemClick(petList[0].petId);
    }
  }, [petList, selectedItem, onItemClick]);

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[
        petList.length > 0 ? petList[0].petId.toString() : null,
      ]}
      selectedKeys={[selectedItem]}
      onClick={({ key }) => onItemClick(key)}
    >
      {petList.length > 0 ? (
        petList.map((item) => (
          <Menu.Item key={item.petId}>{item.petName}</Menu.Item>
        ))
      ) : (
        <Menu.Item key="register">서비스가 처음이신가요?</Menu.Item>
      )}
    </Menu>
  );
}

// import React, { useState, useEffect } from "react";
// import { Menu } from "antd";

// export default function SideBar({ petList, selectedItem, onItemClick }) {
//   return (
//     <Menu
//       mode="inline"
//       defaultSelectedKeys={[petList.length > 0 ? petList[0].key : null]}
//       selectedKeys={[selectedItem]}
//       onClick={({ key }) => onItemClick(key)}
//     >
//       {petList.length > 0 ? (
//         petList.map((item) => (
//           <Menu.Item key={item.petId}>{item.petName}</Menu.Item>
//         ))
//       ) : (
//         <Menu.Item key="register">서비스가 처음이신가요?</Menu.Item>
//       )}
//     </Menu>
//   );
// }
