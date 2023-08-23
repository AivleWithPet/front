import React, { useState } from 'react';
import { All } from './temp.style';

import { Global } from "@emotion/react";
import {ERROR, MainFontStyles} from '../../../styles/register.style'
import axios from 'axios';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoginTrue, setIsLoginFalse } from '../../commons/store/store.js';

export default function Temp() {
  const [isSignUpMode, setSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setSignUpMode(true);
  };

  const handleSignInClick = () => {
    setSignUpMode(false);
  };

  // 로그인 시작
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setErrorEmail] = useState('');
  const [passwordError, setErrorPassword] = useState('');

  const router = useRouter();

  // redux 관련
  const loginFlag = useSelector((state)=> {return state.isLogin});
  const dispatch = useDispatch(); // store.js로 요청을 보내주는 함수

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
                  const memberId = response.data.memberId;
                  localStorage.setItem('accessToken', accessToken);
                  localStorage.setItem('refreshToken', refreshToken);
                  localStorage.setItem('name',userName);
                  localStorage.setItem('memberId', memberId)
                  alert("로그인 성공");
                  dispatch(setIsToken({accessToken: accessToken, refreshToken: refreshToken}));
                  dispatch(setIsLoginTrue());
                  router.push("/");
              } else {
                  console.log('로그인 실패', response.data);
                  alert("로그인 실패 : 이메일 또는 비밀번호가 일치하지 않습니다.");
                  dispatch(setIsLoginFalse());
              }
          } catch (e) {
              alert("로그인 실패 : 이메일 또는 비밀번호가 일치하지 않습니다.");
              console.log('로그인 실패', e);
              dispatch(setIsLoginFalse());
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
  // 로그인 끝

  // 회원가입 시작
  const [reEmail, setReEmail] = useState('');
  const [reUsername, setReUsername] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [reConfirmPassword, setReConfirmPassword] = useState('');

  const [reEmailError, setReErrorEmail] = useState('');
  const [reUsernameError, setReErrorUsername] = useState('');
  const [rePasswordError, setReErrorPassword] = useState('');
  const [reConfirmPasswordError, setReConfirmErrorPassword] = useState('');

  const reHandleSubmit = async (e) => {
      e.preventDefault();
      console.log('함수 호출');

      if(reValidInputs()){
          try {
              const response = await axios.post('/auth/signup', {
                  "email": reEmail,
                  "name": reUsername,
                  "password": rePassword,
              }, { withCredentials: true });
              if (response.status === 200) {
                  console.log('회원가입 성공', response.data);
                  alert("회원가입이 완료되었습니다.");
                  setSignUpMode(false); // login 화면으로 이동.
              } else {
                  console.log('회원가입 실패', response.data);
              }
          } catch (e) {
              console.log('회원가입 실패', e)
          };
      }

      
  };
  
  const reOnChangeEmail = (event) => {
      setReEmail(event.target.value);
      if(event.target.value !== ""){
          setReErrorEmail("")
      }
  };

  const reOnChangeUsername = (event) => {
      setReUsername(event.target.value);
      if(event.target.value !== "") {
          setReErrorUsername("")
      }
  };

  const reOnChangePassword = (event) => {
      setRePassword(event.target.value);
      if(event.target.value !== "") {
          setReErrorPassword("")
      }
  };

  const reOnChangeConfirmPassword = (event) => {
      setReConfirmPassword(event.target.value);
      if(event.target.value !== "") {
          setReConfirmErrorPassword("")
      }
  };

  const reValidInputs = () => {
      let isValid = true;
      if (!reEmail) {
          setReErrorEmail("이메일을 입력해주세요")
          isValid=false;
      }
      if (!reUsername) {
          setReErrorUsername("이름을 입력해주세요")
          isValid=false;
      }
      if (!rePassword) {
          setReErrorPassword("비밀번호를 입력해주세요")
          isValid=false;
      }
      if (!reConfirmPassword) {
          setReConfirmErrorPassword("비밀번호를 입력해주세요")
          isValid=false;
      }
      if (rePassword !== reConfirmPassword) {
          setReConfirmErrorPassword("비밀번호가 맞지 않습니다")
          isValid=false;
      }
      return isValid
  };

  // 회원가입 끝

  return (
    <All>
      <div className="joinContainer">
        <div className="welcome">
          <div className="bluebox" style={{ transform: isSignUpMode ? 'translateX(80%)' : 'translateX(0%)' }}>
            {isSignUpMode ? (
              <div className="signup">
                <h1>register</h1>
                <form autoComplete="off" onSubmit={reHandleSubmit}>
                  <input 
                    type="email" 
                    value={reEmail}
                    onChange={reOnChangeEmail}
                    placeholder="Enter your Email" 
                  />
                  <ERROR>{reEmailError}</ERROR>
                  <input 
                    type="text" 
                    value={reUsername}
                    onChange={reOnChangeUsername}
                    placeholder="Enter your Name" 
                  />
                  <ERROR>{reUsernameError}</ERROR>
                  <input 
                    type="password" 
                    value={rePassword}
                    onChange={reOnChangePassword}
                    placeholder="Input Password" 
                  />
                  <ERROR>{rePasswordError}</ERROR>
                  <input 
                    type="password" 
                    value={reConfirmPassword}
                    onChange={reOnChangeConfirmPassword}
                    placeholder="Confirm Password" 
                  />
                  <ERROR>{reConfirmPasswordError}</ERROR>
                  <button className="button submit">create account</button>
                </form>
              </div>
            ) : (
              <div className="signin">
                <h1>sign in</h1>
                <form className="more-padding" autoComplete="off" onSubmit={handleSubmit}>
                  {/* <input type="text" placeholder="username" /> */}
                  {/* <Input
                      type="text"
                      value={email}
                      // onChange={onChangeEmail}
                      placeholder="Enter your E-mail"
                      prefix={<UserOutlined className="site-form-item-icon" />}
                  /> */}
                  <input 
                    type="email" 
                    value={email}
                    onChange={onChangeEmail}
                    placeholder="Enter your E-mail" 
                  />
                  <ERROR>{emailError}</ERROR>
                  <input
                    type="password" 
                    value={password}
                    onChange={onChangePassword}
                    placeholder="Input password" 
                  />
                  <ERROR>{passwordError}</ERROR>
                  <div className="checkbox">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">remember me</label>
                  </div>
                  <button className="button submit">login</button>
                </form>
              </div>
            )}
          </div>
          <div className="leftbox">
            <h2 className="title"><span>BoW</span><br />WoW</h2>
            <p className="desc">AI 기반 반려동물 헬스케어 <span>솔루션</span></p>
            <img className="pet smaller" src="/1.jpg" alt="1357d638624297b" border="0" />
            <p className="account">have an account?</p>
            <button className="button" onClick={handleSignInClick}>login</button>
          </div>
          <div className="rightbox">
            <h2 className="title"><span>BoW</span><br />WoW</h2>
            <p className="desc">AI 기반 반려동물 헬스케어 <span>솔루션</span></p>
            <img className="pet" src="/4.jpg" alt="bouquet" />
            <p className="account">don't have an account?</p>
            <button className="button" onClick={handleSignUpClick}>sign up</button>
          </div>
        </div>
      </div>
    </All>
  );
};










