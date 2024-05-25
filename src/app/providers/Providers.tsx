import { reactQueryClient } from '@/shared/libs/reactQueryClient';
import { ThemeProvider } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import { theme } from '@/shared/styles';
import { antdTheme } from '../styles';
import NotificationProvider from './NotificationProvider';
import { BrowserRouter } from 'react-router-dom';

interface ProvidersProps {
  readonly children: JSX.Element;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={reactQueryClient}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <ConfigProvider theme={antdTheme}>
            <BrowserRouter>
              <NotificationProvider>{children}</NotificationProvider>
            </BrowserRouter>
          </ConfigProvider>
        </ThemeProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
};
