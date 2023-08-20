import styled from "@emotion/styled";

export const All = styled.div`
  height: 100vh;
  touch-action: none;
  overflow: hidden;
  display: flex;
  background: #111;
  perspective: 600px;

  * {
    margin: 0;
    padding: 0;
  }

  #drag-container, #spin-container {
    position: relative;
    display: flex;
    margin: auto;
    transform-style: preserve-3d;
    transform: rotateX(-50deg); /* 시점을 위에서 보도록 변경 */
  }

  #drag-container img {
    transform-style: preserve-3d;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    line-height: 200px;
    font-size: 50px;
    text-align: center;
    box-shadow: 0 0 8px #fff;
    box-reflect: below 10px linear-gradient(transparent, transparent, #0005);
  }
  #drag-container img:hover {
    box-shadow: 0 0 15px #fffd;
    box-reflect: below 10px linear-gradient(transparent, transparent, #0007);
  }
  #drag-container p {
    font-family: Serif;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%,-50%) rotateX(90deg);
    color: #fff;
  }
  
  #ground {
    width: 900px;
    height: 900px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%,-50%) rotateX(90deg); /* 시점을 위에서 보도록 변경 */
    background: radial-gradient(center center, farthest-side , #9993, transparent);
  }
  @keyframes spin {
    from {
      transform: rotateY(0deg);
    } 
    to {
      transform: rotateY(360deg);
    }
  }
  
  @keyframes spinRevert {
    from {
      transform: rotateY(360deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }
`;
