import React from 'react';
import { StyledErrorMessage } from './styled';

interface Props {
  children: React.ReactNode;
}

const ErrorMessage = ({ children }: Props) => {
  if (children) {
    return (
      <StyledErrorMessage>
        <span className='icon'>!</span>
        {children}
      </StyledErrorMessage>
    );
  }

  return null;
};

export default ErrorMessage;
