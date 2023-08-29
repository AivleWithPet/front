import React from 'react';
import { CardContainer, CardAll, CardHeader, CardMain, CardRow } from '../../../styles/member_emotion';

export default function Member({memberName, memberPosition, memberImg, memberTitle, memberReview}) {
  const ysReview = 
  `능력과 열정을 겸비한 분들과 
함께 할 수 있는 좋은 기회였어요! 
프론트, 백 분들과 협업할 수 있는 
기회가 흔치 않아 우여곡절도 많았지만, 
모든 분들이 주도적으로 자신의 역할을 
넘어 문제를 해결하고 도와주신 끝에 
잘 마무리 할 수 있었습니다. 
스스로의 한계를 꾸준히 뛰어넘어 
더 높고 먼 곳에서 다시 봅시다! 

메일 : nehcream@gmail.com 
깃허브 : nehcream2od
(nehcream@gmail.com)`;
  
  const thReview = 
  `프로젝트 CoPet의 백엔드 파트를 담당하며, 
백엔드 개발에만 국한되지 않고 

프론트엔드와 AI 분야의 개발자들과 
소통하고 협업할 수 있는 
소중한 경험을 쌓을 수 있었습니다. 




메일 : ice9880@gmail.com 
깃허브 : ttaho
(ice_98@naver.com)`;
    
  const mkReview = 
  `이론으로만 공부했던 스프링이었는데,
이번 프로젝트를 통해 백엔드 개발 역량을 
쌓을 수 있어서 좋았습니다. 

교육 시간 외에 함께 모여서 
프로젝트 할 수 있어서 값진 시간이었고 
모두 고생하셨습니다!! 



메일: minkycho0412@gmail.com 
깃허브 : minkycho0412 
(minkycho0412@gmail.com)`;
    
  const myReview = 
  `처음에 다들 어리숙한 상태로 시작하며 
많은 난관이 있었지만 

시간이 지남에 따라 
점점 발전하고 능숙해진 실력으로 
유의미한 결과물을 만들어 내는 모습을 보며 
너무 좋았습니다! 감사합니다 킹아! 



메일 : rlaandus2@gmail.com 
깃허브 : MUYEONKIM 
(rlaandus2@gmail.com)`;
    
  const cwReview = 
  `처음 해본 프로젝트인데 좋은 분들과 
함께해서 운이 참 좋았고 즐거웠습니다! 

이것저것 미숙한 점이 많아서 
속 터지게 하진 않았을런지... 
재밌는 프로젝트 있으면 또 불러주십시오! 




메일 : kchae10824@gmail.com 
깃허브 : chapssalddeock 
(kchae10824@gmail.com)`;
    
  const jpReview = 
`최선을 다했다고 말할 순 없지만,
그럼에도 모두와 함께 
열심히 달릴 수 있어서 행복했습니다.

문제를 함께 해결하고
성장하는 과정에서
이번 프로젝트는
정말 보람찬 시간이었습니다.


메일 : seojong789@naver.com
깃허브 : seojong789
(seojong789@naver.com)
`;
  
  return(
    <CardContainer>
      <CardRow>
      {/* 박윤수 */}
      <CardAll>
        <CardHeader>
          <div className="card-cover"></div>
          <img className="card-avatar" src='/img/ys.jpg' alt="얼굴 이미지" />
          <h1 className="card-fullname">박윤수</h1>
          <h2 className="card-position">AI</h2>
        </CardHeader>

        <CardMain>
          <div className="card-section is-active" id="about">
            <div className="card-content">
              <div className="card-subtitle">닻이 닿는 곳을 넘어</div>
              <pre className="card-desc">{ysReview}
              </pre>
            </div>
            <div className="card-social">
              <a href="#"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" /></svg></a>
              <a href="#"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                  <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                  <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" /></svg></a>
            </div>
          </div>
        </CardMain>
      </CardAll>

      {/* 윤태호 */}
      <CardAll>
        <CardHeader>
          <div className="card-cover"></div>
          <img className="card-avatar" src='/img/th.jpg' alt="얼굴 이미지" />
          <h1 className="card-fullname">윤태호</h1>
          <h2 className="card-position">Back-End</h2>
        </CardHeader>

        <CardMain>
          <div className="card-section is-active" id="about">
            <div className="card-content">
              <div className="card-subtitle">야옹아 아프지마</div>
              <pre className="card-desc">{thReview}
              </pre>
            </div>
            <div className="card-social">
              <a href="#"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" /></svg></a>
              <a href="#"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                  <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                  <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" /></svg></a>
            </div>
          </div>
        </CardMain>
      </CardAll>

      {/* 조민경 */}
      <CardAll>
        <CardHeader>
          <div className="card-cover"></div>
          <img className="card-avatar" src='/img/mk.jpg' alt="얼굴 이미지" />
          <h1 className="card-fullname">조민경</h1>
          <h2 className="card-position">Back-End</h2>
        </CardHeader>

        <CardMain>
          <div className="card-section is-active" id="about">
            <div className="card-content">
              <div className="card-subtitle">즐거웠습니다!!!</div>
              <pre className="card-desc">{mkReview}
              </pre>
            </div>
            <div className="card-social">
              <a href="#"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" /></svg></a>
              <a href="#"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                  <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                  <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" /></svg></a>
            </div>
          </div>
        </CardMain>
      </CardAll>
      </CardRow>

      <CardRow>
      {/* 김무연 */}
      <CardAll>
        <CardHeader>
          <div className="card-cover"></div>
          <img className="card-avatar" src='/img/my.jpg' alt="얼굴 이미지" />
          <h1 className="card-fullname">김무연</h1>
          <h2 className="card-position">Front-End</h2>
        </CardHeader>

        <CardMain>
          <div className="card-section is-active" id="about">
            <div className="card-content">
              <div className="card-subtitle">차원을 넘어</div>
              <pre className="card-desc">{myReview}
              </pre>
            </div>
            <div className="card-social">
              <a href="#"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" /></svg></a>
              <a href="#"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                  <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                  <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" /></svg></a>
            </div>
          </div>
        </CardMain>
      </CardAll>

      {/* 김채원 */}
      <CardAll>
        <CardHeader>
          <div className="card-cover"></div>
          <img className="card-avatar" src='/img/cw.jpg' alt="얼굴 이미지" />
          <h1 className="card-fullname">김채원</h1>
          <h2 className="card-position">Front-End</h2>
        </CardHeader>

        <CardMain>
          <div className="card-section is-active" id="about">
            <div className="card-content">
              <div className="card-subtitle">^ↀᴥↀ^) {'{야옹~)'}</div>
              <pre className="card-desc">{cwReview}
              </pre>
            </div>
            <div className="card-social">
              <a href="#"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" /></svg></a>
              <a href="#"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                  <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                  <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" /></svg></a>
            </div>
          </div>
        </CardMain>
      </CardAll>

      {/* 서종필 */}
      <CardAll>
        <CardHeader>
          <div className="card-cover"></div>
          <img className="card-avatar" src='/img/jp.jpg' alt="얼굴 이미지" />
          <h1 className="card-fullname">서종필</h1>
          <h2 className="card-position">Front-End</h2>
        </CardHeader>

        <CardMain>
          <div className="card-section is-active" id="about">
            <div className="card-content">
              <div className="card-subtitle">힘든 순간도 있었지만, 행복했습니다.</div>
              <pre className="card-desc">{jpReview}
              </pre>
            </div>
            <div className="card-social">
              <a href="#"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" /></svg></a>
              <a href="#"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                  <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                  <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" /></svg></a>
            </div>
          </div>
        </CardMain>
      </CardAll>
      </CardRow>
    </CardContainer>
  );
}