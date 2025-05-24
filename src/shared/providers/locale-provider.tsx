import { I18nProvider } from '@react-aria/i18n';
import type { FC, PropsWithChildren } from 'react';

export const LocaleProvider: FC<PropsWithChildren> = ({ children }) => {
  return <I18nProvider locale='ru-RU'>{children}</I18nProvider>;
};
