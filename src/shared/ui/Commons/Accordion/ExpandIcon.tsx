import { MinusIcon, PlusIcon } from '../../Icons';

interface Props {
  isExpanded: boolean;
}

const ExpandIcon = ({ isExpanded }: Props) => {
  if (isExpanded) {
    return <MinusIcon />;
  }

  return <PlusIcon />;
};

export default ExpandIcon;
