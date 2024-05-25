import styled from '@emotion/styled';

export const StyledPageEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  .content {
    max-width: 520px;

    h3 {
      font-size: ${({ theme }) => theme.fontSizes.display_3};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      color: ${({ theme }) => theme.colors.grey_7};
      line-height: ${({ theme }) => theme.lineHeights.display_3};
    }

    p {
      font-size: ${({ theme }) => theme.fontSizes.h4};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      color: ${({ theme }) => theme.colors.grey_12};
      line-height: ${({ theme }) => theme.lineHeights.h4};
      margin-bottom: 4px;
    }

    span {
      font-size: ${({ theme }) => theme.fontSizes.body};
      font-weight: ${({ theme }) => theme.fontWeights.regular};
      color: ${({ theme }) => theme.colors.grey_12};
      line-height: ${({ theme }) => theme.lineHeights.body};
    }

    a {
      display: block;
      margin-top: 20px;
      text-decoration: none;
      font-size: ${({ theme }) => theme.fontSizes.body};
      font-weight: ${({ theme }) => theme.fontWeights.regular};
      color: ${({ theme }) => theme.colors.primary_6};
      line-height: ${({ theme }) => theme.lineHeights.body};
    }
  }
`;

export const StyledDataEmpty = styled.div`
  max-width: 500px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 8px;

  .icon {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  h4 {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.h4};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.grey_12};
    line-height: ${({ theme }) => theme.lineHeights.h4};
  }

  p {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.body};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    color: ${({ theme }) => theme.colors.grey_12};
    line-height: ${({ theme }) => theme.lineHeights.body};
  }
`;
