import React, { useState, useEffect } from "react";
import { ButtonDiv, Caution, Explain, GuidePageContainer, Image1, Info, MainFontStyles, MyImagediv, MySelect, MySpace, MySteps, Mycontents, PetDiv, Textdiv, Title, Uploaddiv } from "./guide_emotion";
import { Global } from "@emotion/react";
import Button from 'react-bootstrap/Button';
import { useRouter } from "next/router";
import ImageUpload from "../details/ImageUpload";
import { Card } from "antd";
import axios from "axios";

const { Meta } = Card
export default function ShotGuidePage() {
    const END_URL = "http://localhost:8080/pet/myPets";

    const router = useRouter();

    const [num ,setNum] = useState(0)
    const [mypet, setMypet] = useState([]);
    const [choosepet, setChoosepet] = useState()
    const [petname, setPetname] = useState()
    const [petspecies, setSpecies] = useState()
    const [petbirthYear, setBirthYear] = useState()
    const [petinfo, setInfo] = useState()
    const [petprofile, setProfile] = useState()

    const description1 = '반려동물을 선택해주세요.';
    const description2 = '사진업로드시 주의사항';
    const description3 = '사진 제출하기';
    useEffect(() => {
        const token = localStorage?.getItem("accessToken")
        const member_id = localStorage?.getItem("memberId")
        console.log(token)
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
        // console.log(mypet)
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
        setProfile(petinfo.photoData)
    };

    const prevClick = () => {
        if (num == 0) {
          router.push("/examine")  
        } else {
            setNum(prev => prev-1);
        }
    };

    const nextClick = () => {
        if (num == 2) {
            setNum(0)
            router.push(`${router.asPath}/test`)
            return;
        }
        else {
            setNum(prev => prev + 1);
        }
    };

    return (
        <>
            <GuidePageContainer>
                <Global styles={MainFontStyles} />
                <Textdiv>
                    <Title>
                        <h2>촬영 가이드</h2>
                    </Title>
                    <Mycontents>
                        <Caution style={{marginBottom: '2em'}}>정확한 진단을 위해 아래의 순서를 따라주세요.</Caution>
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
                    <>
                        {petname?(
                            <MySpace>
                                <Card
                                    hoverable
                                    style={{width: '100%', height: '100%'}}
                                    cover={<img src={`data:image/jpeg;base64,${petprofile}`} style={{width:'20vw', height:'30vh'}}></img>}
                                    >
                                    <Meta 
                                        title={petname}
                                        description={petspecies}
                                    />
                                </Card>
                            </MySpace>
                        ) : (
                            <MySpace>
                                <MySelect
                                defaultValue="반려동물을 선택해주세요"
                                onChange={handleChange}
                                options={options} />
                            </MySpace>
                        )}
                    </>}
                    {num == 1&&
                        <MyImagediv>
                            <Image1>
                                <Caution>1. 정면을 응시한 채로 눈을 똑바로 뜬 상태로 찍어주세요!</Caution>
                                <img src="/caution/cats1.png" width="250em"/>
                            </Image1>
                            <Image1>
                                <Caution>2. 사진이 흔들리지 않게 주의해주세요!</Caution>
                                <img src="/caution/cats2.png" width="250em"/>
                            </Image1>                            <Image1>
                                <Caution>3. 한 마리만 찍어주세요!</Caution>
                                <img src="/caution/cats3.png" width="250em" style={{paddingBottom:"40px"}}/>
                            </Image1>
                        </MyImagediv>}
                    {num==2&&
                        <Uploaddiv>
                            <ImageUpload 
                                prevClick={prevClick}
                                choosepet={choosepet}
                                petname = {petname}
                                setNum={setNum}
                            />
                        </Uploaddiv>}
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



