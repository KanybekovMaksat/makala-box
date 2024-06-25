import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { getCookie, setCookie } from 'typescript-cookie';

export const API_URL = 'https://api.makalabox.com/api/';

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
        const refreshToken = localStorage.getItem('refresh');
        const response = await axios.post(
          `${API_URL}jwt/refresh/`,
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
