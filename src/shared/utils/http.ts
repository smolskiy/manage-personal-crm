import axios, { AxiosError } from 'axios';
import { CookieName } from '@/shared/enums';
import Cookies from 'js-cookie';
import type { Nullable } from '@/shared/model';

export const http = axios.create({
  baseURL: '/',
});

http.interceptors.request.use(
  (config) => {
    const token: Nullable<string> = Cookies.get(CookieName.AccessToken);

    if (token) {
      config.headers.set('Authorization', token);
    }

    return config;
  },
  (error: Error | AxiosError) => Promise.reject(error),
);
