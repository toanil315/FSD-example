import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import Label from './Label';
import {
  StyledInput,
  StyledInputNumber,
  StyledInputPassword,
  StyledInputWrapper,
  StyledTextArea,
} from './styled';
import HelperText from './HelperText';
import ErrorMessage from './ErrorMessage';
import { InputProps as AntdInputProps } from 'antd';
import { DownIcon, ReadOnlyIcon, UpIcon } from '../../Icons';
import { NumberUtil } from '@/shared/utils';

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> &
  Partial<Omit<AntdInputProps, 'onChange'>> & {
    width?: string;
    suffixIcon?: JSX.Element;
    suffixPosition?: 'left' | 'right';
    label?: string;
    helperText?: string;
    required?: boolean;
    error?: { message?: string };
    onChange?: (value: string | number | undefined) => void;
    direction?: 'column' | 'row';
    inputSize?: 'small' | 'medium' | 'large';
    type?: 'text' | 'password' | 'number' | 'textarea';
  };

const Input = ({
  label,
  required = false,
  error,
  onChange,
  helperText,
  type,
  ...restProps
}: InputProps) => {
  const handleInputTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value);
  };

  const handleInputPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value);
  };

  const handleInputNumberChange = (value: number) => {
    onChange && onChange(value);
  };

  const renderInput = () => {
    const isReadOnly = restProps.readOnly;
    const readOnlyProps = isReadOnly ? { suffix: <ReadOnlyIcon /> } : {};

    switch (type) {
      case 'text':
        return (
          <StyledInput
            isError={Boolean(error?.message)}
            {...(restProps as any)}
            onChange={handleInputTextChange}
            {...readOnlyProps}
          />
        );

      case 'password':
        return (
          <StyledInputPassword
            isError={Boolean(error?.message)}
            {...(restProps as any)}
            onChange={handleInputPasswordChange}
            {...readOnlyProps}
          />
        );

      case 'number':
        return (
          <StyledInputNumber
            isError={Boolean(error?.message)}
            {...(restProps as any)}
            onChange={handleInputNumberChange}
            {...readOnlyProps}
            controls={{ upIcon: <UpIcon />, downIcon: <DownIcon /> }}
            formatter={NumberUtil.formatterNumber}
            parser={NumberUtil.parserNumber}
          />
        );

      case 'textarea':
        return (
          <StyledTextArea
            isError={Boolean(error?.message)}
            {...(restProps as any)}
            onChange={handleInputTextChange}
            {...readOnlyProps}
          />
        );

      default:
        return (
          <StyledInput
            isError={Boolean(error?.message)}
            {...(restProps as any)}
            onChange={handleInputTextChange}
            {...readOnlyProps}
          />
        );
    }
  };

  return (
    <StyledInputWrapper>
      <Label
        label={label}
        htmlFor={restProps.name}
        required={required}
      />
      {renderInput()}
      <HelperText>{helperText}</HelperText>
      <ErrorMessage>{error?.message}</ErrorMessage>
    </StyledInputWrapper>
  );
};

export default Input;
