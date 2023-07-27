import styled from "@emotion/styled";

// pages/about/index.js
export const CardContainer = styled.div`
  box-sizing: border-box;
  color: #2b2c48;
  font-family: sans-serif;
//   background-image: url(https://images.unsplash.com/photo-1566738780863-f9608f88f3a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80);
  background-image: url("/examine/examinebg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`

export const CardAll = styled.div`
  max-width: 340px;
  margin: auto;
  overflow-y: hidden;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
  height: 450px;
`

export const CardHeader = styled.div`
  position: relative;
  display: flex;
  height: 200px;
  flex-shrink: 0;
  width: 100%;
  transition: 0.3s;

  * {
    transition: 0.3s;
  }

  .card-cover {
    width: 100%;
    height: 100%;
    position: absolute;
    height: 160px;
    top: -20%;
    left: 0;
    will-change: top;
    background-size: cover;
    background-position: center;
    filter: blur(30px);
    transform: scale(1.2);
    transition: 0.5s;
  }

  .card-avatar {
    width: 100px;
    height: 100px;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    object-position: center;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-64px);
  }

  .card-fullname {
    position: absolute;
    bottom: 0;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    white-space: nowrap;
    transform: translateY(-10px) translateX(-50%);
    left: 50%;
    padding: 4%;
  }

  .card-position {
    position: absolute;
    bottom: 0;
    font-size: 11px;
    white-space: nowrap;
    font-weight: 500;
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-7px);
    
  }
`

export const CardMain = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  padding-top: 10px;
  flex-direction: column;

  .card-subtitle {
    font-weight: 700;
    font-size: 13px;
    margin-bottom: 8px;
  }

  .card-content {
    padding: 20px;
  }

  .card-desc {
    line-height: 1.6;
    color: #636b6f;
    font-size: 14px;
    margin: 0;
    font-weight: 400;
    font-family: "DM Sans", sans-serif;
  }

  .card-social {
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 30px;
    svg {
      fill: rgb(165, 181, 206);
      width: 16px;
      display: block;
      transition: 0.3s;
    }
    a {
      color: #8797a1;
      height: 32px;
      width: 32px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      background-color: rgba(93, 133, 193, 0.05);
      border-radius: 50%;
      margin-right: 10px;

      &:hover {
        svg {
          fill: darken(rgb(165, 181, 206), 20%);
        }
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
`