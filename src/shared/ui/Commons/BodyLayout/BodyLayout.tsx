import React from 'react';
import { StyledBodyLayout } from './styled';

interface Props {
  title?: React.ReactNode;
  children: React.ReactNode;
}

const BodyLayout = ({ title, children }: Props) => {
  return (
    <StyledBodyLayout>
      {title && <h1>{title}</h1>}
      <main>{children}</main>
    </StyledBodyLayout>
  );
};

export default BodyLayout;
