import { theme } from '@/shared/styles';

const convertToPx = (value: string) => Number(value.replace('px', ''));

export const antdTheme = {
  token: {
    colorPrimary: theme.colors.primary_6,
    colorError: theme.colors.red_6,
    fontSize: convertToPx(theme.fontSizes.body),
    borderRadius: convertToPx(theme.radii.medium),
  },
};
