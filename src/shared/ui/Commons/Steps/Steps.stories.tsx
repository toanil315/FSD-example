import type { Meta, StoryObj } from '@storybook/react';
import Steps from './Steps';
import { useSteps } from '@/shared/hooks';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Steps> = {
  title: 'Components/Steps',
  component: Steps,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    docs: {
      description: {
        component: `Steps component, use stepsInstance returned from useSteps hook to control step's state.`,
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Steps>;

export const Primary: Story = {
  render: () => {
    const stepsInstance = useSteps({ totalSteps: 3 });
    return (
      <div style={{ width: '100%' }}>
        <Steps
          stepsInstance={stepsInstance}
          onChange={stepsInstance.set}
          labelPlacement='vertical'
          items={[
            {
              title: 'Finished',
              description: 'this is description',
            },
            {
              title: 'In Progress',
              description: 'this is description',
            },
            {
              title: 'Waiting',
              description: 'this is description',
            },
          ]}
        />
      </div>
    );
  },
};
