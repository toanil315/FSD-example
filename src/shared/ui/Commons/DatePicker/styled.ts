import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { DatePicker, DatePickerProps as AntdDatepickerProps } from 'antd';

interface DatePickerProps {
  disabled?: boolean;
  isError?: boolean;
  datepickerSize?: 'small' | 'medium' | 'large';
}

const smallDatePickerCss = css`
  height: 32px;
  padding: 6px 12px;
`;

const mediumDatePickerCss = css`
  height: 40px;
  padding: 10px 12px;
`;

const largeDatePickerCss = css`
  height: 48px;
  padding: 14px 16px;
`;

export const StyledDatePickerWrapper = styled.div`
  width: 100%;
`;

export const StyledDatePicker = styled(DatePicker)<DatePickerProps & Partial<AntdDatepickerProps>>`
  width: 100%;
  padding: 10px 12px;
  box-shadow: none !important;
  border-width: 2px !important;

  ${({ datepickerSize }) => {
    switch (datepickerSize) {
      case 'small':
        return smallDatePickerCss;
      case 'medium':
        return mediumDatePickerCss;
      case 'large':
        return largeDatePickerCss;
      default:
        return mediumDatePickerCss;
    }
  }}

  ${({ isError, theme }) =>
    isError &&
    css`
      border-color: ${theme.colors.red_6} !important;
    `}
`;

export const StyledPanel = styled.div`
  background-color: ${({ theme }) => theme.colors.grey_3};

  .ant-picker-year-btn {
    color: ${({ theme }) => theme.colors.primary_6} !important;
  }

  .ant-picker-cell {
    padding: 0;
  }

  .ant-picker-cell-inner {
    width: 40px;
    height: 40px !important;
    line-height: 40px !important;
    border-radius: ${({ theme }) => theme.radii.medium} !important;

    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }

  .ant-picker-cell-in-view {
    .ant-picker-cell-inner {
      color: ${({ theme }) => theme.colors.black};

      &.weekend {
        color: ${({ theme }) => theme.colors.red_6};
      }
    }
  }

  .ant-picker-cell-today {
    .ant-picker-cell-inner {
      color: ${({ theme }) => theme.colors.primary_6};
      font-weight: ${({ theme }) => theme.fontWeights.bold};

      &::before {
        border-color: transparent !important;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 4px;
        left: 50%;
        transform: translateX(-50%);

        width: 4px;
        height: 4px;
        background-color: ${({ theme }) => theme.colors.primary_6};
      }
    }
  }

  .ant-picker-now-btn {
    color: ${({ theme }) => theme.colors.primary_6} !important;
  }
`;
