import React, { useState } from 'react';
import { ImgUploadContainer, MainFontStyles } from '../../../styles/img_upload_emtion';
import { Global } from '@emotion/react';
import { Button, Modal } from 'antd';
import { CameraOutlined } from '@ant-design/icons';
import axios from 'axios';
import Preview from './PreView';

export default function ImageUpload() {
    const [fileList, setFileList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const handleFileChange = (event) => {
        const files = event.target.files;
        const newFileList = Array.from(files);
        setFileList(newFileList);
    };

    const handleApi = async (event) => {
        event.preventDefault();
        if (fileList.length === 0) {
            setModalVisible(true); // 이미지를 첨부하라는 모달창 표시
            return;
        }
        const formData = new FormData();
        formData.append('file', fileList[0]);

        try {
            const response = await axios.post('http://localhost:8000/ai', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            });
            if (response.status === 200) {
                console.log('이미지 전송 성공', response.data);
            } else {
                console.log('이미지 전송 실패', response.status);
            }
        } catch (event) {
            console.error('이미지 전송 실패', event)
        }
    }

    const handleModalOk = () => {
        setModalVisible(false);
    }

    return (
        <>
            <ImgUploadContainer>
                <Global styles={MainFontStyles} />
                <h2>사진 업로드</h2>
                <h4>사진을 업로드 하세요.</h4>

                {fileList.length > 0 ? (
                    <Preview fileList={fileList} />
                ) : (
                    <label htmlFor="file-upload">
                        {/* 이 부분 div 이모션으로 만들어서 추가 */}
                        <div style={{ width: 'calc(100vw - 55vw)', height: 'calc(100vh - 40vh)', backgroundColor: '#CCCCCC', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <CameraOutlined style={{ fontSize: '56px' }} />
                            <p style={{ marginTop: '10px' }}>이미지를 업로드하려면 클릭하세요.</p>
                            <input id="file-upload" type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
                        </div>
                    </label>
                )}

                <Button variant="outline-primary" id='submit-btn' onClick={handleApi}>Submit</Button>

                {/* 이미지 미첨부시 전송이 불가능하다는 모달 창 추가 */}
                <Modal
                    title="이미지를 첨부해주세요!"
                    open={modalVisible}
                    onOk={handleModalOk}
                    cancelButtonProps={{ style: { display: 'none' } }}
                >
                    <p>이미지를 첨부하지 않고선 진단이 불가능합니다.</p>
                </Modal>
            </ImgUploadContainer>
        </>
    );
}




// import React, { useState } from 'react';
// import { ImgUploadContainer, MainFontStyles } from '../../../styles/img_upload_emtion';
// import { Global } from '@emotion/react';
// import { Button } from 'antd';
// import { CameraOutlined } from '@ant-design/icons';
// import axios from 'axios';
// import Preview from './PreView';



// export default function ImageUpload() {

//     const [fileList, setFileList] = useState([]);


//     const handleFileChange = (event) => {
//         const files = event.target.files;
//         const newFileList = Array.from(files);
//         setFileList(newFileList);
//     };

//     // 서버 전송
//     const handleApi = async (event) => {
//         event.preventDefault();
//         const formData = new FormData();
//         formData.append('file', fileList[0])  //서버전달용
//         // 지금 임시로 확인
//         try {
//             const response = await axios.post('http://localhost:8000/ai', formData, {
//                 headers: { "Content-Type": "multipart/form-data", }, // 헤더 추가
//                 withCredentials: true,
//             });
//             if (response.status === 200) {
//                 console.log('이미지 전송 성공', response.data);
//             } else {
//                 console.log('이미지 전송 실패', response.status);
//             }
//         } catch (event) {
//             console.error('이미지 전송 실패', event)
//         };
//     }
//     /////////////////////// 여기까지가 API

//     ///////////////////////
//     console.log('fileList:', fileList);
//     ///////////////////////

//     return (
//         <>
//             <ImgUploadContainer>
//                 <Global styles={MainFontStyles} ></Global>
//                 <h2>사진 업로드</h2>
//                 <h4>사진을 업로드 하세요.</h4>


//                 {fileList.length > 0 ? (
//                     <Preview fileList={fileList} />
//                 ) : (
//                     <label htmlFor="file-upload">
//                         <div style={{ width: '700px', height: '500px', backgroundColor: 'gray', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//                             <CameraOutlined style={{ fontSize: '56px' }} />
//                             <p style={{ marginTop: '10px' }}>이미지를 업로드하려면 클릭하세요.</p>
//                             <input id="file-upload" type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
//                         </div>
//                     </label>
//                 )}

//                 {/*서버 제출 버튼*/}
//                 < Button variant="outline-primary" id='submit-btn' type='submit' onClick={handleApi}>Submit</Button>
//             </ImgUploadContainer >
//         </>
//     );

// }



