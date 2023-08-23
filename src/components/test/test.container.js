import {ReconciliationOutlined} from '@ant-design/icons'
import styled from '@emotion/styled';
import { All, DiseaseContent, Div1, Div11, Div1_1, Div1_2,
   Div1title,
   Div3, Div3_1, Div3_2, Div3_3, Div3_3_1, Div6, DivContents, ImageDiv } from './test.style'; 
import KakaoMap from '../kmap/KakaoMap';
import {  useSelector } from 'react-redux'; // 리덕스 관련

const MyIcon = styled(ReconciliationOutlined)`
  color: red;
  font-size: 30px;
`

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
              <Div1title><h3>{transData.diseaseName}(가)이 {parseFloat(transData.percentage).toFixed(2)}% 확률로 의심됩니다. </h3></Div1title>
                <Div6>
                  <ImageDiv><img 
                    src={`data:image/jpeg;base64,${transData.imageBase64}`}
                    width= '100%'
                    height= '100%'
                    /></ImageDiv>
                  <Div1_2>
                    <DiseaseContent>
                      <DivContents><h3>{transData.diseaseName} 이란?</h3></DivContents>
                      <DivContents>{transData.inform}</DivContents>
                    </DiseaseContent>
                    <DiseaseContent>
                      <DivContents><h3>추천 음식</h3></DivContents>
                      <DivContents>{transData.supplements}</DivContents>
                    </DiseaseContent>
                  </Div1_2> 
                </Div6>
            </Div11>
          </Div1>
          <Div3>
              <Div3_1>
                  <h3>근처 병원</h3>
                  <KakaoMap isMap={true} />
              </Div3_1>
          </Div3>
        </All>     
    </>)       
}
