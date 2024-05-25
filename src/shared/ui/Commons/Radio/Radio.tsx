import { RadioChangeEvent, RadioGroupProps, RadioProps as AntdRadioProps } from 'antd';
import React from 'react';
import { StyledRadio, StyledRadioGroup, StyledRadioWrapper } from './styled';
import Label from '../Input/Label';
import HelperText from '../Input/HelperText';
import ErrorMessage from '../Input/ErrorMessage';

interface RadioItem {
  value: string | number;
  label: React.ReactNode;
}

export interface RadioProps extends Omit<RadioGroupProps, 'onChange'> {
  label?: string;
  helperText?: string;
  required?: boolean;
  error?: { message?: string };
  onChange?: (value: number) => void;
}

const Radio = ({
  label,
  required = false,
  error,
  onChange,
  helperText,
  children,
  ...restProps
}: RadioProps) => {
  const handleChange = (e: RadioChangeEvent) => {
    onChange && onChange(e.target.value);
  };

  return (
    <StyledRadioWrapper>
      <Label
        label={label}
        htmlFor={restProps.name}
        required={required}
      />
      <div>
        <StyledRadioGroup
          isError={Boolean(error?.message)}
          onChange={handleChange}
          {...restProps}
        >
          {children}
        </StyledRadioGroup>
      </div>
      <HelperText>{helperText}</HelperText>
      <ErrorMessage>{error?.message}</ErrorMessage>
    </StyledRadioWrapper>
  );
};

export const RadioItem = (props: AntdRadioProps) => {
  return <StyledRadio {...props} />;
};

Radio.Item = RadioItem;

export default Radio;
