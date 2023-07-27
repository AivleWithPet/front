import React, { useState, useEffect } from "react";
import { ButtonDiv, GuidePageContainer, MainFontStyles, MyImagediv, Mycontents, Textdiv, Title } from "../guide/guide_emotion";
import { Global } from "@emotion/react";
import Button from 'react-bootstrap/Button';
import { useRouter } from "next/router";
import ImageUpload from "../details/ImageUpload";

const num = 0;
export default function SelectPage() {
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
            router.push(`${router.asPath}/test`)
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
                        {num==2&&
                        <MyImagediv>
                            <ImageUpload 
                            prevClick={prevClick}
                            />
                        </MyImagediv>}
                        {num <= 1 &&
                        <MyImagediv>
                            <img src={imageSrc} id='imgs' style={{ width: '47em', height: '35em' }} />
                        </MyImagediv>
                        }
                        {num <= 1 &&
                        <ButtonDiv>
                            <Button variant="outline-primary" id='btn-1' onClick={prevClick}>이전</Button>
                            <Button variant="outline-primary" id='btn-2' onClick={nextClick}>다음</Button>
                        </ButtonDiv>
                        }

                </Textdiv>
            </GuidePageContainer>
        </>
    );

};



