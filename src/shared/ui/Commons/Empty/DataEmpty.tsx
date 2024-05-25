import { StyledDataEmpty } from './styled';
import { EmptyIcon } from '../../Icons';

const DataEmpty = () => {
  return (
    <StyledDataEmpty>
      <div className='icon'>
        <EmptyIcon />
      </div>
      <h4>Data is not available</h4>
      <p>Please try again.</p>
    </StyledDataEmpty>
  );
};

export default DataEmpty;
