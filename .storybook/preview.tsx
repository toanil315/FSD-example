import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ConfigProvider } from 'antd';

import { I18nextProvider } from 'react-i18next';
import React, { Suspense } from 'react';
import i18n from '../src/app/i18n';
import NotificationProvider from '../src/app/providers/NotificationProvider';
import { theme } from '../src/shared/styles/theme';
import { initialize, mswLoader } from 'msw-storybook-addon';

import '../src/index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { reactQueryClient } from '../src/shared/libs/reactQueryClient';
import { withRouter } from 'storybook-addon-remix-react-router';
import { reactRouterParameters } from 'storybook-addon-remix-react-router';

const withContexts = (Story: any) => {
  return (
    // This catches the suspense from components not yet ready (still loading translations)
    // Alternative: set useSuspense to false on i18next.options.react when initializing i18next
    <QueryClientProvider client={reactQueryClient}>
      <Suspense fallback={<div>loading translations...</div>}>
        <I18nextProvider i18n={i18n}>
          <NotificationProvider>
            <Story />
          </NotificationProvider>
        </I18nextProvider>
      </Suspense>
    </QueryClientProvider>
  );
};

const convertToPx = (value: string) => Number(value.replace('px', ''));

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    reactRouter: reactRouterParameters({}),
  },

  decorators: [
    withRouter,
    withThemeFromJSXProvider({
      themes: {
        light: theme,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
    }),
    withContexts,

    // Dont move this to the top, it should be the last decorator
    // https://stackoverflow.com/questions/71993857/using-usestate-along-with-global-decorators-throws-error-storybook-preview-hooks/77859321#77859321
    withThemeFromJSXProvider({
      themes: {
        light: {
          token: {
            colorPrimary: theme.colors.primary_6,
            colorError: theme.colors.red_6,
            fontSize: convertToPx(theme.fontSizes.body),
            borderRadius: convertToPx(theme.radii.medium),
          },
        },
      },
      defaultTheme: 'light',
      Provider: ConfigProvider,
    }),
  ],
  loaders: [mswLoader],
};

initialize();

export default preview;
