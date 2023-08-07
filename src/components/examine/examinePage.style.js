import styled from "@emotion/styled"
import { Select, Space } from "antd"

export const background = styled.div`
  height: calc(100vh - 84.44px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EEF3FF;
`

export const mainbox = styled.div`
  background-color: white;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
  width: calc(100vh - 140.44px);  
  height: 35em;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 35px;
`

export const title = styled.div`
  padding-top: 3.5em;
`

export const contents = styled.div`
  padding-top: 2rem;
  text-align: center;
`
export const examineimg = styled.img`
  padding-top: 1rem;
  width: 200px;

`

export const buttondiv = styled.div`
  width: 15em;
  display: flex;
  justify-content: space-between;
  padding-top: 4em;
`

export const Mybutton1 = styled.button`
  align-items: center;
  background-color: #1677ff;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
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
    color: #fff;

  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #F0F0F1;
    
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: #fff;
    transform: translateY(0);
  }
`

export const Mybutton2 = styled.button`
  align-items: center;
  background-color: #fff;
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
`

