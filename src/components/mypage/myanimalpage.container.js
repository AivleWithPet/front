import React, { useState } from 'react';
import SideBar from './sidebar.container'
import RegisterFB from './registerbutton.container'

import { Layout } from 'antd';
const { Content, Sider } = Layout;



export default function MyAnimalPage(){    
    
    const [selectedItem, setSelectedItem] = useState(1);
    const handleMenuClick = (key) => {
        setSelectedItem(key);
        console.log("상위로 오는거 맞니?",selectedItem);
    };

    return (

        <Layout style={{ height: 'calc(100vh - 80px)', display: 'flex'}}>

             <Sider width={300} style={{ color: "white", boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.1)' }}>
                <SideBar handleMenuItemClick={handleMenuClick} />
             </Sider>
     
             <Layout style={{ padding: '0 24px 24px', backgroundColor: "gray"}}>
             <Content>
                {/* 여기에 리스트 컴포넌트가 들어가고  selectedItem를 포함한 data를 파라미터로 전달해줌*/}
             </Content>
             </Layout>
        </Layout>
    )
}