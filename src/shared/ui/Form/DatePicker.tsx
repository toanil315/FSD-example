import { Controller, useFormContext } from 'react-hook-form';
import DatePicker, { DatePickerProps } from '../Commons/DatePicker/DatePicker';

const RHFDatePicker = (props: Omit<DatePickerProps, 'onChange'> & { name: string }) => {
  const { control } = useFormContext();

  return (
    <Controller
      render={({ field, fieldState }) => (
        <DatePicker
          error={fieldState.error}
          {...props}
          {...field}
        />
      )}
      name={props.name || ''}
      control={control}
    />
  );
};

export default RHFDatePicker;
