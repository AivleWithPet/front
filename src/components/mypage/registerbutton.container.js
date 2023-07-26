import { useRouter } from 'next/router';

import { Popover, Button } from 'antd';
import { QuestionCircleFilled } from '@ant-design/icons';



export default function RegisterFB({page}) {
    // const router = useRouter();
    // const { page } = router.query;
    console.log("주소내놔",page)
    // console.log("주소내놔",pages)
    const text = (
        <div>
        안녕하세요!<br/>
        함께 하게 되어서 반갑습니다! <br />
        여기에서 필요할 때마다 반려동물을 등록할 수 있습니다.
        </div>
      );

    const CustomContent = () =>(
        //여기에 이제 등록하기 위한 포맷을 만들어야함
        //그리고 등록하기 버튼을 누르면 통신되면서 서버에 정보 전송
        <div>일단은 뭐라도 씀</div>
    )


    return (
        <>
        {page === 'mypage' && ( 
        <Popover placement="topLeft" title={text} content={<CustomContent />} trigger="click" autoAdjustOverflow >
          <Button type="primary" shape="circle" 
            style={{
              position: 'fixed', right: '40px', bottom: '20px', zIndex: 1000,
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              width: '5vh', height: '5vh',
            }}>
            <QuestionCircleFilled style={{ fontSize: '4vh' }} />
          </Button>
        </Popover>)}
       
        </>
      );


}