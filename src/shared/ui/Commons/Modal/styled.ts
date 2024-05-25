import styled from '@emotion/styled';
import { Modal } from 'antd';

export const StyledAntdModal = styled(Modal)`
  .ant-modal-title {
    color: ${({ theme }) => theme.colors.grey_12};
    font-size: ${({ theme }) => theme.fontSizes.h3};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;
