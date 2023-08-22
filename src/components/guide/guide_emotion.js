import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Select, Space, Steps } from "antd";


export const GuidePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  text-align: center;
  height: calc(100vh - 80px);
  width: 100vw;
  background-color: #EEF3FF;
`
export const Textdiv = styled.div`
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 60%;
  height: 80%;
  position: relative;
  border-radius: 35px;
`

export const Title = styled.div`
  height: 5%;
  padding: 3%;
`

export const Mycontents = styled.div`
  height: 5%;
  padding: 3%;
`

export const MySteps= styled(Steps)`
  width: 80%;
  padding: 3%;
`

export const MyImagediv = styled.div`
  margin-top: 3em;
  display: flex;
  flex-direction: row;
  width: 85%;
  justify-content: space-between;
`

export const Uploaddiv = styled.div`
  margin-top: 5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Caution = styled.p`
  font-size: 17px;
`

export const Image1 = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15em;
  position: absolute;
  bottom : 25px;
`
export const MainFontStyles = css`
  h1 {
    font-weight: 1000;
  }


  #btn-1 {
    align-items: center;
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.85);
    cursor: pointer;
    display: inline-flex;
    font-family: "font1";
    font-size: 14px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    margin: 0;
    min-height: 3rem;
    padding: calc(.875rem - 1px) calc(1.5rem - 1px);
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: 100.08px;
    height: 30.67px;

    &:hover,
    &:focus {
      border-color: rgba(0, 0, 0, 0.15);
      box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
      color: rgba(0, 0, 0, 0.65);
    }

    &:hover {
      transform: translateY(-1px);
    }

    &:active {
      background-color: #F0F0F1;
      
      border-color: rgba(0, 0, 0, 0.15);
      box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
      color: rgba(0, 0, 0, 0.65);
      transform: translateY(0);
    }
  }

  #btn-2 {
    align-items: center;
    background-color: #EEF3FF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: #1677ff;
    cursor: pointer;
    display: inline-flex;
    font-family: "font1";
    font-size: 14px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    margin: 0;
    min-height: 3rem;
    padding: calc(.875rem - 1px) calc(1.5rem - 1px);
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: 100.08px;
    height: 30.67px;

    &:hover,
    &:focus {
      border-color: rgba(0, 0, 0, 0.15);
      box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
      color: #1677ff;
    }

    &:hover {
      transform: translateY(-1px);
    }

    &:active {
      background-color: #F0F0F1;
      
      border-color: rgba(0, 0, 0, 0.15);
      box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
      color: #1677ff;
      transform: translateY(0);
    }
  }

  .img-container{
    width:100%;
    /* height: calc(100%/2 - 200px); */
    margin-bottom: 8px;
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

export const MySpace = styled(Space)`
  display: flex;
  flex-direction: column;
  margin-top: 3em;
  height: 30vh;
  width: 325px;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 5em; */
`

export const MySelect = styled(Select)`
  text-align: center;
  width: 325px;
`

export const PetDiv = styled.div`
  display: flex;
  flex-direction : row;
  width: 35vw;
  height: 30vh;
  justify-content : left;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  padding: 5%;
`
export const Info = styled.div`
  display: flex;
`

export const Explain = styled.h3`

`

