import React, { useState } from 'react';
import { ImgUploadContainer, MainFontStyles } from '../../../styles/img_upload_emtion';
import { Global } from '@emotion/react';
import { Modal, Button } from 'antd';
import { CameraOutlined } from '@ant-design/icons';
import axios from 'axios';
import Preview from './PreView';


const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });


export default function ImageUpload() {

    const [fileList, setFileList] = useState([]);

    //const handleFileChange = ({ fileList: newFileList }) => setFileList(newFileList);

    const handleFileChange = (event) => {
        const files = event.target.files;
        const newFileList = Array.from(files);
        setFileList(newFileList);
    };

    // 서버 전송
    const handleApi = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', fileList)  //서버전달용
        // 지금 임시로 확인
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
    }
    /////////////////////// 여기까지가 API

    ///////////////////////
    console.log('fileList:', fileList);
    ///////////////////////

    return (
        <>
            <ImgUploadContainer>
                <Global styles={MainFontStyles} ></Global>
                <h2>사진 업로드</h2>
                <h4>사진을 업로드 하세요.</h4>

                {/* <input id="file-upload" type="file" accept="image/*" onChange={handleFileChange} /> */}
                <label htmlFor="file-upload">
                    <div style={{ width: '700px', height: '500px', backgroundColor: 'gray', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <CameraOutlined style={{ fontSize: '56px' }} />
                        <p style={{ marginTop: '10px' }}>Click to upload an image</p>
                    </div>
                </label>

                <input id="file-upload" type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />


                {fileList && (
                    <Preview fileList={fileList} />
                )}

                {/*서버 제출 버튼*/}
                < Button variant="outline-primary" id='submit-btn' type='submit' onClick={handleApi}>Submit</Button>
            </ImgUploadContainer >
        </>
    );

}








// const getBase64 = (file) =>
//     new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = () => resolve(reader.result);
//         reader.onerror = (error) => reject(error);
//     });


// const ImageUpload = () => {
//     const [previewOpen, setPreviewOpen] = useState(false);
//     const [previewImage, setPreviewImage] = useState('');
//     const [previewTitle, setPreviewTitle] = useState('');
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [previewURL, setPreviewURL] = useState('');

//     const handleCancel = () => setPreviewOpen(false);

//     const handlePreview = async (file) => {
//         if (!file.url && !file.preview) {
//             file.preview = await getBase64(file.originFileObj);
//         }
//         setPreviewImage(file.url || file.preview);
//         setPreviewOpen(true);
//         setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
//     };

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         setSelectedFile(file);
//         setPreviewURL('');

//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onloadend = () => {
//             setPreviewURL(reader.result);
//         };
//         reader.readAsDataURL(file);
//     };

//     const handleUpload = async () => {
//         if (!selectedFile) {
//             console.log('파일을 선택해주세요.');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('title', selectedFile.name);
//         formData.append('content', selectedFile);

//         try {
//             const response = await axios.post('http://127.0.0.1:8000', formData, {
//                 headers: { 'Content-Type': 'multipart/form-data' },
//             });
//             if (response.status === 200) {
//                 console.log('이미지 전송 성공', response.data);
//             } else {
//                 console.log('이미지 전송 실패');
//             }
//         } catch (error) {
//             console.error('이미지 전송 실패', error);
//         }
//     };

//     return (
//         <>
//             <ImgUploadContainer>
//                 <Global styles={MainFontStyles}></Global>
//                 <h2>사진 업로드</h2>
//                 <h4>사진을 업로드 하세요.</h4>
//                 <label htmlFor="file-upload" className="custom-file-upload">
//                     <CameraOutlined style={{ fontSize: '48px' }} />
//                 </label>
//                 <input id="file-upload" type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />

//                 {selectedFile && (
//                     <div>
//                         <img src={previewURL} alt="Preview" width="200" height="200" />
//                     </div>
//                 )}

//                 {/*서버 제출 버튼*/}
//                 <Button variant="outline-primary" id="submit-btn" type="submit" onClick={handleUpload}>
//                     Submit
//                 </Button>
//             </ImgUploadContainer>
//         </>
//     );
// };

// export default ImageUpload;



// const getBase64 = (file) =>
//     new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = () => resolve(reader.result);
//         reader.onerror = (error) => reject(error);
//     });

// const ImageUpload = () => {
//     const [previewOpen, setPreviewOpen] = useState(false);
//     const [previewImage, setPreviewImage] = useState('');
//     const [previewTitle, setPreviewTitle] = useState('');
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [previewURL, setPreviewURL] = useState('');

//     const handleCancel = () => setPreviewOpen(false);

//     const handlePreview = async (file) => {
//         if (!file.url && !file.preview) {
//             file.preview = await getBase64(file.originFileObj);
//         }
//         setPreviewImage(file.url || file.preview);
//         setPreviewOpen(true);
//         setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
//     };

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         setSelectedFile(file);

//         const reader = new FileReader();
//         reader.onloadend = () => {
//             setPreviewURL(reader.result);
//         };
//         reader.readAsDataURL(file);
//     };

//     const handleUpload = async () => {
//         if (!selectedFile) {
//             console.log('파일을 선택해주세요.');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('title', selectedFile.name);
//         formData.append('content', selectedFile);

//         try {
//             const response = await axios.post('http://127.0.0.1:8000', formData, {
//                 headers: { 'Content-Type': 'multipart/form-data' },
//             });
//             if (response.status === 200) {
//                 console.log('이미지 전송 성공', response.data);
//             } else {
//                 console.log('이미지 전송 실패');
//             }
//         } catch (error) {
//             console.error('이미지 전송 실패', error);
//         }
//     };

//     return (
//         <>
//             <ImgUploadContainer>
//                 <Global styles={MainFontStyles} ></Global>
//                 <h2>사진 업로드</h2>
//                 <h4>사진을 업로드 하세요.</h4>
//                 <input type="file" accept="image/*" onChange={handleFileChange} />
//                 {selectedFile && (
//                     <div>
//                         <img src={previewURL} alt="Preview" width="200" height="200" />
//                     </div>
//                 )}


//                 {/*서버 제출 버튼*/}
//                 <Button variant="outline-primary" id="submit-btn" type="submit" onClick={handleUpload}>
//                     Submit
//                 </Button>
//             </ImgUploadContainer >
//         </>
//     );
// };

// export default ImageUpload;


// export default function ImageUpload() {
//     const [selectedFiles, setSelectedFiles] = useState(null);

//     const onClickHandler = async (event) => {
//         event.preventDefault();
//         const formData = new FormData();

//         formData.append('name', selectedFiles.name)  //서버전달용
//         formData.append('body', selectedFiles)

//         const config = {
//             headers: {
//                 'content-type': 'multipart/form-data'
//             }
//         };
//         try {
//             const response = await axios.post('http://127.0.0.1:8000', formData, config);
//             if (response.status === 200) {
//                 console.log('이미지 전송 성공', response.data);
//             } else {
//                 console.log('이미지 전송 실패');
//             }
//         } catch (event) {
//             console.error('이미지 전송 실패', event)
//         };
//     };


//     const fileChangedHandler = event => {
//         const files = event.target.files;
//         setSelectedFiles(files);

//     };

//     return (
//         <ImgUploadContainer>
//             <Global styles={MainFontStyles} ></Global>
//             <h2>사진 업로드</h2>
//             <h4>사진을 업로드 하세요.</h4>
//             <div className="App" style={{ marginTop: '100px' }}>
//                 <input type="file" onChange={fileChangedHandler} />
//                 <button onClick={onClickHandler}>submit</button>
//             </div>

//         </ImgUploadContainer >
//     );
// };
