import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import {All} from './MainHomePage.style.js'

const MainHomePage = () => {
  useEffect(() => {
    // slider
    const slides = document.querySelectorAll('.slide');
    const pages = document.querySelectorAll('.page');
    const backgrounds = [ 
      `radial-gradient(#2B3760, #0B1023)`,
      `radial-gradient(#4E3022, #161616)`,
      `radial-gradient(#4E4342, #161616)`,
    ];
    let current = 0;
    let scrollSlide = 0;

    slides.forEach((slide, index) => {
      slide.addEventListener('click', function () {
        selectSlide(index); // 새로운 함수 호출
        nextSlide(index);
        scrollSlide = index;
      });
    });
    function nextSlide(pageNumber) {
      const nextPage = pages[pageNumber];
      const currentPage = pages[current];
      const nextLeft = nextPage.querySelector('.hero .model-left');
      const nextRight = nextPage.querySelector('.hero .model-right');
      const currentLeft = currentPage.querySelector('.hero .model-left');
      const currentRight = currentPage.querySelector('.hero .model-right');
      const nextText = nextPage.querySelector('.details');
      const portfolio = document.querySelector('.portfolio');

      const tl = gsap.timeline({
        // disable clicks during animations
        onStart: function () {
          slides.forEach((slide) => (slide.style.pointerEvents = 'none'));
        },
        onComplete: function () {
          slides.forEach((slide) => (slide.style.pointerEvents = 'all'));
        },
      });

      tl.fromTo(currentLeft, { y: '-10%' }, { y: '-100%', duration: 0.3 })
        .fromTo(currentRight, { y: '10%' }, { y: '-100%', duration: 0.3 }, '-=0.2')
        .to(portfolio, { backgroundColor: backgrounds[pageNumber], duration: 0.3 })
        .fromTo(
          currentPage,
          { opacity: 1, pointerEvents: 'all' },
          { opacity: 0, pointerEvents: 'none', duration: 0.3 }
        )
        .fromTo(
          nextPage,
          { opacity: 0, pointerEvents: 'none' },
          { opacity: 1, pointerEvents: 'all', duration: 0.3 },
          '-=0.6'
        )
        .fromTo(nextLeft, { y: '-100%' }, { y: '-10%', duration: 0.3 }, '-=0.6')
        .fromTo(nextRight, { y: '-100%' }, { y: '10%', duration: 0.3 }, '-=0.8')
        .fromTo(nextText, { opacity: 0, y: 0 }, { opacity: 1, y: 0, duration: 0.3 })
        .set(nextLeft, { clearProps: 'all' })
        .set(nextRight, { clearProps: 'all' });
      current = pageNumber;
    }

    document.addEventListener('wheel', throttle(scrollChange, 1500));
    document.addEventListener('touchmove', throttle(scrollChange, 1500));

    function scrollChange(e) {
      e.deltaY > 0 ? (scrollSlide += 1) : (scrollSlide -= 1);
      if (scrollSlide > 2) scrollSlide = 0;
      if (scrollSlide < 0) scrollSlide = 2;
      selectSlide(scrollSlide); // 마우스 스크롤 시 선택된 슬라이드 표시 업데이트
      nextSlide(scrollSlide);
    }
  }, []);

  // avoid multiple firing
  function throttle(func, limit) {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  function selectSlide(selectedIndex) {
    const slideButtons = document.querySelectorAll('.slide'); // 슬라이드 버튼들을 선택

    // 선택된 슬라이드 버튼을 표시하도록 클래스를 추가/제거
    slideButtons.forEach((button, index) => {
      if (index === selectedIndex) {
        button.classList.add('active'); // 선택된 슬라이드에 active 클래스 추가
      } else {
        button.classList.remove('active'); // 선택되지 않은 슬라이드에서 active 클래스 제거
      }
    });
  }

  return (
    <All>
      <div className="portfolio">
        <div className='home-title'>
          <h3 className="logo">CoPet</h3>
        </div>
        <div className='home-main'>
          <section className="page photographer">
            <div className="details">
              <p>서비스 관련 내용을</p>
              <p>적고 싶어요.</p>
            </div>
            <div className="hero">
              <img
                className="model-left"
                src="img/9-left.jpg"
                alt="cat2"
              />
              <img
                className="model-right"
                src="img/9-right.jpg"
                alt="cat3"
              />
            </div>
          </section>
          <section className="page chef">
            <div className="details">
              <p>서비스 관련 내용을</p>
              <p>적고 싶어요.</p>
            </div>
            <div className="hero">
              <img
                className="model-left"
                src="img/4-left.jpg"
                alt="model"
              />
              <img
                className="model-right"
                src="img/4-right.jpg"
                alt="model"
              />
            </div>
          </section>
          <section className="page hairstyle">
            <div className="details">
              <p>서비스 관련 내용을</p>
              <p>적고 싶어요.</p>
            </div>
            <div className="hero">
              <img
                className="model-left"
                src="img/5-left.jpg"
                alt="model"
              />
              <img
                className="model-right"
                src="img/5-right.jpg"
                alt="model"
              />
            </div>
          </section>
          <aside>
            <div className="pages">
              <div className="page-1">
                <h3>01</h3>
                <svg
                  className="slide active"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6" cy="6" r="6" fill="white" />
                </svg>
              </div>
              <div className="page-2">
                <h3>02</h3>
                <svg
                  className="slide"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6" cy="6" r="6" fill="white" />
                </svg>
              </div>
              <div className="page-3">
                <h3>03</h3>
                <svg
                  className="slide"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6" cy="6" r="6" fill="white" />
                </svg>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </All>
  );
};

export default MainHomePage;
