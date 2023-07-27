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
      router.push('/login');
    }
  }, []);
  

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
