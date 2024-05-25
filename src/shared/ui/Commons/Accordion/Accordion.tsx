import { CollapseProps } from 'antd';
import { StyledCollapse } from './styled';
import ExpandIcon from './ExpandIcon';

const Accordion = (props: CollapseProps) => {
  return (
    <StyledCollapse
      expandIconPosition='end'
      expandIcon={(panelProps) => <ExpandIcon isExpanded={Boolean(panelProps.isActive)} />}
      {...props}
    />
  );
};

export default Accordion;
