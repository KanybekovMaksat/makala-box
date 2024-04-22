// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
// import { getCookie, setCookie } from 'typescript-cookie';
// export const API_URL = 'http://localhost:5000/api';

// const $api = axios.create({
//   withCredentials: true,
//   baseURL: API_URL,
// });

// const accessToken = getCookie('accessToken') || null;

// $api.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${accessToken}`;
//   return config;
// });

// $api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (
//       error.response.status === 401 &&
//       error.config &&
//       !error.config._isRetry
//     ) {
//       originalRequest._isRetry = true;
//       try {
//         const response = await axios.get(`${API_URL}/refresh`, {
//           withCredentials: true,
//         });
//         setCookie('accessToken', response.data.accesToken, {
//           expires: 1,
//           domain: 'subdomain.site.com',
//         });
//         return $api.request(originalRequest);
//       } catch (e) {
//         console.log('Не авторизован');
//       }
//     }
//     throw error;
//   }
// );

// export default $api;

import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { getCookie, setCookie } from 'typescript-cookie';

export const API_URL = 'http://185.198.152.20/api/';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

const getAccessToken = () => getCookie('access') || null;

$api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const accessToken = getAccessToken();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

$api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const refreshToken = getCookie('refresh');
        const response = await axios.post(
          `${API_URL}jwt/refresh`,
          {
            refresh: refreshToken,
          },
          {
            withCredentials: true,
          }
        );
        console.log(response.data.access);
        setCookie('access', response.data.access);
        return $api.request(originalRequest);
      } catch (e) {
        console.error('Error refreshing token:', e);
      }
    }
    return Promise.reject(error);
  }
);

export default $api;
