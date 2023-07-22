import React, { useState, useEffect } from "react";
import { ButtonDiv, GuidePageContainer, MainFontStyles, MyImagediv, Mycontents, Textdiv, Title } from "./guide_emotion";
import { Global } from "@emotion/react";
import Button from 'react-bootstrap/Button';
import { useRouter } from "next/router";

const num = 0;
export default function ShotGuidePage() {
    const router = useRouter()
    const [imageSrc, setImageSrc] = useState("/img/image0.png");
    const [num ,setNum] = useState(0)
    const prevClick = () => {
        if (num == 0) return;
        else {
            setNum(num-1);
            setImageSrc("/img/image" + num + ".png");
            console.log(num)
        }
    };

    const nextClick = () => {
        if (num == 2) {
            router.push(`${router.asPath}/details`)
            setNum(0)
            return;
        }
        else {
            setNum(num+1);
            setImageSrc("/img/image" + num + ".png");
            console.log(num)
        }
    };

    return (
        <>
            <GuidePageContainer>
                <Global styles={MainFontStyles} ></Global>
                <Textdiv>
                    <Title>
                        <h1>촬영 가이드</h1>
                    </Title>
                    <Mycontents>
                        <h2>정확한 체크를 위해 꼭 촬영 가이드를 먼저 읽어보세요.</h2>
                    </Mycontents>
                        <MyImagediv>
                            <img src={imageSrc} id='imgs' style={{ width: 'calc(100vw - 55vw)', height: 'calc(100vh - 40vh)' }} />
                        </MyImagediv>
                    <ButtonDiv>
                        <Button variant="outline-primary" id='btn-1' onClick={prevClick}>이전</Button>
                        <Button variant="outline-primary" id='btn-2' onClick={nextClick}>다음</Button>
                    </ButtonDiv>
                </Textdiv>
            </GuidePageContainer>
        </>
    );

};



