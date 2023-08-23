import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const API_URL = 'http://localhost:8080'
const JANGO_URL = 'http://localhost:8000'

export const useAxios = () => {
  const [tokens, setTokens] = useState({ accessToken: null, refreshToken: null });

  useEffect(() => {
    const accessToken = localStorage?.getItem('accessToken');
    const refreshToken = localStorage?.getItem('refreshToken');
    setTokens({ accessToken, refreshToken });
  }, [])

  const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: { Authorization: `Bearer ${tokens?.accessToken}` },
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
          const response = await axios.post(`${API_URL}/auth/refresh-token`, {
            refreshToken: tokens.refreshToken,
          });

          // 리프레시 토큰을 사용하여 새 액세스 토큰을 받아옵니다.
          const newAccessToken = response.data.accessToken;
          const newRefreshToken = response.data.refreshToken;
          
          localStorage.setItem('accessToken', newAccessToken);
          localStorage.setItem('refreshToken', newRefreshToken)

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

export const useAxiosJango = () => {
  const axiosInstance = axios.create({
    baseURL: JANGO_URL,
  });

  return axiosInstance
}