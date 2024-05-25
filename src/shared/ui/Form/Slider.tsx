import { Controller, useFormContext } from 'react-hook-form';
import Slider, { SliderProps } from '../Commons/Slider/Slider';

const RHFSlider = (props: Omit<SliderProps, 'onChange'> & { name: string }) => {
  const { control } = useFormContext();

  return (
    <Controller
      render={({ field }) => (
        <Slider
          {...props}
          {...field}
        />
      )}
      name={props.name || ''}
      control={control}
    />
  );
};

export default RHFSlider;
