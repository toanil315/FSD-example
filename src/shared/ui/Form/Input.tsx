import { Controller, useFormContext } from 'react-hook-form';
import Input, { InputProps } from '../Commons/Input/Input';

const RHFInput = (props: Omit<InputProps, 'onChange'> & { name: string }) => {
  const { control } = useFormContext();

  return (
    <Controller
      render={({ field, fieldState }) => (
        <Input
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

export default RHFInput;
