import { useRouter } from 'next/router'
import * as S from './examinePage.style'

export default function ExaminePageComponent() {
  const router = useRouter()

  const nextpage = () => {
    router.push(`${router.asPath}/guide`)
  }  
  return (
    <>
      <S.background>
        <S.mainbox>
          <S.title>
           <h1 style={{fontFamily: 'font1'}}>AI 반려동물 진단</h1>
          </S.title>
          <S.contents>
            <h2 style={{fontFamily: 'font2', fontSize: '30px'}}>당신의 소중한 반려동물을 등록하셨나요?<br/>아직 등록하지 않으셨다면 아래의 등록하기 버튼을 눌러주세요!</h2>
          </S.contents>
          <S.examineimg src="/examine/cat.png"/>
          <S.buttondiv>
            <S.Mybutton1 onClick={nextpage}>등록하기</S.Mybutton1>
            <S.Mybutton2 onClick={nextpage}>진단하기</S.Mybutton2>
          </S.buttondiv>
        </S.mainbox>
      </S.background>
    </>
  )
}