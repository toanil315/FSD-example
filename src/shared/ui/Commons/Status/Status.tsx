import React from 'react';
import { StyledStatus } from './styled';

type statusColor =
  | 'primary'
  | 'green'
  | 'orange'
  | 'red'
  | 'yellow'
  | 'purple'
  | 'cyan'
  | 'magenta'
  | 'teal'
  | 'grey';
export interface StatusProps {
  color: statusColor;
  children: React.ReactNode;
  filled?: boolean;
}

const Status = ({ children, ...restProps }: StatusProps) => {
  return <StyledStatus {...restProps}>{children}</StyledStatus>;
};

export default Status;
