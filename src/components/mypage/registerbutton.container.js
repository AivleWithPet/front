import { Popover, Button, Form, Input,DatePicker } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';


export default function RegisterFB({page}) {

    const text = (
        <div>
        안녕하세요!<br/>
        함께 하게 되어서 반갑습니다! <br />
        여기에서 반려동물을 등록할 수 있습니다.<br />
        사랑하는 반려동물을 등록할 때 필요한 정보들 입니다.
        </div>
      );

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


    // 전송 시 값
    const onFinish = (fieldsValue) => {
        const values = {
          ...fieldsValue,
          'birth': fieldsValue['birth'].format('YYYY'),
        };
        console.log('폼 값 확인용: ', values);
      };

    // 폼
    const CustomContent = () =>(

        <Form
              {...formLayout}
              name="nest-messages"
              onFinish={onFinish}
              style={{
                maxWidth: 800,
              }}
              validateMessages={validateMessages}
      >
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
                name={ 'speices'}
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