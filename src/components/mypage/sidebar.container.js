import React,{ useState } from 'react';
import { Menu } from 'antd';


function getItem(label, key) {
  return {
    key,
    label,
  };
}


export default function SideBar({handleMenuItemClick}) {

    // 이 items를 통신 후에 반복문으로 바꿔야함 (반려동물 여러마리인 사람들을 위해)
    // 근데 이 부분이 length === 0 이면 반려동물 등록유도페이지가 보여야함
    // 등록된 반려동물을 찾을수가 없다는 안내와 함께 버튼 클릭 유도

    const items = [
    getItem('누구', 1),   
    getItem('집', 2),
    getItem('고양이', 3),
  ];

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
            {items.map((item) => (
            <Menu.Item key={item.key}>
                {item.label}
            </Menu.Item>
            ))}
        </Menu>
 

  );
}