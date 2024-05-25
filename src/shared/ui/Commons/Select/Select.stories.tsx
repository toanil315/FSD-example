import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: 'Select component, nothing new here.',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: 'Label',
    required: true,
    readOnly: false,
    name: 'select',
    placeholder: 'Enter somethings...',
    options: [
      { value: 'jack', label: 'Jack' },
      { value: 'lucy', label: 'Lucy' },
      { value: 'Yiminghe', label: 'yiminghe' },
    ],
    defaultValue: 'jack',
  },
  render: (props) => {
    return (
      <div style={{ width: '300px' }}>
        <Select {...props} />
      </div>
    );
  },
};
