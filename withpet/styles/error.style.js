import styled from "@emotion/styled";
import {motion} from "framer-motion";


export const BackGroundDiv = styled.body`
    background-image: url(/BG.png);
    background-repeat: no-repeat;
    background-position: topcenter;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: row;
    padding: 11% 0 0 100px;
`


export const BodyDiv = styled.div`
    height: 260px;
    display : flex;
    flex-direction: column;
    justify-content: space-between;
`


export const ErrorButton = styled(motion.button)`
    background-color: aliceblue;
    border-color: #37474f;
    border-radius: 10px;
    width : 50%;
    height : 50px;
    font-size: 19px;
    cursor: pointer;
    font-family: "paybooc-Light", sans-serif;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    font-weight: 600;
    transition: 0.25s;
    display: inline-block;
    border: none;
`



export const Word = styled.p`
    padding-left: 10px;
    color: white;
    font-size: 25px;

`

export const HeaderDIV = styled`

`