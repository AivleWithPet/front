import styled from "@emotion/styled";
import { css } from "@emotion/react";


export const GuidePageContainer = styled.div`
  margin-top:50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  text-align: center;
`


export const MainFontStyles = css`

  h2 {
    font-size: 32px;
    font-family: 'SUITE-Regular';
    margin-bottom: 10px;;
  }

  h4 {
    font-size: 20px;
    font-family: 'SUITE-Regular';
    margin-bottom: 20px;
  }

  Button{
    width: 100px;
    height: 45px;
    //position: fixed;
    bottom: 100px;
  }

  #btn-1 {
    left: calc(100%/2 - 110px);
    margin-bottom: 20px;
    margin-right: 5px;
  }

  #btn-2 {
    right: calc(100%/2 - 110px);
    margin-bottom: 20px;
    margin-left: 5px;
  }

  .img-container{
    width:100%;
    height: calc(100%/2 - 200px);
    margin-bottom: 30px;
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