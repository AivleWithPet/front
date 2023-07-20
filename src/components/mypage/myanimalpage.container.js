import React, { useState } from 'react';
import SideBar from './sidebar.container'
import RegisterFB from './registerbutton.container'



export default function MyAnimalPage(){    
    
    const [selectedItem, setSelectedItem] = useState(1);
    const handleMenuClick = (key) => {
        setSelectedItem(key);
        console.log("상위로 오는거 맞니?",selectedItem);
    };

    return (

        <div>
        <SideBar handleMenuItemClick={handleMenuClick}/>
        {/* 여기에 리스트 컴포넌트가 들어가고  selectedItem를 포함한 data를 파라미터로 전달해줌*/}
        </div>
    )
}