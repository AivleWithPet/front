import {RegisterAll, RegisterDiv, SignIn, Ui, ERROR, Button} from '../../../styles/register.style'
import { Global } from "@emotion/react";
import {MainFontStyles} from '../../../styles/register.style'
import { UserOutlined,  EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import axios from 'axios';
import { useState } from 'react';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [emailError, setErrorEmail] = useState('');
    const [usernameError, setErrorUsername] = useState('');
    const [passwordError, setErrorPassword] = useState('');
    const [confirmPasswordError, setConfirmErrorPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('함수 호출');

        if(validInputs()){
            try {
                const response = await axios.post('/auth/signup', {
                    "email": email,
                    "name": username,
                    "password": password,
                }, { withCredentials: true });
                if (response.status === 200) {
                    console.log('회원가입 성공', response.data);
                    alert("회원가입이 완료되었습니다.");

                } else {
                    console.log('회원가입 실패', response.data);
                }
            } catch (e) {
                console.log('회원가입 실패', e)
            };
        }

        
    };
    
    const onChangeEmail = (event) => {
        setEmail(event.target.value);
        if(event.target.value !== ""){
            setErrorEmail("")
        }
    };

    const onChangeUsername = (event) => {
        setUsername(event.target.value);
        if(event.target.value !== "") {
            setErrorUsername("")
        }
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
        if(event.target.value !== "") {
            setErrorPassword("")
        }
    };

    const onChangeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
        if(event.target.value !== "") {
            setConfirmErrorPassword("")
        }
    };

    const validInputs = () => {
        let isValid = true;
        if (!email) {
            setErrorEmail("이메일을 입력해주세요")
            isValid=false;
        }
        if (!username) {
            setErrorUsername("이름을 입력해주세요")
            isValid=false;
        }
        if (!password) {
            setErrorPassword("비밀번호를 입력해주세요")
            isValid=false;
        }
        if (!confirmPassword) {
            setConfirmErrorPassword("비밀번호를 입력해주세요")
            isValid=false;
        }
        if (password !== confirmPassword) {
            setConfirmErrorPassword("비밀번호가 맞지 않습니다")
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
                    <h4>회원가입</h4>
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
                        <h5>이름</h5>
                        <Input
                            type="text"
                            value={username}
                            onChange={onChangeUsername}
                            placeholder="Enter your Name"
                            prefix={<UserOutlined className="site-form-item-icon" />}
                        />
                        <ERROR>{usernameError}</ERROR>
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
                        <h5>비밀번호 확인</h5>
                        <Input.Password
                            value={confirmPassword}
                            onChange={onChangeConfirmPassword}
                            placeholder="input password"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        <ERROR>{confirmPasswordError}</ERROR>
                    </Ui>
                    <Ui>
                        <Button type="submit">확인</Button>
                    </Ui>  
                </form>
            </RegisterDiv>
        </RegisterAll>
    )
}

