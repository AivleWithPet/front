import {LoginAll, LoginDiv, SignIn, Ui, MyStyle} from '../../../styles/login.style'
import { Global } from "@emotion/react";
import {MainFontStyles} from '../../../styles/login.style'
import { InfoCircleOutlined, UserOutlined,  EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Tooltip, Button } from 'antd';

export default function LoginPage() {
    const MyStyle = {
        width: '250px'
    }
    return(
        <LoginAll>
            <LoginDiv>
                <SignIn>
                    <Global styles={MainFontStyles} ></Global>
                    <h2>BowWow</h2>
                    <h4>회원가입</h4>
                </SignIn>
                <Ui>
                    <h5>이메일</h5>
                    <Input
                        style={MyStyle}
                        placeholder="Enter your E-mail"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        suffix={
                          <Tooltip title="Extra information">
                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                          </Tooltip>
                    }
                    />
                </Ui>
                <Ui>
                    <h5>이름</h5>
                    <Input
                        style={MyStyle}
                        placeholder="Enter your Name"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        suffix={
                          <Tooltip title="Extra information">
                            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                          </Tooltip>
                        }
                    />
                </Ui>
                <Ui>
                    <h5>비밀번호</h5>
                    <Input.Password
                        style={MyStyle}
                        placeholder="input password"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </Ui>
                <Ui>
                    <h5>비밀번호 확인</h5>
                    <Input.Password
                        style= {MyStyle}
                        placeholder="input password"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </Ui>
                <Ui>
                    <Button>확인</Button>
                </Ui>  
            </LoginDiv>
        </LoginAll>
    )
}

