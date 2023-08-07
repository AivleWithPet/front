import { useRouter } from 'next/router'
import * as S from './examinePage.style'
import { useState } from 'react';

export default function ExaminePageComponent() {
  const router = useRouter()
  
  const MovePage = () => {
    router.push('/mypage')
  }

  const nextpage = () => {
    router.push(`${router.asPath}/guide`)
  }  
  return (
    <>
      <S.background>
        <S.mainbox>
          <S.title>
           <h1 style={{}}>AI 반려동물 진단</h1>
          </S.title>
          <S.contents>
            <p style={{fontSize: '16px'}}>당신의 소중한 반려동물을 등록하셨나요?<br/>아직 등록하지 않으셨다면 아래의 등록하기 버튼을 눌러주세요!</p>
          </S.contents>
          <S.examineimg src="/caticon.png"/>
          <S.buttondiv>
            <S.Mybutton1 onClick={MovePage}>등록하기</S.Mybutton1>
            <S.Mybutton2 onClick={nextpage}>진단하기</S.Mybutton2>
          </S.buttondiv>
        </S.mainbox>
      </S.background>
    </>
  )
}