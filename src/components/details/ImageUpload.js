import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import { useState } from 'react';
import { ImgUploadContainer, MainFontStyles } from "../../../styles/img_upload_emtion";
import { Global } from "@emotion/react";
import Button from 'react-bootstrap/Button';
import axios from "axios";



const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });


export default function ImageUpload() {

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([]);


    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );


    // 이미지를 서버로 전송하는 함수

    const handleApi = async (event) => {
        event.preventDefault();
        const formData = new FormData();


        if (fileList) {
            for (const i = 0; i < fileList.length; i++) {
                formData.append('title', fileList[i]['originFileObj']['name'])  //서버전달용
                formData.append('content', fileList[i]['originFileObj'])
            }
        };

        console.log("******************************")
        // FormData의 key 확인
        for (let key of formData.keys()) {
            console.log("formDara key");
            console.log(key);
        }

        // FormData의 value 확인
        for (let value of formData.values()) {
            console.log("formDara values");
            console.log(value);
        }
        //data: formData
        try {
            const response = await axios.post('http://localhost:8000/ai', formData, {
                headers: { "Content-Type": "multipart/form-data", }, // 헤더 추가
                withCredentials: true,
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

    //https://www.mocky.io/v2/5cc8019d300000980a055e76

    return (
        <>
            <ImgUploadContainer>
                <Global styles={MainFontStyles} ></Global>
                <h2>사진 업로드</h2>
                <h4>사진을 업로드 하세요.</h4>
                <Upload
                    action="http://localhost:3000/"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                >
                    {fileList.length >= 5 ? null : uploadButton}
                </Upload>

                <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                    <img
                        style={{
                            width: '100%',
                        }}
                        src={previewImage}
                    />
                </Modal>

                {/*서버 제출 버튼*/}
                <Button variant="outline-primary" id='submit-btn' type='submit' onClick={handleApi}>Submit</Button>

            </ImgUploadContainer >
        </>
    );
};
