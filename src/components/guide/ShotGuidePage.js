import React, { useState, useEffect } from "react";
import { GuidePageContainer, MainFontStyles } from "../../../styles/guide_emotion";
import { Global } from "@emotion/react";
import Button from 'react-bootstrap/Button';

const num = 0;
export default function ShotGuidePage() {

    const [imageSrc, setImageSrc] = useState("/img/dog0.jpg");

    const prevClick = () => {
        if (num == 0) return;
        else {
            num--;
            setImageSrc("/img/dog" + num + ".jpg");
        }
    };

    const nextClick = () => {
        if (num == 2) return;
        else {
            num++;
            setImageSrc("/img/dog" + num + ".jpg");
        }
    };




    return (
        <>
            <GuidePageContainer>
                <Global styles={MainFontStyles} ></Global>

                <div class="text-container">
                    <h2>촬영 가이드</h2>
                    <h4>정확한 체크를 위해 꼭 촬영 가이드를 먼저 읽어보세요.</h4>
                    <h4>(예시)</h4>
                </div>
                <div class='img-container'>
                    <img src={imageSrc} id='imgs' />
                </div>
                <div class='bnt-container'>
                    <Button variant="outline-primary" id='btn-1' onClick={prevClick}>이전</Button>
                    <Button variant="outline-primary" id='btn-2' onClick={nextClick}>다음</Button>
                </div>
            </GuidePageContainer>
        </>
    );

};



