import React, { useState, useEffect } from "react";
import { ButtonDiv, GuidePageContainer, MainFontStyles, MyImagediv, MySelect, MySpace, MySteps, Mycontents, Textdiv, Title } from "./guide_emotion";
import { Global } from "@emotion/react";
import Button from 'react-bootstrap/Button';
import { useRouter } from "next/router";
import ImageUpload from "../details/ImageUpload";
import { Steps } from "antd";
import axios from "axios";

const num = 0;
export default function ShotGuidePage() {
    const END_URL = "http://localhost:8080/pet/myPets";

    const router = useRouter();

    const [imageSrc, setImageSrc] = useState("/img/image0.png");
    const [num ,setNum] = useState(0)
    const [mypet, setMypet] = useState([]);
    const [choosepet, setChoosepet] = useState()
    const [petname, setPetname] = useState()
    const [petspecies, setSpecies] = useState()
    const [petbirthYear, setBirthYear] = useState()
    const [petinfo, setInfo] = useState()

    const description1 = '반려동물을 선택해주세요.';
    const description2 = '사진업로드시 주의사항';
    const description3 = '사진 제출하기';
    useEffect(() => {
        const token = localStorage?.getItem("accessToekn")
        const member_id = localStorage?.getItem("memberId")
        const petData = async () => {
            const result = await axios.get(END_URL,{ 
                params: {memberId: member_id},
                headers: { Authorization: `Bearer ${token}`}
            });
            if (result.data.length === 0) {
                alert("등록된 반려동물이 없습니다.")
                router.push("/")
                return
            }
            setMypet(result.data)
        }
        petData()
        console.log(mypet)
    }, [])

    const options = mypet?.map(el => ({
        value: el.petId,
        label: el.petName,
    }));

    // e에 나중에 받아온 pet_id 들어가야 합니다
    const handleChange = (e) => {
        setChoosepet(e)
        const petinfo = mypet.find((el) => el.petId === e)
        setPetname(petinfo.petName)
        setSpecies(petinfo.species)
        setBirthYear(petinfo.birthYear)
        setInfo(petinfo.info)
    };

    const prevClick = () => {
        if (num == 0) {
          router.push("/examine")  
        } else {
            setNum(prev => prev-1);
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
            setNum(prev => prev + 1);
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
                    <MySteps
                        current={num}
                        items={[
                        {
                            title: '반려동물 선택하기',
                            description1,
                        },
                        {
                            title: '사진 유의사항',
                            description2,
                        },
                        {
                            title: '사진 업로드',
                            description3,
                        },
                        ]}
                    />
                    {num == 0&&   
                    <MySpace>
                        {petname?(
                            <div style={{display:"flex", flexDirection:"row", width:"20vw", justifyContent:"left"}}>  
                                <img src='/1.jpg' width="150px" height='150px'></img>
                                <div style={{marginLeft:"20px", display:"flex", flexDirection:"column", justifyContent:"left", textAlign:"left"}}>
                                    <div>이름 : {petname}</div> 
                                    <div>종 : {petspecies}</div> 
                                    <div>생일 : {petbirthYear}</div>
                                    <div>설명 : {petinfo}</div>
                                </div>
                            </div>
                        ) :''}
                        <MySelect
                        defaultValue="반려동물을 선택해주세요"
                        onChange={handleChange}
                        options={options} />
                    </MySpace>}
                    {num == 1&&
                        <MyImagediv>
                            <h3>1. 사진을 찍을 때 눈을 똑바로 뜬 사진을 찍어주세요!</h3>
                            <h3>2. 사진이 흔들리지 않게 블라블라</h3>
                            <h3>3. 블라블라..</h3>
                        </MyImagediv>}
                    {num==2&&
                        <MyImagediv>
                            <ImageUpload 
                                prevClick={prevClick}
                                choosepet={choosepet}
                            />
                        </MyImagediv>}
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



