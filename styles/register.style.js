import styled from "@emotion/styled";
import { css } from "@emotion/react";


// export const Img

export const RegisterAll = styled.div`
    width: 100vw;
    height: 100vh;
`

export const RegisterDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 80%;
`

export const SignIn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 280px;
`

export const MainFontStyles = css`
  h2 {
    margin-top: 65px;
    font-size: 64px;
    font-family: 'establishRetrosansOTF';
  }

  h4 {
    font-size: 35px;
    font-family: 'SUITE-Regular';
  }

  h5 {
    font-size: 15px;
    font-family: 'SUITE-Regular';
  }

  @font-face {
    font-family: 'SUITE-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
  }
  
  @font-face {
      font-family: 'establishRetrosansOTF';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2112@1.0/establishRetrosansOTF.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
`

export const Ui = styled.div`
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ERROR = styled.div`
  color: red;
  font-size: 9px;
  padding: 3px;
  height: 20px;
  padding-left: 11px;
`

export const Button = styled.button`
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid gray;
  font-family: 'SUITE-Regular';
  height: 20px;
`

