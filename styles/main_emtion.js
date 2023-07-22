import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const MainHomePageContainer = styled.div`
  margin-top: calc(100vh - 80vh);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  text-align: center;
  height: 60vh;
`

export const MainFontStyles = css`

  h2 {
    font-size: 64px;
    font-family: 'establishRetrosansOTF';
    margin-bottom: 10px;
  }

  h4 {
    font-size: 32px;
    font-family: 'SUITE-Regular';
    margin-bottom: 20px;
  }

  Button{
    width: 200px;
    margin-bottom: 20px;

  }

  .content_text{
    font-size: 20px;
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
