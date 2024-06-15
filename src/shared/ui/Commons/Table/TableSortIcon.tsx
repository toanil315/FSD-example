import { SORT_ORDER_ENUM } from '@/shared/constants';
import React from 'react';
import { ArrowDownIcon, ArrowUpIcon, SortIcon } from '../../Icons';

interface Props {
  sortOrder: string | null;
}

const TableSortIcon = ({ sortOrder }: Props) => {
  switch (sortOrder) {
    case SORT_ORDER_ENUM.ASC:
      return <ArrowUpIcon width={18} />;
    case SORT_ORDER_ENUM.DESC:
      return <ArrowDownIcon width={18} />;
    default:
      return <SortIcon />;
  }
};

export default TableSortIcon;
