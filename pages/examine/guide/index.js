import { useRouter } from 'next/router';
import ShotGuidePage from '../../../src/components/guide/ShotGuidePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

export default function GuidePage() {
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
            <ShotGuidePage />
        </div>
    )
}
