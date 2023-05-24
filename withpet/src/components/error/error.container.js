import {BackGroundDiv, ErrorButton, BodyDiv, Word} from '../../../styles/error.style'
import { useRouter } from 'next/router'
import Link from 'next/link'



export default function ErrorContainer() {

    const router = useRouter()

    const onClickMove = () => {
        router.push('/')
    }
    
    return (
        <BackGroundDiv>
            <BodyDiv>
                <ErrorButton onClick={onClickMove}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.01 }}>
                            메인페이지로 돌아가기
                </ErrorButton>
                <Word>해당기능은 준비중입니다.<br/>
                    현재 BowWow는 비공개 베타서비스중으로써,<br/>
                    아직 구현중에 있는 기능도 있음을 양해 부탁드립니다.<br/>
                    기능이 개발되는 대로 적용 후 공지하겠습니다.
                </Word>
            </BodyDiv>
        </BackGroundDiv>
    )
}