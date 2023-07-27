import React, { useEffect, useState } from 'react';
import { ImgUploadContainer, MainFontStyles } from '../../../styles/img_upload_emtion';
import { Modal } from 'antd';
import { CameraOutlined, CloseCircleOutlined, PropertySafetyFilled } from '@ant-design/icons';
import axios from 'axios';
import Preview from './PreView';
import { Mybutton1, Mybutton2 } from '../examine/examinePage.style';
import { ButtonDiv } from '../guide/guide_emotion';
import { useRouter } from 'next/router';

export default function ImageUpload(props) {
    const [fileList, setFileList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [token, setToken] = useState();
    const formData = new FormData(); // 전역변수로!
    const router = useRouter()
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')
        setToken(accessToken)
    }, [])
    console.log(token)

    // 이미지 업로드 함수
    const handleFileChange = (event) => {
        const files = event.target.files;
        const newFileList = Array.from(files);
        setFileList(newFileList);
    };

    // 이미지 서버 전송 함수
    const handleApi = async (event) => {
        event.preventDefault();
        if (fileList.length === 0) {
            setModalVisible(true); // 이미지를 첨부하라는 모달창 표시
            return;
        }
        // const formData = new FormData();
        formData.append('file', fileList[0]);
        
        try {
            const response = await axios.post('http://localhost:8000/pet/result', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.status === 200) {
                console.log('이미지 전송 성공', response.data);
            } else {
                console.log('이미지 전송 실패', response.status);
            }
            router.push(`${router.aspath}/test`)
        } catch (event) {
            console.error('이미지 전송 실패2', event)
        }
    }

    // 모달 창 ok 누르면 꺼지는 함수
    const handleModalOk = () => {
        setModalVisible(false);
    }

    // 이미지 삭제 함수
    const handleFileDelete = () => {
        setFileList([]); //fileList를 빈 배열로 만들어서 Preview false시킴
        formData.delete('file'); // formData에서도 제거
    }

    return (
        <>
            <ImgUploadContainer>
                {/* <Global styles={MainFontStyles} /> */}
                {/* <h2>사진 업로드</h2> */}
                {/* <h4>AI 진단이 필요한 사진을 업로드 하세요.</h4> */}

                {fileList.length > 0 ? (
                    <div style={{ position: 'relative' }}>
                        <Preview fileList={fileList} />
                        <CloseCircleOutlined
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                fontSize: '24px',
                                color: 'white',
                                cursor: 'pointer',
                            }}
                            onClick={handleFileDelete}
                        />
                    </div>
                ) : (
                    <label htmlFor="file-upload">
                        <div style={{ width: '47em', height: '35em', backgroundColor: '#CCCCCC', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <CameraOutlined style={{ fontSize: '56px' }} />
                            <p style={{ marginTop: '10px' }}>사진을 업로드하려면 클릭하세요.</p>
                            <input id="file-upload" type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
                        </div>
                    </label>
                )}

                <ButtonDiv>
                    <Mybutton2 onClick={props.prevClick}>이전</Mybutton2>
                    <Mybutton1 onClick={handleApi}>제출하기</Mybutton1>

                </ButtonDiv>

                {/* 이미지 미첨부시 전송이 불가능하다는 모달 창 추가 */}
                <Modal
                    title="사진을 첨부해주세요!"
                    open={modalVisible}
                    onOk={handleModalOk}
                    onCancel={handleModalOk}
                    cancelButtonProps={{ style: { display: 'none' } }}
                >
                    <p>사진을 첨부하지 않으면 AI 진단이 불가능합니다.</p>
                </Modal>
            </ImgUploadContainer>
        </>
    );
}


