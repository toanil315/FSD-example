import React from 'react';
import { CheckboxProps as AntdCheckBoxProps } from 'antd';
import { StyledCheckBox } from './styled';

export interface CheckboxProps extends Omit<AntdCheckBoxProps, 'onChange'> {
  checkboxSize?: 'small' | 'medium';
  error?: { message?: string };
  onChange?: (value: boolean) => void;
  name: string;
}

const Checkbox = ({ onChange, ...restProps }: CheckboxProps) => {
  const handleChange: AntdCheckBoxProps['onChange'] = (e) => {
    onChange && onChange(e.target.checked);
  };

  return (
    <StyledCheckBox
      {...restProps}
      onChange={handleChange}
      {...(restProps.value ? { checked: restProps.value } : {})}
    />
  );
};

export default Checkbox;
