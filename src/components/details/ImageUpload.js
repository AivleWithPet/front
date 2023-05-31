import { Container } from 'react-bootstrap';
import axios from "axios";
import React, { useState, useEffect } from "react";


export default function ImageUpload() {
    // 상태설정
    const [file, setFile] = useState()

    // 이미지를 formdata 객체에 추가하는 함수
    const onChangeImg = (e) => {
        e.preventDefault();
        console.log('함수 호출');

        // formdata 객체 만들기
        const formData = new FormData();

        if (e.target.files) {
            const uploadFile = e.target.files[0]
            formData.append('file', uploadFile)
            setFile(uploadFile)

        }
    }

    // 이미지를 서버로 전송하는 함수
    const onClickUpload = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file)

        try {
            const response = await axios.post('/api/detail', {
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
            <Container>
                <h1>반려동물 사진 업로드 페이지</h1>
                <form>
                    <label htmlFor="profile-upload" />
                    <input type="file" id="profile-upload" accept="image/*" onChange={onChangeImg} />
                </form>

                <button onClick={onClickUpload}>제출</button>

            </Container>
        </>
    )
}