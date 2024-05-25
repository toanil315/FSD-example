import { useMemo } from 'react';
import { StyledSlider, StyledSliderWrapper } from './styled';
import Label from '../Input/Label';
import { SliderSingleProps as AntdSliderProps } from 'antd';
import HelperText from '../Input/HelperText';

export interface SliderProps extends Omit<AntdSliderProps, 'onChange' | 'masks'> {
  label?: string;
  helperText?: string;
  required?: boolean;
  onChange?: (value: number) => void;
  name?: string;
  milestone?: number | AntdSliderProps['marks'];
  showMilesStoneValue?: boolean;
}

const Slider = ({
  label,
  required = false,
  onChange,
  helperText,
  max = 100,
  min = 0,
  showMilesStoneValue = false,
  ...restProps
}: SliderProps) => {
  const handleChange = (value: number) => {
    onChange && onChange(value);
  };

  const masks = useMemo(() => {
    if (restProps.milestone) {
      if (typeof restProps.milestone === 'number') {
        const range = max - min + 1;
        return new Array(restProps.milestone).fill(0).reduce((acc, _, index) => {
          const percent = (index + 1) / (Number(restProps.milestone) + 1);
          const tickValue = Number(Number(range * percent).toFixed(0));
          acc[tickValue] = tickValue;
          return acc;
        }, {} as AntdSliderProps['marks']);
      }

      return restProps.milestone;
    }
    return undefined;
  }, [restProps.milestone]);

  return (
    <StyledSliderWrapper>
      <Label
        label={label}
        htmlFor={restProps.name}
        required={required}
      />
      <StyledSlider
        showMilesStoneValue={showMilesStoneValue}
        onChange={handleChange}
        min={min}
        max={max}
        {...(masks ? { marks: masks } : {})}
        {...restProps}
      />
      <HelperText>{helperText}</HelperText>
    </StyledSliderWrapper>
  );
};

export default Slider;
