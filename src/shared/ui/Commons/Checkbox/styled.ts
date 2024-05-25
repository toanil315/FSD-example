import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Checkbox } from 'antd';

interface CheckboxProps {
  checkboxSize?: 'small' | 'medium';
}

const smallCheckboxCss = css`
  width: 16px;
  height: 16px;

  &::after {
    inset-inline-start: 25%;
  }
`;

const mediumCheckboxCss = css`
  width: 20px;
  height: 20px;

  &::after {
    inset-inline-start: 28%;
  }
`;

export const StyledCheckBox = styled(Checkbox)<CheckboxProps>`
  .ant-checkbox {
    .ant-checkbox-inner {
      ${({ checkboxSize }) => {
        switch (checkboxSize) {
          case 'small':
            return smallCheckboxCss;
          case 'medium':
            return mediumCheckboxCss;
          default:
            return mediumCheckboxCss;
        }
      }}
    }
  }

  .ant-checkbox-input {
    border-radius: ${({ theme }) => theme.radii.small};
  }
`;
