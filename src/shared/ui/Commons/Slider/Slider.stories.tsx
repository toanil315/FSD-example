import type { Meta, StoryObj } from '@storybook/react';
import Slider from './Slider';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: 'Slider component, nothing new here.',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Primary: Story = {
  args: {
    min: 1,
    max: 100,
    milestone: 3,
    showMilesStoneValue: true,
    disabled: false,
  },
  render: (args) => (
    <div style={{ width: 400 }}>
      <Slider {...args} />
    </div>
  ),
};
