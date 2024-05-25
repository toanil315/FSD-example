import styled from '@emotion/styled';
import { Steps } from 'antd';

export const StyledSteps = styled(Steps)`
  && {
    .ant-steps-item-title {
      font-size: ${({ theme }) => theme.fontSizes.body};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      line-height: ${({ theme }) => theme.lineHeights.body};
      margin-bottom: 2px;
    }

    .ant-steps-item-description {
      font-size: ${({ theme }) => theme.fontSizes.small};
      line-height: ${({ theme }) => theme.lineHeights.small};
    }

    .ant-steps-item-icon {
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.grey_6};
    }

    .ant-steps-item-active,
    .ant-steps-item-finish {
      .ant-steps-item-icon {
        background-color: ${({ theme }) => theme.colors.primary_6};
        border-color: ${({ theme }) => theme.colors.primary_6};
      }
    }

    .ant-steps-item-finish {
      .ant-steps-item-icon {
        svg {
          fill: ${({ theme }) => theme.colors.white};
        }
      }
    }

    .ant-steps-item-error {
      .ant-steps-item-icon {
        background-color: ${({ theme }) => theme.colors.white};
        border-color: ${({ theme }) => theme.colors.red_6};

        svg {
          fill: ${({ theme }) => theme.colors.red_6};
        }
      }
    }
  }
`;
