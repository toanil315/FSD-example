import React from 'react';
import {
  DangerPrimaryButton,
  DangerSecondaryButton,
  DangerTertiaryButton,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './styled';
import { Loading } from '../Loading';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'default' | 'large' | 'extraLarge';
  _type?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'danger_primary'
    | 'danger_secondary'
    | 'danger_tertiary';
  color?: 'primary' | 'danger';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ size = 'default', _type = 'primary', children, ...restProps }: Props) => {
  const renderBtnContent = () => {
    return (
      <>
        {restProps.loading && <Loading size='small' />}
        <div className='children'> {children}</div>
      </>
    );
  };

  switch (_type) {
    case 'primary':
      return (
        <PrimaryButton
          size={size}
          {...restProps}
        >
          {renderBtnContent()}
        </PrimaryButton>
      );

    case 'secondary':
      return (
        <SecondaryButton
          size={size}
          {...restProps}
        >
          {renderBtnContent()}
        </SecondaryButton>
      );

    case 'tertiary':
      return (
        <TertiaryButton
          size={size}
          {...restProps}
        >
          {renderBtnContent()}
        </TertiaryButton>
      );

    case 'danger_primary':
      return (
        <DangerPrimaryButton
          size={size}
          {...restProps}
        >
          {renderBtnContent()}
        </DangerPrimaryButton>
      );

    case 'danger_secondary':
      return (
        <DangerSecondaryButton
          size={size}
          {...restProps}
        >
          {renderBtnContent()}
        </DangerSecondaryButton>
      );

    case 'danger_tertiary':
      return (
        <DangerTertiaryButton
          size={size}
          color='danger'
          {...restProps}
        >
          {renderBtnContent()}
        </DangerTertiaryButton>
      );
  }
};

export default Button;
