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



// export default function ImageUpload() {
//     const [selectedPhotos, setSelectedPhotos] = useState([]);
//     const [previewPhotos, setPreviewPhotos] = useState([]);

//     const handlePhotoChange = (event) => {
//         const files = event.target.files;
//         const selected = Array.from(files).slice(0, 5); // 최대 5개의 파일 선택

//         setSelectedPhotos(selected);

//         const previews = [];
//         for (let i = 0; i < selected.length; i++) {
//             previews.push(URL.createObjectURL(selected[i]));
//         }
//         setPreviewPhotos(previews);
//     };

//     const handlePhotoDelete = (index) => {
//         const updatedSelectedPhotos = [...selectedPhotos];
//         updatedSelectedPhotos.splice(index, 1);
//         setSelectedPhotos(updatedSelectedPhotos);

//         const updatedPreviewPhotos = [...previewPhotos];
//         updatedPreviewPhotos.splice(index, 1);
//         setPreviewPhotos(updatedPreviewPhotos);
//     };

//     const handlePhotoUpload = async () => {
//         const formData = new FormData();
//         for (let i = 0; i < selectedPhotos.length; i++) {
//             console.log(selectedPhotos[i])
//             formData.append('photos', selectedPhotos[i]);
//         }

//         try {
//             const response = await axios.post('http://127.0.0.1:8000', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             if (response.status === 200) {
//                 console.log('이미지 전송 성공', response.data);
//             } else {
//                 console.log('이미지 전송 실패');
//             }
//         } catch (event) {
//             console.error('이미지 전송 실패', event)
//         };
//     };
//     return (
//         <>
//             <ImgUploadContainer>
//                 <Global styles={MainFontStyles} ></Global>
//                 <h2>사진 업로드</h2>
//                 <h4>사진을 업로드 하세요.</h4>
//                 <div>
//                     <input type="file" multiple onChange={handlePhotoChange} />
//                     <button onClick={handlePhotoUpload}>사진 업로드</button>
//                     <div>
//                         {previewPhotos.map((preview, index) => (
//                             <div key={index}>
//                                 <img src={preview} alt="Preview" width="200" height="200" />
//                                 <button onClick={() => handlePhotoDelete(index)}>삭제</button>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 {/*서버 제출 버튼*/}
//                 <Button variant="outline-primary" id='submit-btn' type='submit' onClick={handlePhotoUpload}>Submit</Button>
//             </ImgUploadContainer >
//         </>)
// }


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
                console.log(fileList[i])
                formData.append('title', fileList[i]['originFileObj']['name'])  //서버전달용
                formData.append('content', fileList[i]['originFileObj'])
            }
        };
        try {
            const response = await axios.post('http://127.0.0.1:8000', formData, {
                headers: { "Content-Type": "multipart/form-data", }, // 헤더 추가
            });
            if (response.status === 200) {
                console.log('이미지 전송 성공', response.data);
            } else {
                console.log('이미지 전송 실패');
            }
        } catch (event) {
            console.error('이미지 전송 실패', event)
        };
        // console.log("******************************")
        // // FormData의 key 확인
        // for (let key of formData.keys()) {
        //     console.log("formDara key");
        //     console.log(key);
        // }

        // // FormData의 value 확인
        // for (let value of formData.values()) {
        //     console.log("formDara values");
        //     console.log(value);
        // }
        // data: formData

    };

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
