import { useEffect } from 'react'
import TestContainer from '../../../../src/components/test/test.container'
import { useRouter } from 'next/router';

export default function TestPage() {
    const router = useRouter();
    useEffect(() => {
      const token = localStorage?.getItem('accessToken');
      if (!token) {
        alert('권한이 없습니다. 로그인 후 이용해주세요.');
        router.push('/join');
      }
    }, []);

    return <TestContainer />
}
