import React, { useState, useEffect } from "react";
import { Global } from "@emotion/react";
import axios from "axios";
import { ImgUploadContainer, MainFontStyles } from "../../../styles/img_upload_emtion";
import Button from 'react-bootstrap/Button';

export default function ImageUpload() {
    // 상태설정
    const [file, setFile] = useState()
    const [previewImg, setPreviewImg] = useState([])

    // 이미지를 formdata 객체에 추가하는 함수
    const onChangeImg = (e) => {
        e.preventDefault();

        // formdata 객체 만들기
        const formData = new FormData();

        if (e.target.files) {
            const uploadFiles = e.target.files;

            for (const i = 0; i < uploadFiles.length; i++) {
                formData.append('files', uploadFiles[i]);
            }
            setFile(uploadFiles);
            console.log(uploadFiles);
            //////////////////////////////////////////////////////////////// 원본
            // const uploadFiles = e.target.files[0];
            // formData.append('file', uploadFiles);
            // setFile(uploadFiles);

        }


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


                <div class='img-container'>
                    <img id='imgs' />
                </div>


                <form method="post" encType="multipart/form-data">
                    <label class='img-label' htmlFor="img-upload">add yout photo</label>
                    <input type="file" id="img-upload" accept="image/*" onChange={onChangeImg} multiple />
                </form>

                <Button variant="outline-primary" id='submit-btn' type='submit' onClick={onClickUpload}>Submit</Button>

            </ImgUploadContainer>
        </>
    )
}

// input태그는 이후 css에서 display:none 옵션으로 숨길예정 (https://velog.io/@hye_rin/React-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C%ED%95%98%EA%B3%A0-%EB%AF%B8%EB%A6%AC%EB%B3%B4%EA%B8%B0)
// css쪽 작업후에 이미지 프리뷰 어케 띄울지 고민좀 하겠음