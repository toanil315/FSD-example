import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Select, SelectProps as AntdSelectProps } from 'antd';

interface SelectProps {
  disabled?: boolean;
  isError?: boolean;
  selectSize?: 'small' | 'medium' | 'large';
}

const smallSelectCss = css`
  height: 32px;
  padding: 6px 12px;
`;

const mediumSelectCss = css`
  height: 40px;
  padding: 10px 12px;
`;

const largeSelectCss = css`
  height: 48px;
  padding: 14px 16px;
`;

export const StyledSelectWrapper = styled.div`
  width: 100%;
`;

export const StyledSelect = styled(Select)<SelectProps & Partial<AntdSelectProps>>`
  && {
    width: 100%;

    .ant-select-selector {
      box-shadow: none !important;
      border-width: 2px !important;

      ${({ selectSize }) => {
        switch (selectSize) {
          case 'small':
            return smallSelectCss;
          case 'medium':
            return mediumSelectCss;
          case 'large':
            return largeSelectCss;
          default:
            return mediumSelectCss;
        }
      }}

      ${({ isError, theme }) =>
        isError &&
        css`
          border-color: ${theme.colors.red_6} !important;
        `}
    }

    &.ant-select-single {
      height: unset !important;
    }

    &.ant-select-multiple {
      .ant-select-selector {
        height: unset !important;
      }
    }
  }
`;

export const StyledDropdown = styled.div`
  .ant-select-item {
    padding: 11px 16px;

    &.ant-select-item-option-active,
    &.ant-select-item-option-selected,
    &:hover {
      background: ${({ theme }) => theme.colors.primary_1} !important;
    }

    &.ant-select-item-option-selected {
      color: ${({ theme }) => theme.colors.primary_6} !important;
    }
  }
`;
