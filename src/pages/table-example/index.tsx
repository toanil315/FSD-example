import { UserApi } from '@/entities/user/apis/blogApi';
import { useTable } from '@/shared/hooks';
import { Input, SearchIcon, Table } from '@/shared/ui';
import { useQuery } from '@tanstack/react-query';
import { TableColumnsType } from 'antd';
import { useState } from 'react';

const columns: TableColumnsType = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
      },
    ],
    sorter: true,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: true,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
  },
];

const TableExample = () => {
  const [search, setSearch] = useState('');

  const tableInstance = useTable({
    pagination: {
      page: 1,
      limit: 2,
    },
  });

  const { data } = useQuery({
    queryKey: [
      'list',
      'user',
      {
        search,
        sortBy: tableInstance.sort.sortedInfo.field,
        order: tableInstance.sort.sortedInfo.order,
        page: tableInstance.pagination.currentPage,
        limit: tableInstance.pagination.limit,
      },
    ],
    queryFn: () =>
      UserApi.list({
        search,
        sortBy: tableInstance.sort.sortedInfo.field,
        order: tableInstance.sort.sortedInfo.order,
        page: tableInstance.pagination.currentPage,
        limit: tableInstance.pagination.limit,
      }),
  });

  const handleSearch = (v: string) => {
    setSearch(v as string);
    tableInstance.onChange({
      current: 1,
      pageSize: tableInstance.pagination.limit,
    });
  };

  return (
    <div className='w-[1000px] mx-auto mt-4'>
      <div className='my-4'>
        <Input
          placeholder='Enter some name...'
          suffix={<SearchIcon />}
          value={search}
          onChange={(v) => handleSearch(v as string)}
        />
      </div>
      <Table
        tableInstance={tableInstance}
        dataSource={data?.data || []}
        columns={columns}
        totalElements={data?.total || 0}
      />
    </div>
  );
};

export default TableExample;
