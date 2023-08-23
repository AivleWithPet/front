import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsToken } from '../store/store'; // 적절한 경로로 변경
import { useEffect } from 'react';

export const useAxios = () => {
  const BASE_URL = 'http://localhost:8080/auth/refresh-token'
  const [tokens, setTokens] = useState({ accessToken: null, refreshToken: null });
  // const accessToken = useSelector((state) => state.isToken.accessToken);
  // const refreshToken = useSelector((state) => state.isToken.refreshToken);
  // const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    setTokens({ accessToken, refreshToken });
  }, [])

  const axiosInstance = axios.create({
    headers: { Authorization: `Bearer ${tokens.accessToken}` },
  });
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;

      // 토큰 만료에 대한 에러 코드를 확인 (401, 등)하고 refreshToken으로 새 토큰을 받아오기
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          // refreshToken으로 새로운 accessToken을 받아오는 API 요청을 구현해야 합니다.
          const response = await axios.post(BASE_URL, {
            refreshToken: tokens.refreshToken,
          });

          // 리프레시 토큰을 사용하여 새 액세스 토큰을 받아옵니다.
          const newAccessToken = response.data.accessToken;
          const newRefreshToken = response.data.refreshToken;
          
          localStorage.setItem('accessToken', newAccessToken);
          localStorage.setItem('refreshToken', newRefreshToken)

          // 리덕스 스토어에 새 토큰 업데이트
          // dispatch(setIsToken({ accessToken: newAccessToken, refreshToken: newRefreshToken }));

          // 실패한 요청의 헤더를 새 토큰으로 업데이트하고, 요청을 다시 실행합니다.
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest);
        } catch (error) {
          console.error('Error refreshing token:', error);
          throw error;
        }
      }

      return Promise.reject(error);
    },
  );

  return axiosInstance;
};
