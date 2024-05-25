import { Controller, useFormContext } from 'react-hook-form';
import Select, { SelectProps } from '../Commons/Select/Select';

const RHFSelect = (props: Omit<SelectProps, 'onChange'> & { name: string }) => {
  const { control } = useFormContext();

  return (
    <Controller
      render={({ field, fieldState }) => (
        <Select
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

export default RHFSelect;
