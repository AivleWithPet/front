import { css } from '@emotion/react';
import styled from '@emotion/styled';

// export const Nav = styled.div `
//   height: 70px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   /* max-width: 1000px; */
//   margin: auto;
//   width: 100%;

//   text-decoration: none;
//   padding-left: 0px;
//   padding-right: 20px;
//   color: black;

//   background-color: white;
// `

// export const NavA = styled.div `
//   text-decoration: none;
//   padding-top: 20px;
//   padding-left: 20px; 
//   padding-right: 20px;
//   color: black;
// `


export const NavContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  /* background-color: #E8904F ; */
  padding: 20px 80px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.5);
`

export const NavItemStyles  = css`
  #navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }

  #navbar li {
    list-style: none;
    padding: 0 20px;
    position: relative;
  }

  #navbar li a {
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 600;
    color: black;
    transition: 0.3s ease-in-out;
  }
  
  #navbar li a:hover,
  #navbar li a.active {
    color: #DE7394;
  }

  #navbar li a:hover::after,
  #navbar li a.active::after {
    content: "";
    width: 30%;
    height: 2px;
    background-color: #DE7394;
    position: absolute;
    bottom: -4px;
    left: 20px;
  }

  #mobile { /* 전체 화면일때는 필요없기 때문, 스마트폰 화면(작을 때)일 때만 필요함 */
    display: none;
  }

  #mobile i {
    color: #fff;
  }

  @media screen and (max-width:700px) {
    #navbar {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      position: fixed;
      top: 85px;
      right: -300px;
      width: 300px;
      height: 100vh;
      background-color: #252a2c;
      box-shadow: 0 40px 60px rgba(0, 0, 0, 0.6);
      padding: 40px 0 0 10px;
      transition: 0.3s ease-in-out;
    }
  }

  #navbar.active {
    right: 0px;
  }
  #mobile {
    display: block;
  }
  #mobile div {
    font-size: 24px;
    cursor: pointer;
  }
  #mobile div {
    color: #DE7394;
  }
`