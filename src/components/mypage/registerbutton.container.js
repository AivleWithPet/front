import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import FormData from "form-data";
import axios from "axios";

import { Popover, Button, Form, Input, DatePicker, message } from "antd";
import { HeartTwoTone } from "@ant-design/icons";

export default function RegisterFB({ page }) {
  const END_URL = "http://localhost:8080/pet/";
  const [img, setImg] = useState(null);
  const router = useRouter();

  const text = (
    <div>
      안녕하세요!
      <br />
      함께 하게 되어서 반갑습니다! <br />
      여기에서 반려동물을 등록할 수 있습니다.
      <br />
      사랑하는 반려동물을 등록할 때 필요한 정보입니다.
      <br />
      반려동물의 이름, 나이, 태어난 해는 필수적인 정보입니다. <br />
      사진을 등록하지 않는다면 기본 이미지로 등록됩니다.
    </div>
  );

  const fileInputRef = useRef(null);

  const handleFileChange = async (event) => {
    const files = event.target.files;
    const newFileList = Array.from(files);
    setImg(newFileList[0]);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const onFinish = async (fieldsValue) => {
    const formData = new FormData();

    try {
      formData.append("name", fieldsValue.name);
      formData.append("species", fieldsValue.species);
      formData.append("birth", fieldsValue.birth.format("YYYY"));
      formData.append("photo", img); // 이미지 파일 추가
      formData.append("info", fieldsValue.info); // info인데 필수는 아님...
      formData.append("accessToken", localStorage.getItem("accessToken")); // 액세스 토큰 추가

      // 실제 전송부...인데 원래 formData가 아니라 여기 headers에 엑세스 토큰이 따로 드가야되지않음?? 그래서 일단 두개 다 줌!
      const response = await axios.post(END_URL, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "multipart/form-data",
          withCredentials: true, //CORS
        },
      });
      if (response.status === 200) {
        console.log("데이터 전송 성공", response.data);
        message.success("등록이 완료되었습니다."); // 성공 메시지 보여주기
        setImg([]);
        router.push("/mypage");
      } else {
        console.log("데이터 전송 실패", response.status);
      }
      // 전송 완료 후 선택된 파일 초기화 &  새로고침
      // setImg([]);
      // router.push("/mypage");
    } catch (error) {
      setImg([]);
      console.error("업로드 중 오류가 발생했습니다.", error);
    }
  };

  const formLayout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 12,
    },
  };

  const validateMessages = {
    required: "${label}을 입력하세요!",
  };

  const CustomContent = () => (
    <Form
      {...formLayout}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      validateMessages={validateMessages}
    >
      {/* 파일 선택 버튼 */}
      <Form.Item name="photo" label="사진">
        <div>
          <Button onClick={handleButtonClick}>파일 선택</Button>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
          {img && <div>{img.name}</div>}
        </div>
      </Form.Item>
      {/* 이름 */}
      <Form.Item name="name" label="이름" rules={[{ required: true }]}>
        <Input placeholder="Please input" />
      </Form.Item>
      {/* 고양이 종류 */}
      <Form.Item name="species" label="종류" rules={[{ required: true }]}>
        <Input placeholder="Please input" />
      </Form.Item>
      {/* 생년 */}
      <Form.Item name="birth" label="생년" rules={[{ required: true }]}>
        <DatePicker picker="year" />
      </Form.Item>
      {/* 정보 */}
      <Form.Item name="info" label="비고">
        <Input placeholder="Please input" />
      </Form.Item>
      {/* 버튼 */}
      <Form.Item
        wrapperCol={{
          ...formLayout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          등록하기
        </Button>
      </Form.Item>
    </Form>
  );

  return (
    <>
      {page === "mypage" && (
        <Popover
          placement="topLeft"
          title={text}
          content={<CustomContent />}
          trigger="click"
          autoAdjustOverflow
        >
          <Button
            type="primary"
            shape="circle"
            style={{
              position: "fixed",
              right: "40px",
              bottom: "20px",
              zIndex: 1000,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "5vh",
              height: "5vh",
            }}
          >
            <HeartTwoTone style={{ fontSize: "4vh" }} />
          </Button>
        </Popover>
      )}
    </>
  );
}
