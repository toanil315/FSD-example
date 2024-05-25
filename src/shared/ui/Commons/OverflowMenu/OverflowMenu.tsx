import { DropdownProps } from 'antd';
import { StyledDropdown, StyledPanel } from './styled';

const OverflowMenu = (props: DropdownProps) => {
  return (
    <StyledDropdown
      dropdownRender={(node) => <StyledPanel>{node}</StyledPanel>}
      {...props}
    />
  );
};

export default OverflowMenu;
