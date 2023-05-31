import {LoginAll, LoginDiv, SignIn, Ui, MyStyle} from '../../../styles/login.style'
import { Global } from "@emotion/react";
import {MainFontStyles} from '../../../styles/login.style'
import { InfoCircleOutlined, UserOutlined,  EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Tooltip, Button } from 'antd';
import axios from 'axios';
import { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('함수 호출');
    
        try {
            const response = await axios.post('/api/register', {
                'email': email,
                'username' : username,
                'password' : password,
            });
            if (response.status === 200) {
                console.log('회원가입 성공', response.data);
            } else {
            console.log('회원가입 실패');
            }
        } catch (e) {
            console.error('회원가입 실패', e)
        };
    }

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
                <form onSubmit={handleSubmit}>
                    <Ui>
                        <h5>이메일</h5>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={MyStyle}
                            placeholder="input password"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </Ui>
                    {/* <Ui>
                        <h5>비밀번호 확인</h5>
                        <Input.Password
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            style= {MyStyle}
                            placeholder="input password"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </Ui> */}
                    <Ui>
                        <button type="submit">확인</button>
                    </Ui>  
                </form>
            </LoginDiv>
        </LoginAll>
    )
}