// import React, { useState } from 'react';
// import { All } from './temp.style';

// export default function Temp() {
//   const [isSignUpMode, setSignUpMode] = useState(false);

//   const handleSignUpClick = () => {
//     setSignUpMode(true);
//   };

//   const handleSignInClick = () => {
//     setSignUpMode(false);
//   };

//   return (
//     <All>
//       <div className="joinContainer">
//         <div className="welcome">
//           <div className="bluebox" style={{ transform: isSignUpMode ? 'translateX(80%)' : 'translateX(0%)' }}>
//             {isSignUpMode ? (
//               <div className="signup">
//                 <h1>register</h1>
//                 <form autoComplete="off">
//                   <input type="text" placeholder="username" />
//                   <input type="email" placeholder="email" />
//                   <input type="password" placeholder="password" />
//                   <input type="password" placeholder="confirm password" />
//                   <button className="button submit">create account</button>
//                 </form>
//               </div>
//             ) : (
//               <div className="signin">
//                 <h1>sign in</h1>
//                 <form className="more-padding" autoComplete="off">
//                   <input type="text" placeholder="username" />
//                   <input type="password" placeholder="password" />
//                   <div className="checkbox">
//                     <input type="checkbox" id="remember" />
//                     <label htmlFor="remember">remember me</label>
//                   </div>
//                   <button className="button submit">login</button>
//                 </form>
//               </div>
//             )}
//           </div>
//           <div className="leftbox">
//             <h2 className="title"><span>BoW</span><br />WoW</h2>
//             <p className="desc">AI 기반 반려동물 헬스케어 <span>솔루션</span></p>
//             <img className="pet smaller" src="/1.jpg" alt="1357d638624297b" border="0" />
//             <p className="account">have an account?</p>
//             <button className="button" onClick={handleSignInClick}>login</button>
//           </div>
//           <div className="rightbox">
//             <h2 className="title"><span>BoW</span><br />WoW</h2>
//             <p className="desc">AI 기반 반려동물 헬스케어 <span>솔루션</span></p>
//             <img className="pet" src="/4.jpg" alt="bouquet" />
//             <p className="account">don't have an account?</p>
//             <button className="button" onClick={handleSignUpClick}>sign up</button>
//           </div>
//         </div>
//       </div>
//     </All>
//   );
// };