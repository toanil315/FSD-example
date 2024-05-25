import { DatePickerProps as AntdDatePickerProps } from 'antd';
import React from 'react';
import { StyledDatePicker, StyledDatePickerWrapper, StyledPanel } from './styled';
import Label from '../Input/Label';
import HelperText from '../Input/HelperText';
import ErrorMessage from '../Input/ErrorMessage';
import dayjs from 'dayjs';
import { ReadOnlyIcon } from '../../Icons';

export interface DatePickerProps extends Omit<AntdDatePickerProps, 'onChange'> {
  label?: string;
  helperText?: string;
  required?: boolean;
  error?: { message?: string };
  onChange?: (value: number) => void;
}

const DatePicker = ({
  label,
  required = false,
  error,
  onChange,
  helperText,
  ...restProps
}: DatePickerProps) => {
  const handleChange: AntdDatePickerProps['onChange'] = (value) => {
    onChange && onChange(value?.valueOf());
  };

  const readOnlyProps = restProps.readOnly
    ? { open: false, inputReadOnly: true, allowClear: false, suffixIcon: <ReadOnlyIcon /> }
    : {};

  return (
    <StyledDatePickerWrapper>
      <Label
        label={label}
        htmlFor={restProps.name}
        required={required}
      />
      <StyledDatePicker
        isError={error?.message}
        onChange={handleChange}
        panelRender={(panel) => {
          return <StyledPanel>{panel}</StyledPanel>;
        }}
        {...(restProps as any)}
        value={restProps.value ? dayjs(restProps.value) : undefined}
        cellRender={(date: dayjs.Dayjs) => {
          let cellClassName = 'ant-picker-cell-inner';
          // another color for saturday and sunday
          if (date.day() === 0 || date.day() === 6) {
            cellClassName += ' weekend';
          }
          return <div className={cellClassName}>{date.date()}</div>;
        }}
        {...readOnlyProps}
      />

      <HelperText>{helperText}</HelperText>
      <ErrorMessage>{error?.message}</ErrorMessage>
    </StyledDatePickerWrapper>
  );
};

export default DatePicker;
