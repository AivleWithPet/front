import { Provider } from "react-redux";
import Layout from "../src/commons/layout";
import { globalStyles } from "../styles/globalStyle";
import { Global } from '@emotion/react';
import store from "../src/commons/store/store.js"
import { useLoading } from "../src/commons/useLoading/useLoading";
import { LoadingSpinner } from "../src/components/LoadingSpinner/LoadingSpinner";
import { useEffect, useState } from 'react';
import axios from 'axios';

// 이 export default 함수가 필요하다.
export default function App({ Component, pageProps }) {
  const isLoading = useLoading();

  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const checkTokenValidityAndRefresh = async () => {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');

      // 액세스 토큰과 리프레시 토큰이 저장되어 있는지 확인
      if (!accessToken || !refreshToken) {
        return;
      }

      // 현재 토큰이 만료되었는지 확인
      const accessTokenExp = decodeToken(accessToken).exp;
      const currentTime = Math.floor(Date.now() / 1000);

      if (accessTokenExp <= currentTime) {
        if (!isRefreshing) {
          setIsRefreshing(true);

          try {
            // 리프레시 토큰을 사용하여 새로운 액세스 토큰을 얻음
            const newAccessToken = await refreshAccessToken(refreshToken);

            // 새로운 액세스 토큰을 저장
            localStorage.setItem('accessToken', newAccessToken);

            setIsRefreshing(false);
          } catch (error) {
            console.error('토큰 갱신 오류:', error);

            // 토큰 갱신에 실패한 경우 로그인 페이지로 리디렉션 또는 에러 처리
            // 예시: 로그인 페이지로 리디렉션
            window.location.href = '/';
          }
        }
      }
    };

    checkTokenValidityAndRefresh();
  }, []);

  // JWT 토큰을 디코딩하는 함수
  function decodeToken(token) {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }

  return (
    <>
      <Global styles={globalStyles} />
      <Provider store={store}>
        <Layout>
          {isLoading ? <LoadingSpinner /> : null} 
          <Component {...pageProps}></Component>
        </Layout>
      </Provider>
    </>
  );
}
