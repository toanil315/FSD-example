import { PopoverProps } from 'antd';
import { StyledPopover } from './styled';

const Popover = (props: PopoverProps) => {
  return (
    <StyledPopover
      {...props}
      getPopupContainer={(triggerNode) => triggerNode}
    />
  );
};

export default Popover;
