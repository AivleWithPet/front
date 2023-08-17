import React, { useEffect, useState } from 'react';
import { ImgUploadContainer } from '../../../styles/img_upload_emtion';
import { Modal } from 'antd';
import { CameraOutlined, CloseCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import Preview from './PreView';
import { Mybutton1, Mybutton2 } from '../examine/examinePage.style';
import { ButtonDiv } from '../guide/guide_emotion';
import { useRouter } from 'next/router';
import FormData from 'form-data';
import { useDispatch, useSelector } from 'react-redux'; // 리덕스 관련
import {setIsTrans, setIsPetname} from '../../commons/store/store.js'

export default function ImageUpload(props) {
    const [fileList, setFileList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [token, setToken] = useState();
    const transData = useSelector((state) => {return state.isTrans}); // 리덕스 관련
    const dispatch = useDispatch();
    const formData = new FormData(); // 전역변수로!
    useEffect(() => {
        setToken(localStorage.getItem("accessToken"))
    }, [])
    

    const router = useRouter()

    // 이미지 업로드 함수
    const handleFileChange = (event) => {
        const files = event.target.files;
        const newFileList = Array.from(files);
        setFileList(newFileList);
    };
    // 이미지 서버 전송 함수
    const handleApi = async () => {
        if (fileList.length === 0) {
            setModalVisible(true);
            return;
        }
        if (!props.choosepet) {
            alert("반려동물을 선택해주세요.");
            props.setNum(0);
            return;
        }
        formData.append('file', fileList[0]);
        formData.append('pet_id', props.choosepet)
        formData.append('token', token)

        for (const [key, value] of formData.entries()) {
            console.log(`key: ${key}, value: ${value}`);
          }

        try {
            setModalVisible2(true);
            const response = await axios.post('http://localhost:8000/pet/result', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                },
                withCredentials: true,
            });
            console.log('이미지 전송 성공', response.data);
            dispatch(setIsTrans(response.data.result));
            dispatch(setIsPetname(props.petname));
            router.push(`${router.asPath}/test`);
        } catch (event) {
            console.error('이미지 전송 실패', event)
        }
    }
    // 모달 창 ok 누르면 꺼지는 함수
    const handleModalOk = () => {
        setModalVisible(false);
    }

    const handleModalOk2 = () => {
        setModalVisible2(false);
    }

    // 이미지 삭제 함수
    const handleFileDelete = () => {
        setFileList([]); //fileList를 빈 배열로 만들어서 Preview false시킴
        formData.delete('file'); // formData에서도 제거
    }

    return (
        <>
            <ImgUploadContainer>
                {fileList.length > 0 ? (
                    <div style={{ width: '24em', height: '20em',position: 'relative' }}>
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
                        <div style={{ width: '24em', height: '19em', backgroundColor: '#CCCCCC', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius:"15px" }}>
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
                <Modal
                    open={modalVisible2}
                    cancelButtonProps={{ style: { display: 'none' } }}
                    okButtonProps={{style: {display: 'none'}}}
                    closeIcon={' '}
                    centered
                    width={400}
                    style={{ textAlign:'center' }}
                >
                    <div style={{margin: '100px', height: '100px', display: 'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center'}}>
                        <img src='/img/295.gif' width={50} height={50} style={{marginBottom: '70px'}}/>
                        <p>AI가 진단 중입니다... <br/>잠시만 기다려주세요</p>
                    </div>

                </Modal>
            </ImgUploadContainer>
        </>
    );
}


