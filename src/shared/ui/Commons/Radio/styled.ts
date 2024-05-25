import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Radio } from 'antd';

interface Props {
  isError?: boolean;
}

export const StyledRadioWrapper = styled.div``;

export const StyledRadioGroup = styled(Radio.Group)<Props>`
  ${({ isError, theme }) =>
    isError &&
    css`
      .ant-radio-wrapper {
        span:last-child {
          color: ${theme.colors.red_6};
        }

        .ant-radio-inner {
          border-color: ${theme.colors.red_6} !important;
        }
      }
    `}
`;

export const StyledRadio = styled(Radio)`
  &.ant-radio-wrapper {
    span:last-child {
      font-size: ${({ theme }) => theme.fontSizes.body};
      line-height: ${({ theme }) => theme.lineHeights.body};
      color: ${({ theme }) => theme.colors.black};
    }

    &:hover {
      .ant-radio-inner {
        &::before {
          content: '';
          position: absolute;
          top: -5px;
          left: -5px;
          width: 24px;
          height: 24px;
          border: 4px solid ${({ theme }) => theme.colors.primary_1};
          border-radius: ${({ theme }) => theme.radii.circle};
        }
      }
    }
  }
`;
