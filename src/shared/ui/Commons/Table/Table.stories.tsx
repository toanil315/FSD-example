import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';
import { TableColumnsType } from 'antd';
import { useTable } from '@/shared/hooks';
import { DEFAULT_LIMIT, SORT_ORDER_ENUM } from '@/shared/constants';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: `    
            Data table component
            when init the table, you need to pass the tableInstance returned from useTable hook.
            this instance contains table state like sort, filter, pagination, 
            these table's state will be updated automatically when you interact with the table,
            so you can use this to fetch data from server side.
            NOTE: table's state will be stored in URL query params, 
            this approach is used to achieve following goals:
            + make the table's state bookmarkable
            + end user can share link with table's state to others
            + when user refresh the page, the table state will be restored
            NOTE: this table is based on antd table, so when attach this with data source,
            with each item, you need to pass key property. This prop used to indentify each row in the table by default antd table.
            If you want to use another property, you can pass rowKey prop to the table component.
        `,
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Primary: Story = {
  render: () => {
    const dataSource = [
      {
        id: '1',
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
      },
      {
        id: '2',
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
      },
    ];

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

    const tableInstance = useTable({
      pagination: {
        page: 1,
        limit: DEFAULT_LIMIT,
      },
      sort: {
        field: 'name',
        order: SORT_ORDER_ENUM.ASC,
      },
    });

    return (
      <div style={{ width: 500 }}>
        <Table
          tableInstance={tableInstance}
          dataSource={dataSource}
          columns={columns}
          totalElements={dataSource.length || 0}
        />
      </div>
    );
  },
};
