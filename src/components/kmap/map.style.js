import styled from "@emotion/styled";

export const HList = styled.div`
  h3 {
    color: darkblue;
  }
  div {
    border: 2px solid black;
    padding: 3%;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0); 
    transition: box-shadow 0.5s;
  }

  div:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3); /* 마우스를 가져다 대면 튀어나오는 그림자 설정 */
  }
`

export const HListPage = styled.div`

`