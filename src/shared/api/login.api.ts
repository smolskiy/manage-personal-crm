import { CookieName } from '@/shared/enums';
import Cookies from 'js-cookie';
import type { LoginFormValues, LoginResponse } from '@/shared/model';
import { http } from '@/shared/utils';

export const login = async (body: LoginFormValues): Promise<LoginResponse> => {
  return http.post<LoginResponse>('/api/auth/login', body).then(({ data }): LoginResponse => {
    Cookies.set(CookieName.AccessToken, `Bearer ${data.accessToken}`);
    Cookies.set(CookieName.HasAdminAccess, String(data.user.hasAdminAccess));
    Cookies.set(CookieName.IsFinishSignUp, String(data.user.isFinishSignUp));
    return data;
  });
};
