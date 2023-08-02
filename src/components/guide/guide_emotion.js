import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Select, Space, Steps } from "antd";


export const GuidePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  text-align: center;
  background-image: url("/examine/examinebg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: calc(100vh - 80px);
`
export const Textdiv = styled.div`
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 60vw;
  height: 38vw;
  min-height: 729px;
  min-width: 1152px;
  position: relative;
`

export const Title = styled.div`
  padding-top: 4em;
`

export const Mycontents = styled.div`
  padding-top: 1em;
`

export const MyImagediv = styled.div`
  margin-top: 5em;
  padding: 0 9em;
`

export const ButtonDiv = styled.div`
  padding: 2em 0;
  display: flex;
  justify-content: space-between;
  width: 20em;
  position: absolute;
  bottom : 20px;
`
export const MainFontStyles = css`
  h1 {
    font-weight: 1000;
    font-family: 'font1';
  }

  h2 {
    font-family: 'font2';
    margin-bottom: 20px;
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
    font-size: 17px;
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
    width: 133.08px;
    height: 48.67px;

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
    background-clip: padding-box;
    background-color: #fa6400;
    border: 1px solid transparent;
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: "font1";
    font-size: 17px;
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
    width: 138.08px;
    height: 48.67px;
    &:hover,
    &:focus {
      background-color: #fb8332;
      box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    }


    &:active {
      background-color: #c85000;
      box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
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
  margin-top: 5em;
  height: 25vh;
  width: 325px;
  justify-content: space-between;
`

export const MySelect = styled(Select)`
  text-align: center;
  width: 325px;
`

export const PetDiv = styled.div`
  display: flex;
  flex-direction : row;
  width: 20vw;
  justify-content : left;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  padding: 5%;
`

export const MySteps= styled(Steps)`
  width: 80%;
`