import { Anchor, Image  } from 'antd';
import {ReconciliationOutlined} from '@ant-design/icons'
import styled from '@emotion/styled';
import { All, Div, Div1, Div11, Div1_1, Div1_2, Div2,
   Div3, Div3_1, Div3_2, Div3_3, Div3_3_1, Div3_3_2, 
   Div4, Div5, Div6 } from '../../../styles/test.style'; 
import axios from 'axios'
import { useState, useEffect } from 'react';

const MyAnchor = styled(Anchor)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  height: 70px;
  background-color: #ffffff;
  border: 1px gray;
`;


const MyIcon = styled(ReconciliationOutlined)`
  color: red;
  font-size: 30px;
`

export default function TestContainer() {
	  const [dogsUrl,setDogUrl] = useState("")  
	  useEffect(()=>{
	  	const fetchDog = async ()=>{
	  		const result = await axios.get("https://dog.ceo/api/breeds/image/random")
	  		console.log(result.data.message)
	  		setDogUrl(result.data.message)
	  			} 

	  fetchDog()
	  	},[])

      const [messagesUrl,setMessageUrl] = useState("")  
      useEffect(()=>{
        const fetchMesage = async ()=>{
          const result = await axios.get("https://api.breakingbadquotes.xyz/v1/quotes")
          console.log(result.data[0].quote)
          setMessageUrl(result.data[0].quote)
            } 
  
        fetchMesage()
        },[])
  
    return (
      <>
      <MyAnchor
        direction="horizontal"
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Part 1',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Part 2',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Part 3',
          },
        ]}
      />
        <All>
              <Div1 id="part-1">
                <Div11>
                    <Div1_1>
                      <MyIcon />
                      <div>진단결과입니다.</div>
                      <div>간단한 진단결과입니다.</div>
                    </Div1_1>
                    <Div1_2>{messagesUrl}</Div1_2>
                </Div11>
              </Div1>
              <Div4 id="part-2">
                    <Div5>
                      <Div2>
                        <Image 
                          width={500}
                          height={500}
                          src = {dogsUrl}
                        />
                      </Div2>
                        <Div3_3_2>{messagesUrl}</Div3_3_2>
                    </Div5>
                </Div4>
                <Div3 id="part-3">
                    <Div3_1>
                        <Div3_2>
                        {messagesUrl}
                        </Div3_2>
                        <Div3_3>
                            <Div3_3_1>{messagesUrl}</Div3_3_1>
                            <Div3_3_2>{messagesUrl}</Div3_3_2>
                        </Div3_3>
                    </Div3_1>
                </Div3>
        </All>     
    </>)       
}
