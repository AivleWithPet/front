import React, { useState, useRef } from "react";
import { Global } from "@emotion/react";
import axios from "axios";
import { ImgUploadContainer, MainFontStyles } from "../../../styles/img_upload_emtion";
import Button from 'react-bootstrap/Button';
//////////////////////////////////////////////////// 슬라이드용
import { Navigation, Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'



export default function ImageUpload() {
    // 상태설정
    const [file, setFile] = useState()
    const [showImages, setShowImages] = useState([])
    let imgLists = [...showImages]


    // 이미지를 formdata 객체에 추가하는 함수
    const onUploadImg = (e) => {
        e.preventDefault();

        // formdata 객체 만들기
        const formData = new FormData();


        if (e.target.files) {
            const uploadFiles = e.target.files;
            for (const i = 0; i < uploadFiles.length; i++) {
                formData.append('files', uploadFiles[i]) //서버전달용
                const currentImgUrl = URL.createObjectURL(uploadFiles[i]) //미리보기용
                imgLists.push(currentImgUrl)
            }
            setShowImages(imgLists) // 미리보기용
            setFile(uploadFiles); //서버전달용
            console.log("*********append 확인용*********")
            console.log(uploadFiles);
            console.log("*********push 확인용*********")
            console.log(imgLists);
        }

    };



    // 이미지를 formdata 객체에서 삭제하는 함수
    const onDeleteImg = (target_idx) => {
        const newImgList = file.filter(file => file.idx !== target_idx)
        setFile(newImgList)
        console.log("*********delete 확인용*********")
        console.log(newImgList)
    };


    // 이미지를 서버로 전송하는 함수
    const onClickUpload = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:8000/api/details', {
                headers: { "Content-Type": "multipart/form-data", }, // 헤더 추가
                data: formData
            });
            if (response.status === 200) {
                console.log('이미지 전송 성공', response.data);
            } else {
                console.log('이미지 전송 실패');
            }
        } catch (event) {
            console.error('이미지 전송 실패', event)
        };

    };


    return (
        <>
            <ImgUploadContainer>
                <Global styles={MainFontStyles} ></Global>
                <h2>사진 업로드</h2>
                <h4>사진을 업로드 하세요.</h4>
                {/*미리보기 영역*/}
                <Swiper
                    effect={"fade"}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination, EffectFade]}
                    className="mySwiper"
                    loop={true}
                >
                    {showImages.map((image, id) => {
                        return (
                            <SwiperSlide key={id}>
                                <img src={image} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                {/*미리보기 응용 전*/}
                {/* <div className='img-container'>
                        {showImages.map((image, id) => (
                            <div className='imgConta' key={id}>
                                <img src={image} alt={`${image}-${id}`} />


            {/*이미지 첨부 버튼*/}
                <form method="post" encType="multipart/form-data">
                    <label className='img-label' htmlFor="img-upload">add yout photo</label>
                    <input type="file" id="img-upload" accept="image/*" onChange={onUploadImg} multiple />
                </form>

                {/*서버 제출 버튼*/}
                <Button variant="outline-primary" id='submit-btn' type='submit' onClick={onClickUpload}>Submit</Button>

            </ImgUploadContainer >
        </>
    )
}
