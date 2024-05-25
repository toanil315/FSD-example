import { Controller, useFormContext } from 'react-hook-form';
import Radio, { RadioProps } from '../Commons/Radio/Radio';

const RHFRadio = (props: Omit<RadioProps, 'onChange'> & { name: string }) => {
  const { control } = useFormContext();

  return (
    <Controller
      render={({ field, fieldState }) => (
        <Radio
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

export default RHFRadio;
