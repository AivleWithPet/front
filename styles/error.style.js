import styled from "@emotion/styled";
import {motion} from "framer-motion";

export const BackGroundDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(/BG.png);
    background-repeat: no-repeat;
    background-position: topcenter;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const BodyDiv = styled.div`
    height: 260px;
    margin-left : 50px;
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
