import React, { useState } from 'react';
import FormData from 'form-data';
import axios from 'axios';

import { Popover, Button, Form, Input, DatePicker } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';




export default function RegisterFB({page}) {
    const END_URL =  'http://localhost:8080/pet/';
    const [img , setImg] = useState([]); // 이미지 파일 처리 위함
    const formData = new FormData(); // 전역변수로!


    const text = (
        <div>
        안녕하세요!<br/>
        함께 하게 되어서 반갑습니다! <br />
        여기에서 반려동물을 등록할 수 있습니다.<br />
        사랑하는 반려동물을 등록할 때 필요한 정보들 입니다.
        </div>
      );

    // 폼 데이터에 담고 서버 전송
    const onFinish = async (fieldsValue) => {
      const files = fieldsValue.photo;
      const newFileList = Array.from(files);
      setImg(newFileList);
      console.log(newFileList);

      try {
          formData.append('photo', img); // 그냥 fieldsValue.photo 사용 시 fakepath가 들어감
          formData.append('name', fieldsValue.name);
          formData.append('species', fieldsValue.species);
          formData.append('birth', fieldsValue.birth.format('YYYY'));
          // formData.append('accessToken', localStorage.getItem('accessToken'))

          for (let value of formData.values()) {
            console.log(value);
          }

          // 실제 전송부
          // const response = await axios.post(END_URL, formData, {
          //   headers: {
          //       "Content-Type": "multipart/form-data",
          //       withCredentials: true, //CORS
          //   },
          // });
          // if (response.status === 200) {
          //     console.log('데이터 전송 성공', response.data);
          // } else {
          //     console.log('데이터 전송 실패', response.status);
          // }
          // router.push(`${router.aspath}/mypage`)

      } catch (error) {
        console.error('업로드 중 오류가 발생했습니다.', error);
      }
    };


    // 폼 레이아웃
    const formLayout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 12,
        },
      };
    
    // 폼 검증 메세지
    const validateMessages = {
        required: '${label}을 입력하세요!',
      };


    // 폼
    const CustomContent = () =>(

        <Form
              {...formLayout}
              name="nest-messages"
              onFinish={onFinish}
              style={{
                maxWidth: 600,
              }}
              validateMessages={validateMessages}
      >
        {/* 사진 */}
        <Form.Item
                name={'photo'}
                label="사진"
                rules={[{required: true,},]}
          >
          <input type="file" accept="image/*" />
          </Form.Item>

          {/* 이름 */}
          <Form.Item
                name={'name'}
                label="이름"
                rules={[{required: true,},]}
          >
            <Input placeholder="Please input"/>
          </Form.Item>
          {/* 고양이 종류 */}
          <Form.Item
                name={ 'species'}
                label="종류"
                rules={[{required: true,},]}
          >
            <Input placeholder="Please input"/>
          </Form.Item>
          {/* 생년 */}
          <Form.Item 
              name={'birth'}
              label="생년" 
              rules={[{required: true,},]}
          >
            <DatePicker picker="year" />
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
    )


    return (
        <>
        {page === 'mypage' && ( 
        <Popover placement="topLeft" title={text} content={<CustomContent />} trigger="click" autoAdjustOverflow >
          <Button type="primary" shape="circle" 
            style={{
              position: 'fixed', right: '40px', bottom: '20px', zIndex: 1000,
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              width: '5vh', height: '5vh',
            }}>
            <HeartTwoTone style={{ fontSize: '4vh' }} />
          </Button>
        </Popover>)}
       
        </>
      );


}



    // 전송 시 값, formData로 리프레쉬 토큰까지..를 json으로 하려했던 버전 - 미완
    // const onFinish = (fieldsValue) => {
    //   const values = {
    //     ...fieldsValue,
    //     'birth': fieldsValue['birth'].format('YYYY'),
    //   };
    //   console.log('폼 값 확인용: ', values);
    // };
      