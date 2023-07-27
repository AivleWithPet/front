import {RegisterAll, RegisterDiv, SignIn, Ui, ERROR, Button} from '../../../styles/register.style'
import { Global } from "@emotion/react";
import {MainFontStyles} from '../../../styles/register.style'
import { UserOutlined,  EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setErrorEmail] = useState('');
    const [passwordError, setErrorPassword] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('함수 호출');

        if(validInputs()){
            try {
                const response = await axios.post('/auth/login', {
                    'email': email,
                    'password': password,
                }, { withCredentials: true });
                if (response.status === 200) {
                    console.log('로그인 성공', response.data);
                    const accessToken = response.data.accessToken;
                    const refreshToken = response.data.refreshToken;
                    const userName = response.data.name;
                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('refreshToken', refreshToken);
                    localStorage.setItem('name',userName);
                    alert("로그인 성공");
                    router.push("/");
                } else {
                    console.log('로그인 실패', response.data);
                    alert("로그인 실패 : 이메일 또는 비밀번호가 일치하지 않습니다.");
                }
            } catch (e) {
                alert("로그인 실패 : 이메일 또는 비밀번호가 일치하지 않습니다.");
                console.log('로그인 실패', e);
            };
        }

        
    };
    
    const onChangeEmail = (event) => {
        setEmail(event.target.value);
        if(event.target.value !== ""){
            setErrorEmail("")
        }
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
        if(event.target.value !== "") {
            setErrorPassword("")
        }
    };

    const validInputs = () => {
        let isValid = true;
        if (!email) {
            setErrorEmail("이메일을 입력해주세요")
            isValid=false;
        }
        if (!password) {
            setErrorPassword("비밀번호를 입력해주세요")
            isValid=false;
        }
        return isValid
    };
    
    return(
        <RegisterAll>
            <RegisterDiv>
                <SignIn>
                    <Global styles={MainFontStyles} ></Global>
                    <h2>BowWow</h2>
                    <h4>로그인</h4>
                </SignIn>
                <form onSubmit={handleSubmit}>
                    <Ui>
                        <h5>이메일</h5>
                        <Input
                            type="text"
                            value={email}
                            onChange={onChangeEmail}
                            placeholder="Enter your E-mail"
                            prefix={<UserOutlined className="site-form-item-icon" />}
                        />
                        <ERROR>{emailError}</ERROR>
                    </Ui>
                    <Ui>
                        <h5>비밀번호</h5>
                        <Input.Password
                            value={password}
                            onChange={onChangePassword}
                            placeholder="input password"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        <ERROR>{passwordError}</ERROR>
                    </Ui>
                    <Ui>
                        <Button type="submit">로그인</Button>
                    </Ui>  
                </form>
            </RegisterDiv>
        </RegisterAll>
    )
}

