import styled from '@emotion/styled';
import { StatusProps } from './Status';

export const StyledStatus = styled.div<Omit<StatusProps, 'children'>>`
  display: inline-block;
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.radii.small};
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: ${({ theme }) => theme.lineHeights.small};
  text-align: center;

  font-weight: ${({ theme, filled }) =>
    filled ? theme.fontWeights.regular : theme.fontWeights.bold};
  color: ${({ theme, color, filled }) =>
    filled ? theme.colors.white : theme.colors[(color + '_6') as 'primary_6']};
  background-color: ${({ theme, color, filled }) =>
    filled ? theme.colors[(color + '_6') as 'primary_6'] : 'transparent'};
`;
