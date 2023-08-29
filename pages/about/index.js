import React from 'react';
import Member from '../../src/components/about/Member';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AboutPage() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage?.getItem('accessToken');
    if (!token) {
      alert('권한이 없습니다. 로그인 후 이용해주세요.');
      router.push('/join');
    }
  }, []);
  
  return (
    <div>
      <Member></Member>
        {/* <Member memberName={'박윤수'} memberPosition={'AI'} memberImg={'img/ys.jpg'} memberTitle={'닻이 닿는 곳을 넘어'} memberReview={ysReview}></Member>
        <Member memberName={'윤태호'} memberPosition={'BACK-End'} memberImg={'img/th.jpg'} memberTitle={'야옹아 아프지마'} memberReview={thReview}></Member>
        <Member memberName={'조민경'} memberPosition={'BACK-End'} memberImg={'img/mk.jpg'} memberTitle={'즐거웠습니다!!!'} memberReview={mgReview}></Member>
      
        <Member memberName={'김무연'} memberPosition={'Front-End'} memberImg={'img/my.jpg'} memberTitle={'차원을 넘어'} memberReview={myReview}></Member>
        <Member memberName={'김채원'} memberPosition={'Front-End'} memberImg={'img/cw.jpg'} memberTitle={'^ↀᴥↀ^) {야옹~)'} memberReview={cwReview}></Member>
        <Member memberName={'서종필'} memberPosition={'Front-End'} memberImg={'img/jp.jpg'} memberTitle={'행복했습니다.'} memberReview={jpReview}></Member> */}

    </div>
  )
}
