import styled from '@emotion/styled';
import { Collapse } from 'antd';

export const StyledCollapse = styled(Collapse)`
  &&& {
    width: 100%;

    &.ant-collapse {
      border: none;
      background-color: transparent;
      border-radius: unset;
    }

    .ant-collapse-item {
      border-bottom: 0;

      .ant-collapse-header {
        background-color: ${({ theme }) => theme.colors.grey_3};
        padding: 16px 24px;
        border-top: 1px solid ${({ theme }) => theme.colors.grey_5};
        border-radius: unset;

        .ant-collapse-header-text {
          font-size: ${({ theme }) => theme.fontSizes.body};
          line-height: ${({ theme }) => theme.lineHeights.h5};
          font-weight: ${({ theme }) => theme.fontWeights.bold};
          color: ${({ theme }) => theme.colors.black};
        }

        &:hover {
          background-color: ${({ theme }) => theme.colors.grey_5};
        }
      }

      .ant-collapse-content {
        border-radius: unset;
      }
    }
  }
`;
