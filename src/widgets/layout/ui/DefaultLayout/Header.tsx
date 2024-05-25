import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SearchBlog } from './SearchBlog';
import { ROUTES } from '@/shared/constants';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className=' sticky top-0 z-50 bg-white shadow-md'>
      <div className='mx-auto max-w-7xl flex flex-wrap items-center justify-between px-4 py-6'>
        <div className='flex items-center gap-4'>
          <Link to='/'>
            <img
              className='h-6  cursor-pointer object-contain'
              src='https://seeklogo.com/images/M/medium-logo-F0ACFCCD58-seeklogo.com.png'
              alt='logo'
            />
          </Link>
          <div className='hidden md:block'>
            <SearchBlog />
          </div>
        </div>
        <div className='flex items-center space-x-4 font-semibold text-green-500'>
          <Link to={ROUTES.CREATE_BLOG}>
            <h3 className='cursor-pointer rounded-full border !border-green-500 px-4 py-2'>
              {t('getStarted')}
            </h3>
          </Link>
        </div>
        <div className='block md:hidden w-full mt-3'>
          <SearchBlog />
        </div>
      </div>
    </header>
  );
};
