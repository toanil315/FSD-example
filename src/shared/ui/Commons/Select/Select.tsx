import { SelectProps as AntdSelectProps } from 'antd';
import { StyledDropdown, StyledSelect, StyledSelectWrapper } from './styled';
import Label from '../Input/Label';
import HelperText from '../Input/HelperText';
import ErrorMessage from '../Input/ErrorMessage';
import { DownIcon, ReadOnlyIcon } from '../../Icons';

export interface SelectProps extends Omit<AntdSelectProps, 'onChange'> {
  label?: string;
  helperText?: string;
  required?: boolean;
  error?: { message?: string };
  onChange?: (value: string) => void;
  name: string;
  readOnly?: boolean;
  selectSize?: 'small' | 'medium' | 'large';
}

const Select = ({
  label,
  required = false,
  error,
  onChange,
  helperText,
  readOnly,
  ...restProps
}: SelectProps) => {
  const handleChange: AntdSelectProps['onChange'] = (value) => {
    onChange && onChange(value);
  };

  const readOnlyProps = readOnly ? { open: false, suffixIcon: <ReadOnlyIcon /> } : {};

  return (
    <StyledSelectWrapper>
      <Label
        label={label}
        htmlFor={restProps.name}
        required={required}
      />
      <StyledSelect
        isError={error?.message}
        onChange={handleChange}
        {...(restProps as any)}
        dropdownRender={(menu) => {
          return <StyledDropdown>{menu}</StyledDropdown>;
        }}
        suffixIcon={<DownIcon />}
        {...readOnlyProps}
      />

      <HelperText>{helperText}</HelperText>
      <ErrorMessage>{error?.message}</ErrorMessage>
    </StyledSelectWrapper>
  );
};

export default Select;
