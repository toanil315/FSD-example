import { css } from '@emotion/react';
import styled from '@emotion/styled';

const animationKeyframe = css`
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const StyledLoading = styled.div`
  ${animationKeyframe};
  svg {
    animation: spin 1s linear infinite;
  }
`;
