import styled from '@emotion/styled';

export const StyledBodyLayout = styled.div`
  padding: 32px;

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.h3};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.black};
    line-height: 1;
    margin-bottom: 24px;
  }

  main {
    width: 100%;
    // view height - header height - content padding - header height - header margin bottom
    min-height: calc(100vh - 72px - 64px - 48px);
    padding: 24px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.radii.medium};
  }
`;
