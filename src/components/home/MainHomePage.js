import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { Global } from "@emotion/react";
import { MainHomePageContainer, MainFontStyles } from "../../../styles/main_emtion";
import Button from 'react-bootstrap/Button';

const MainHomePage = () => {
    const router = useRouter();
    // 페이지 이동은 yarn에서는 useRouter

    const onClickMove = () => {
        router.push("guide"); //이거 그럼 guide로 바꾸면 되는지?
    };

    const mystyle = {
        height: "80%"
    };


    return (
        <>
            <MainHomePageContainer>
                <Global styles={MainFontStyles} ></Global>
                <div styled={mystyle}>
                    <div>
                        <h2>BowWow</h2>
                        <h4>AI 기반<br />
                            진단 헬스 케어 시스템</h4>
                    </div>
                    <div>
                        <Button variant="outline-primary" size="lg" onClick={onClickMove}>Try for it</Button>
                    </div>
                    <div class='content_text'>
                        자잘한 서비스 설명이 들어갑니다.<br />
                        내용은 미정입니다.
                    </div>
                </div>
            </MainHomePageContainer>
        </>
        );

};

export default MainHomePage;