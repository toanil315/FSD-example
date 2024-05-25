import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { openNotification } from '@/shared/utils';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: 'Notification component, nothing new here.',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Primary: Story = {
  render: () => {
    return (
      <Button
        onClick={() =>
          openNotification({
            message: 'Notification Title',
            description:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            type: 'success',
          })
        }
      >
        Open Notification
      </Button>
    );
  },
};
