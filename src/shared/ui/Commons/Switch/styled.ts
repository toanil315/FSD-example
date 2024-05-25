import styled from '@emotion/styled';

export const StyledSwitchWrapper = styled.div`
  .container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 12px;

    label {
      font-size: ${({ theme }) => theme.fontSizes.body};
      font-weight: ${({ theme }) => theme.fontWeights.regular};
      line-height: ${({ theme }) => theme.lineHeights.body};
      color: ${({ theme }) => theme.colors.black};
    }
  }

  .ant-switch.ant-switch-disabled {
    background: ${({ theme }) => theme.colors.grey_7} !important;
  }
`;
