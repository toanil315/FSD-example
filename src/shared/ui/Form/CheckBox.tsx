import { Controller, useFormContext } from 'react-hook-form';
import Checkbox, { CheckboxProps } from '../Commons/Checkbox/Checkbox';

const RHFCheckBox = (props: Omit<CheckboxProps, 'onChange'> & { name: string }) => {
  const { control } = useFormContext();

  return (
    <Controller
      render={({ field, fieldState }) => (
        <Checkbox
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

export default RHFCheckBox;
