import type { Meta, StoryObj } from '@storybook/react';
import Search from './Search';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: 'Search component, nothing new here.',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Primary: Story = {
  render: () => {
    const [value, setValue] = useState<string>('');
    console.log('====value: ', value);
    return (
      <Search
        name='search'
        onChange={(value) => setValue(value as string)}
        value={value}
      />
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [multipleValue, setMultipleValue] = useState<string[]>([]);
    console.log('====multipleValue: ', multipleValue);
    return (
      <div style={{ width: 200 }}>
        <Search
          name='search-multiple'
          onChange={(value) => setMultipleValue(value as string[])}
          value={multipleValue}
          multiple
        />
      </div>
    );
  },
};
