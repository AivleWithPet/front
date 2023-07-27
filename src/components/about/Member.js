import React from 'react';
import { CardContainer, CardAll, CardHeader, CardMain } from '../../../styles/member_emotion';

export default function Member({memberName, memberPosition}) {
  return(
    <CardContainer>
      <CardAll>
        <CardHeader>
          <div className="card-cover"></div>
          <img className="card-avatar" src='img/bg4.jpg' alt="얼굴 이미지" />
          <h1 className="card-fullname">{memberName}</h1>
          <h2 className="card-position">{memberPosition}</h2>
        </CardHeader>

        <CardMain>
          <div className="card-section is-active" id="about">
            <div className="card-content">
              <div className="card-subtitle">ABOUT</div>
              <p className="card-desc">xxxxxxx xxxxxxx xxxxxxx xxxxxxx xxxxxxxx xxxxxxx xxxxxx xxxxx xxxxxxx xxxxxxxxxxx xxxxx  xxxxxxx xxxxxxx xxxxxxx xxxxxxx  xxxxxxx
              </p>
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
    </CardContainer>
  );
}