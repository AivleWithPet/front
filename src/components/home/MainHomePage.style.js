import styled from "@emotion/styled";

export const All = styled.div`
  background-color: #95A9D9;  
  margin: 0px;
  height: calc(100vh - 93.8px);
  
  display: grid;
  place-items: center;

  .card-groups,
  .card-group,
  .card {
    aspect-ratio: 5 / 7;
  }

  .card-groups,
  .card-group,
  .big-card {  
    width: 30vmin;
  }

  .card-group {
    position: absolute;
    transition: transform 400ms ease;
    bottom: 30%;
    left: 39%;
  }

  .card-group[data-status="unknown"] {
    transform: scale(0);
    transition: none;
  }

  .card-group[data-status="active"] {
    transition-delay: 300ms;
  }

  .card-group[data-status="after"] {
    transform: translateX(50%) scale(0);
  }

  .card-group[data-status="before"] {
    transform: translateX(-50%) scale(0);
  }

  .card-group[data-status="becoming-active-from-after"] {
    transform: translateX(50%) scale(0);
    transition: none;
  }

  .card-group[data-status="becoming-active-from-before"] {
    transform: translateX(-50%) scale(0);
    transition: none;
  }

  .card {
    background-color: rgba(255, 255, 255, 0.05);
    position: absolute;
    transition: transform 800ms cubic-bezier(.05,.43,.25,.95);
    
    background-position: center;
    background-size: cover;
  }

  .big-card {
    border-radius: 1vmin;
  }

  .little-card {
    width: 12vmin;
    border-radius: 2vmin;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    box-shadow: -1vmin 1vmin 2vmin rgba(0, 0, 0, 0.25);
    pointer-events: none;
  }

  .big-card:nth-of-type(2) {
    background-image: url('/img/main-2.jpg');
    transform: translateX(-10%) rotate(-1deg);
  }

  .big-card:nth-of-type(4) {
    background-image: url('/img/main-1.jpg');
    transform: rotate(2deg);
  }

  .big-card:nth-of-type(6) {
    
    background-image: url('/img/main-4.jpg');
    transform: translateX(-6%) rotate(-3deg);
  }

  .big-card:nth-of-type(8) {
    background-image: url('/img/main-3.jpg');
    transform: translate(10%, 3%) rotate(5deg);
  }



  .little-card:nth-of-type(1) {
    background-image: url('/img/main-8.jpg');
  }

  .little-card:nth-of-type(3) {
    background-image: url('/img/main-9.jpg');
  }

  .little-card:nth-of-type(5) {
    background-image: url('/img/main-7.jpg');
  }

  .little-card:nth-of-type(7) {
    background-image: url('/img/main-11.jpg');
  }

  .card-group:hover > .card {  
    box-shadow: -2vmin 2vmin 3vmin rgba(0, 0, 0, 0.4);
  }

  .card-group:hover > .big-card:nth-of-type(2) {
    transform: translate(-75%, 16%) rotate(-24deg);
  }

  .card-group:hover > .big-card:nth-of-type(4) {
    transform: translate(-25%, 8%) rotate(-8deg);
  }

  .card-group:hover > .big-card:nth-of-type(6) {
    transform: translate(25%, 8%) rotate(8deg);
  }

  .card-group:hover > .big-card:nth-of-type(8) {
    transform: translate(75%, 16%) rotate(24deg);
  }

  .card-group:hover > .little-card:nth-of-type(1) {
    transform: translate(200%, -160%) rotate(-15deg);
  }

  .card-group:hover > .little-card:nth-of-type(3) {
    transform: translate(160%, 170%) rotate(15deg);
  }

  .card-group:hover > .little-card:nth-of-type(5) {
    transform: translate(-200%, -170%) rotate(15deg);
  }

  .card-group:hover > .little-card:nth-of-type(7) {
    transform: translate(-280%, 140%) rotate(-15deg);
  }

  .card-swiper-buttons {
    margin-top: 8vmin;
    display: flex;
    justify-content: space-around;  
    padding: 0vmin 4vmin;
  }

  .card-swiper-buttons > button {
    font-size: 2.5vmin;
    border: 0.4vmin solid rgb(200, 200, 200);
    border-radius: 100%;
    color: white;
    background-color: transparent;
    height: 7vmin;
    width: 7vmin;
    display: grid;
    place-items: center;
    cursor: pointer;
  }

  #love-button {
    color: rgb(33, 150, 243);
    border-color: rgb(33, 150, 243);
  }

  /* -- YouTube Link Styles -- */

  body.menu-toggled > .meta-link > span {
    color: rgb(30, 30, 30);
  }

  #source-link {
    bottom: 60px;
  }

  #source-link > i {
    color: rgb(94, 106, 210);
  }

  #yt-link > i {
    color: rgb(239, 83, 80);
  }

  .meta-link {
    align-items: center;
    backdrop-filter: blur(3px);
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    bottom: 10px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    cursor: pointer;  
    display: inline-flex;
    gap: 5px;
    left: 10px;
    padding: 10px 20px;
    position: fixed;
    text-decoration: none;
    transition: background-color 400ms, border-color 400ms;
    z-index: 10000;
  }
  .left-section{
    align-items: center;
    bottom: 10px;
    display: inline-flex;
    gap: 5px;
    left: 10px;
    bottom: 50px;
    font-size: 20px;
    padding: 10px 20px;
    position: fixed;
    text-decoration: none;
    transition: background-color 400ms, border-color 400ms;
    z-index: 10000;
    // font-family: myfont;
    color: white;
  }
  .right-section{
    align-items: center;
    bottom: 10px;
    display: inline-flex;
    gap: 5px;
    right: 10px;
    bottom: 50px;
    font-size: 19px;
    padding: 10px 20px;
    position: fixed;
    text-decoration: none;
    transition: background-color 400ms, border-color 400ms;
    z-index: 10000;
    color: white;
  }
  .right-up-section{
    align-items: center;
    bottom: 10px;
    display: inline-flex;
    gap: 5px;
    right: 0px;
    top: 10%;
    padding: 10px 20px;
    position: fixed;
    text-decoration: none;
    transition: background-color 400ms, border-color 400ms;
    z-index: 10000;
  }

  .meta-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .meta-link > i, .meta-link > span {
    height: 20px;
    line-height: 20px;
  }

  .meta-link > span {
    color: white;
    font-family: "Rubik", sans-serif;
    font-weight: 500;
  }
`
