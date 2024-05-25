import { useTranslation } from 'react-i18next';

export const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className='mx-auto border-y border-black bg-green-600 px-4 2xl:max-w-7xl'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <div className='py-8 lg:py-0'>
          <h1 className='max-w-xl pb-4 font-serif text-5xl font-bold leading-tight lg:max-w-2xl lg:text-6xl lg:leading-tight'>
            <span className='underline'>Medium</span> {t('intro')}
          </h1>
          <p className='text-sm'>{t('description')}</p>
        </div>
        <div className='hidden md:inline md:h-32 lg:h-[400px]'>
          <img
            className='object-contain h-full'
            src='https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png'
            alt='medium logo'
          />
        </div>
      </div>
    </div>
  );
};
