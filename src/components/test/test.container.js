import {ReconciliationOutlined} from '@ant-design/icons'
import styled from '@emotion/styled';
import { All, DiseaseContent, Div1, Div11, Div1_1, Div1_2,
   Div1title,
   Div3, Div3_1, Div3_2, Div3_3, Div3_3_1, Div6, DivContents, ImageDiv } from './test.style'; 
import axios from 'axios'
import { useState, useEffect } from 'react';
import KakaoMap from '../kmap/KakaoMap';
import { useDispatch, useSelector } from 'react-redux'; // 리덕스 관련

const MyIcon = styled(ReconciliationOutlined)`
  color: red;
  font-size: 30px;
`

// const displayImageFromBase64 = (base64String) => {
//   const image = document.createElement('img');
//   image.src = `data:image/jpeg;base64,${base64String}`;
//   const imageElement = document.getElementById('result-image');
//   imageElement.appendChild(image);
// };

export default function TestContainer() {
  const transData = useSelector(state => state.isTrans); // 리덕스 관련
  const petName = useSelector(state => state.isPetname)
  console.log(transData, petName)
  
    return (
      <>
        <All>
          <Div1>
            <Div1_1>
               <MyIcon />
               <h2>{petName}의 AI 진단 체크 결과</h2>
            </Div1_1>
            <Div11>
              <Div1title>{transData.diseaseName}(가)이 {parseFloat(transData.percentage).toFixed(2)}% 확률로 의심됨. </Div1title>
                <Div6>
                  <ImageDiv><img 
                    src={`data:image/jpeg;base64,${transData.imageBase64}`}
                    width= '100%'
                    height= '100%'
                    style={{border:'1px solid'}}
                    /></ImageDiv>
                  <Div1_2>
                    <DiseaseContent>
                      <DivContents><h3>병에 대한 설명</h3></DivContents>
                      <DivContents>{transData.inform}</DivContents>
                    </DiseaseContent>
                    <DiseaseContent>
                      <DivContents><h3>좋은 음식</h3></DivContents>
                      <DivContents>{transData.supplements}</DivContents>
                    </DiseaseContent>
                  </Div1_2> 
                </Div6>
            </Div11>
          </Div1>
          <Div3>
              <Div3_1>
                  <div style={{marginBottom:'4%'}}><h3>근처 병원</h3></div>
                  <KakaoMap isMap={true} />
              </Div3_1>
          </Div3>
        </All>     
    </>)       
}
