import { StyledPageEmpty } from './styled';
import { EmptyIcon } from '../../Icons';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/constants';

const PageEmpty = () => {
  return (
    <StyledPageEmpty>
      <div className='icon'>
        <EmptyIcon />
      </div>
      <div className='content'>
        <h3>404</h3>
        <p>Not Found</p>
        <span>Data is not available</span>
        <Link to={ROUTES.HOME}>Back to Home</Link>
      </div>
    </StyledPageEmpty>
  );
};

export default PageEmpty;
