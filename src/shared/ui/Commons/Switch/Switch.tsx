import { SwitchProps as AntdSwitchProps, Switch as AntdSwitch } from 'antd';
import { StyledSwitchWrapper } from './styled';
import HelperText from '../Input/HelperText';

export interface SwitchProps extends AntdSwitchProps {
  label?: string;
  helperText?: string;
}

const Switch = ({ label, helperText, ...restProps }: SwitchProps) => {
  return (
    <StyledSwitchWrapper>
      <div className='container'>
        <AntdSwitch {...restProps} />
        <label>{label}</label>
      </div>
      <HelperText>{helperText}</HelperText>
    </StyledSwitchWrapper>
  );
};

export default Switch;
