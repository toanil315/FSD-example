import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Input, InputProps as AntdInputProps, InputNumber } from 'antd';

interface InputProps {
  disabled?: boolean;
  isError?: boolean;
  inputSize?: 'small' | 'medium' | 'large';
}

const smallInputCss = css`
  height: 32px;
  padding: 6px 12px;
`;

const mediumInputCss = css`
  height: 40px;
  padding: 10px 12px;
`;

const largeInputCss = css`
  height: 48px;
  padding: 14px 16px;
`;

const createStyledInput = (Component: any) => styled(Component)<
  InputProps & Partial<AntdInputProps>
>`
  display: block;
  height: 100%;
  width: 100%;
  border-width: 2px;
  box-shadow: none !important;

  display: flex;
  align-items: center;

  .ant-input-clear-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);

    svg {
      width: 14px;
      height: 14px;
    }
  }

  .ant-input-prefix {
    margin-inline-end: 8px !important;
  }

  ${({ inputSize }) => {
    switch (inputSize) {
      case 'small':
        return smallInputCss;
      case 'medium':
        return mediumInputCss;
      case 'large':
        return largeInputCss;
      default:
        return mediumInputCss;
    }
  }}

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey_5};
  }

  &:focus {
    outline: none;
  }

  ${({ isError, theme }) => {
    return (
      isError &&
      css`
        &.ant-input-affix-wrapper {
          border-color: ${theme.colors.red_6} !important;
        }

        &.ant-input {
          border-color: ${theme.colors.red_6} !important;
        }
      `
    );
  }}
`;

export const StyledInputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledInput = createStyledInput(Input);

export const StyledTextArea = styled(createStyledInput(Input.TextArea))`
  height: unset !important;
  .ant-input-clear-icon {
    position: absolute;
    top: 50%;
    padding-inline: 0;
  }
`;

export const StyledInputPassword = styled(createStyledInput(Input.Password))`
  .ant-input-clear-icon {
    margin-top: 1px;
    right: 35px;
  }

  .ant-input-password-icon {
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const StyledInputNumber = styled(createStyledInput(InputNumber))`
  .ant-input-number-input {
    padding-left: 0;
  }

  .ant-input-number-handler {
    border-inline-start: none !important;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.body};
  color: ${({ theme }) => theme.colors.black};

  margin-bottom: 6px;
`;

export const Required = styled.span`
  font-size: inherit;
  font-weight: inherit;
  color: ${({ theme }) => theme.colors.red_6};
`;

export const StyledHelperText = styled.span`
  color: ${({ theme }) => theme.colors.grey_8};
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: ${({ theme }) => theme.lineHeights.small};

  margin-top: 4px;
`;

export const StyledErrorMessage = styled.span`
  display: flex;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSizes.small};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.red_6};

  margin-top: 4px;

  .icon {
    width: 16px;
    height: 16px;
    border-radius: ${({ theme }) => theme.radii.circle};
    background-color: ${({ theme }) => theme.colors.red_6};

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors.white};

    margin-right: 4px;
  }
`;
