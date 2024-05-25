import React from 'react';
import { Required, StyledLabel } from './styled';

interface Props {
  label?: string;
  htmlFor?: string;
  required?: boolean;
}

const Label = ({ label, htmlFor = '', required = false }: Props) => {
  if (label) {
    return (
      <StyledLabel htmlFor={htmlFor}>
        {label} {required && <Required>*</Required>}
      </StyledLabel>
    );
  }

  return null;
};

export default Label;
