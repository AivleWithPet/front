import React, { useState } from "react";
import { Steps } from "antd";

export default function RegisterInduction() {
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };

  return (
    <>
      <Steps
        size="large"
        current={current}
        onChange={onChange}
        direction="vertical"
        style={{ margin: "120px 240px" }}
        items={[
          {
            title: "Step 1",
            description: "하트 모양 버튼을 마우스로 클릭하세요.",
          },
          {
            title: "Step 2",
            description:
              "귀여운 반려동물의 사진,이름, 종류, 출생년도를 입력하세요. 비고란은 한 줄 설명으로 프로필에 들어갑니다.",
          },
          {
            title: "Step 3",
            description:
              "등록하기 버튼을 누르면 자동으로 새로고침 되어 반려동물 등록이 완료됩니다.",
          },
        ]}
      />
    </>
  );
}
