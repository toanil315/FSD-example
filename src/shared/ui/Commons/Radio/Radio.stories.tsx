import type { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: 'Radio component, nothing new here.',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Primary: Story = {
  render: () => {
    return (
      <Radio>
        <Radio.Item value={1}>Radio 1</Radio.Item>
        <Radio.Item value={2}>Radio 2</Radio.Item>
        <Radio.Item value={3}>Radio 3</Radio.Item>
      </Radio>
    );
  },
};
