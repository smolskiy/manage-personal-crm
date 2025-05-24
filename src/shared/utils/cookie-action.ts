import Cookies from 'js-cookie';
import { CookieName } from '@/shared/enums';

export const cookieSave = (name: CookieName, value: string | undefined): void => {
  if (!value) {
    return;
  }
  Cookies.set(name, value, { expires: 7, secure: true });
};

export const cookieRemove = (name: CookieName): void => {
  Cookies.remove(name);
};

export const cookieGet = <T>(name: CookieName): string | T | undefined => {
  return Cookies.get(name);
};

export const clearCookies = (): void => {
  Object.keys(Cookies.get()).forEach((name: string): void => {
    Cookies.remove(name);
  });
};
