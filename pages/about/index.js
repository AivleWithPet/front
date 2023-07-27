import React from 'react';
import Member from '../../src/components/about/Member';

export default function AboutPage() {
  

  return (
    <div style={{display:'flex', flexDirection:'row'}}>
      <Member memberName={'박윤수'} memberPosition={'AI'}></Member>
      <Member memberName={'윤태호'} memberPosition={'BACK-End'}></Member>
      <Member memberName={'조민경'} memberPosition={'BACK-End'}></Member>
      <Member memberName={'김무연'} memberPosition={'Front-End'}></Member>
      <Member memberName={'김채원'} memberPosition={'Front-End'}></Member>
      <Member memberName={'서종필'} memberPosition={'Front-End'}></Member>
    </div>
  )
}
