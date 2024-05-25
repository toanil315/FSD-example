import { theme } from '@/shared/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface StyledButtonProps {
  size: 'small' | 'default' | 'large' | 'extraLarge';
  loading?: boolean;
  disabled?: boolean;
}

const buttonSmallCss = css`
  border-radius: ${theme.radii.medium};
  size: ${theme.fontSizes.body};
  gap: 8px;

  .children {
    padding: 6px 12px;
  }
`;

const buttonDefaultCss = css`
  border-radius: ${theme.radii.medium};
  size: ${theme.fontSizes.body};
  gap: 8px;

  .children {
    padding: 10px 16px;
  }
`;

const buttonLargeCss = css`
  border-radius: ${theme.radii.medium};
  size: ${theme.fontSizes.h5};
  gap: 12px;

  .children {
    padding: 14px 20px;
  }
`;

const buttonExtraLarge = css`
  border-radius: ${theme.radii.large};
  size: ${theme.fontSizes.h4};
  gap: 12px;

  .children {
    padding: 18px 24px;
  }
`;

const BaseButton = styled.button<StyledButtonProps>`
  border-width: 1px;
  border-style: solid;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: all 0.2s linear;

  ${({ size }) => {
    switch (size) {
      case 'small':
        return buttonSmallCss;

      case 'default':
        return buttonDefaultCss;

      case 'large':
        return buttonLargeCss;

      case 'extraLarge':
        return buttonExtraLarge;
    }
  }}

  ${({ disabled, loading }) =>
    (disabled || loading) &&
    css`
      pointer-events: none !important;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 5;
        cursor: not-allowed;
        pointer-events: initial;
      }
    `}
`;

export const PrimaryButton = styled(BaseButton)<StyledButtonProps>`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary_6};
  border-color: ${({ theme }) => theme.colors.primary_6};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary_5};
    border-color: ${theme.colors.primary_5};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary_7};
    border-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 1) inset, 0px 0px 0px 2px rgba(0, 82, 157, 1);
  }

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background: ${theme.colors.grey_5} !important;
      border-color: ${theme.colors.grey_5} !important;
      color: ${theme.colors.grey_7} !important;
    `}

  ${({ loading, theme }) =>
    loading &&
    css`
      background-color: ${theme.colors.primary_5} !important;
      border-color: ${theme.colors.primary_5} !important;
    `}
`;

export const SecondaryButton = styled(BaseButton)<StyledButtonProps>`
  color: ${({ theme }) => theme.colors.primary_6};
  background: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.primary_6};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary_1};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 1) inset, 0px 0px 0px 2px rgba(0, 82, 157, 1);
  }

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background: ${theme.colors.white} !important;
      border-color: ${theme.colors.grey_5} !important;
      color: ${theme.colors.grey_7} !important;
    `}

  ${({ loading, theme }) =>
    loading &&
    css`
      background-color: ${theme.colors.primary_1} !important;
    `}
`;

export const TertiaryButton = styled(BaseButton)<StyledButtonProps>`
  color: ${({ theme }) => theme.colors.grey_10};
  background: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.grey_5};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey_4};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.primary_6};
    box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 1) inset, 0px 0px 0px 2px rgba(0, 82, 157, 1);
  }

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background: ${theme.colors.white} !important;
      border-color: ${theme.colors.grey_5} !important;
      color: ${theme.colors.grey_7} !important;
    `}

  ${({ loading, theme }) =>
    loading &&
    css`
      background-color: ${theme.colors.grey_4} !important;
    `}
`;

export const DangerPrimaryButton = styled(BaseButton)<StyledButtonProps>`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.red_6};
  border-color: ${({ theme }) => theme.colors.red_6};

  &:hover {
    background-color: ${({ theme }) => theme.colors.red_5};
    border-color: ${theme.colors.red_5};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.red_6};
    border-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 0px 0px 2px rgba(224, 155, 157, 1);
  }

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background: ${theme.colors.grey_5} !important;
      border-color: ${theme.colors.grey_5} !important;
      color: ${theme.colors.grey_7} !important;
    `}

  ${({ loading, theme }) =>
    loading &&
    css`
      background-color: ${theme.colors.red_5} !important;
      border-color: ${theme.colors.red_5} !important;
    `}
`;

export const DangerSecondaryButton = styled(BaseButton)<StyledButtonProps>`
  color: ${({ theme }) => theme.colors.red_6};
  background: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.red_6};

  &:hover {
    background-color: ${({ theme }) => theme.colors.red_1};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 0px 0px 2px rgba(224, 155, 157, 1);
  }

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background: ${theme.colors.white} !important;
      border-color: ${theme.colors.grey_5} !important;
      color: ${theme.colors.grey_7} !important;
    `}

  ${({ loading, theme }) =>
    loading &&
    css`
      background-color: ${theme.colors.red_1} !important;
    `}
`;

export const DangerTertiaryButton = styled(BaseButton)<StyledButtonProps>`
  color: ${({ theme }) => theme.colors.red_6};
  background: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.red_1};
    border-color: ${({ theme }) => theme.colors.red_1};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 0px 0px 2px rgba(224, 155, 157, 1);
  }

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background: ${theme.colors.white} !important;
      border-color: ${theme.colors.grey_5} !important;
      color: ${theme.colors.grey_7} !important;
    `}

  ${({ loading, theme }) =>
    loading &&
    css`
      background-color: ${theme.colors.red_1};
      border-color: ${theme.colors.red_1};
    `}
`;
