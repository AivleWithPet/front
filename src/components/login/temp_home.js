import React from 'react';
import { All } from './temp_home.style';
import { useState } from 'react';
import { useEffect } from 'react';

export default function TempHome() {
  const [radius, setRadius] = useState(240);
  const [autoRotate] = useState(true);
  const [rotateSpeed] = useState(-60);
  const [imgWidth] = useState(120);
  const [imgHeight] = useState(170);

  useEffect(() => {
    // DOM elements
    const odrag = document.getElementById('drag-container');
    const ospin = document.getElementById('spin-container');
    const aImg = ospin.getElementsByTagName('img');
    const aVid = ospin.getElementsByTagName('video');
    const aEle = [...aImg, ...aVid]; // combine 2 arrays

    // Size of images
    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    // Size of ground - depend on radius
    const ground = document.getElementById('ground');
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";

    // Function to initialize the carousel
    function init(delayTime) {
      for (let i = 0; i < aEle.length; i++) {
        aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
      }
    }

    // Function to apply transformations to the carousel elements
    function applyTransform(obj) {
      // Constrain the angle of camera (between 0 and 180)
      if (tY > 180) tY = 180;
      if (tY < 0) tY = 0;

      // Apply the angle
      obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
    }

    // Function to control carousel spinning
    function playSpin(yes) {
      ospin.style.animationPlayState = (yes ? 'running' : 'paused');
    }

    let sX, sY, nX, nY, desX = 0, desY = 0, tX = 0, tY = 10;

    // Auto spin
    if (autoRotate) {
      const animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
      ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }



    // Setup events for carousel interaction
    document.onpointerdown = function (e) {
      clearInterval(odrag.timer);
      e = e || window.event;
      sX = e.clientX;
      sY = e.clientY;

      document.onpointermove = function (e) {
        e = e || window.event;
        nX = e.clientX;
        nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTransform(odrag);
        sX = nX;
        sY = nY;
      };

      document.onpointerup = function (e) {
        odrag.timer = setInterval(function () {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;
          applyTransform(odrag);
          playSpin(false);
          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            clearInterval(odrag.timer);
            playSpin(true);
          }
        }, 17);
        document.onpointermove = document.onpointerup = null;
      };

      return false;
    };

    document.onmousewheel = function (e) {
      e = e || window.event;
      const d = e.wheelDelta / 20 || -e.detail;
      setRadius((prevRadius) => prevRadius + d);
      init(1);
    };

    // Call init after the component is mounted
    setTimeout(() => init(), 1000);
  }, [autoRotate, imgHeight, imgWidth, radius, rotateSpeed]);
  return (
    <All>
      <div id="drag-container">
        <div id="spin-container">
          {/* <img src="https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
          <img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
          <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
          <img src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
          <img src="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
          <img src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
          <img src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/> */}
          <img src="/1.jpg" alt="사진경로"/>
          <img src="/1.jpg" alt="사진경로"/>
          <img src="/1.jpg" alt="사진경로"/>
          <img src="/1.jpg" alt="사진경로"/>
          <img src="/1.jpg" alt="사진경로"/>
          <img src="/1.jpg" alt="사진경로"/>
          {/* <a target="_blank" href="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg">
          
          </a> */}

          {/* Text at center of ground */}
          <p style={{color:'gray', fontSize:'30px'}}>BowWow</p>
        </div>
        <div id="ground"></div>
      </div>

      <div id="music-container"></div>

      {/* github corner */}
      <a href="https://github.com/AivleWithPet" target="_blank" className="github-corner" aria-label="View source on GitHub">
          <svg
            width="80"
            height="80"
            viewBox="0 0 250 250"
            style={{ fill: '#fff', color: '#000', position: 'absolute', top: 0, border: 0, right: 0 }}
            aria-hidden="true"
          >
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
            <path
              d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
              fill="currentColor"
              style={{ transformOrigin: '130px 106px' }}
              className="octo-arm"
            ></path>
            <path
              d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
              fill="currentColor"
              className="octo-body"
            ></path>
          </svg>
        </a>
    </All>
  );
}

