import { SORT_ORDER_ENUM } from '@/shared/constants';
import { useRouter } from '@/shared/hooks';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

export const SortOptions = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { query } = useRouter();
  const { order = SORT_ORDER_ENUM.DESC } = query;

  const handleSortChange = (order: string) => {
    searchParams.delete('order');
    searchParams.append('order', order);
    setSearchParams(searchParams);
  };

  const renderSortOptions = () => {
    return [SORT_ORDER_ENUM.DESC, SORT_ORDER_ENUM.ASC].map((sortOrder) => {
      const isActive = order === sortOrder;

      return (
        <button
          key={sortOrder}
          className={`px-4 py-2 hover:bg-white hover:text-green-500 hover:shadow-sm transition-all duration-150 ease-in-out rounded-md  ${
            isActive ? 'font-semibold bg-white text-green-500 shadow-sm' : 'font-light'
          }`}
          onClick={() => handleSortChange(sortOrder)}
        >
          {t(`sortOrder.${sortOrder}`)}
        </button>
      );
    });
  };

  return <div className='flex justify-end ml-auto gap-2'>{renderSortOptions()}</div>;
};
