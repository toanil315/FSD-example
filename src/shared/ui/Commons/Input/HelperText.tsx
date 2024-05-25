import React from 'react';
import { StyledHelperText } from './styled';

interface Props {
  children: React.ReactNode;
}

const HelperText = ({ children }: Props) => {
  if (children) {
    return <StyledHelperText>{children}</StyledHelperText>;
  }

  return null;
};

export default HelperText;
