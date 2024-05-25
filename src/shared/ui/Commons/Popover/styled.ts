import styled from '@emotion/styled';
import { Popover } from 'antd';

export const StyledPopover = styled(Popover)`
  .ant-popover {
    .ant-popover-inner {
      padding: 0;
      border-radius: ${({ theme }) => theme.radii.medium} !important;
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0px 0px 6px 0px rgba(0, 0, 0, 0.05);

      .ant-popover-title {
        margin-bottom: 0;

        font-size: ${({ theme }) => theme.fontSizes.h5};
        line-height: ${({ theme }) => theme.lineHeights.h5};
        font-weight: ${({ theme }) => theme.fontWeights.bold};
        color: ${({ theme }) => theme.colors.grey_12};
        padding: 12px 16px;
        border-bottom: 1px solid ${({ theme }) => theme.colors.grey_4};
      }

      .ant-popover-inner-content {
        padding: 12px 16px;
      }
    }
  }
`;
