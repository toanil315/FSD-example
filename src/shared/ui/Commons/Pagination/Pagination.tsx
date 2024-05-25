import { PaginationProps } from 'antd';
import { StyledLimitWrapper, StyledPagination, StyledPaginationWrapper } from './styled';
import { Select } from '../Select';
import { useTranslation } from 'react-i18next';

interface Props extends PaginationProps {
  onTableChange: (pagination: { current: number; pageSize: number }) => void;
  current: number;
  pageSize: number;
}

const Pagination = ({ onTableChange, ...restProps }: Props) => {
  const { t } = useTranslation();
  const from = restProps.pageSize * (restProps.current - 1) + 1;
  const to = restProps.pageSize * restProps.current;

  const handleLimitChange = (value: string) => {
    onTableChange({ current: restProps.current, pageSize: Number(value) });
  };

  const handlePageChange = (page: number) => {
    onTableChange({ current: page, pageSize: restProps.pageSize });
  };

  return (
    <StyledPaginationWrapper>
      <StyledLimitWrapper>
        <span>{t('components.table.resultPerPage')}</span>
        <Select
          style={{ width: '80px' }}
          name='limit'
          value={restProps.pageSize}
          onChange={handleLimitChange}
          options={[
            { value: 10, label: '10' },
            { value: 20, label: '20' },
            { value: 50, label: '50' },
            { value: 100, label: '100' },
          ]}
        />
        <span>
          {from}-{to} of {restProps.total}
        </span>
      </StyledLimitWrapper>
      <StyledPagination
        onChange={handlePageChange}
        {...restProps}
      />
    </StyledPaginationWrapper>
  );
};

export default Pagination;
