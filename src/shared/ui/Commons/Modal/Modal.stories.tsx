import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { Button } from '../Button';
import { useModal } from '@/shared/hooks';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: `Modal component, use modal instance returned from useModal hook to control modal' state.`,
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  render: () => {
    const modal = useModal();

    return (
      <div>
        <Modal
          modal={modal}
          title='Modal Header'
          onOk={() => console.log('ok')}
        >
          Something new
        </Modal>
        <Button onClick={modal.show}>Open Modal</Button>
      </div>
    );
  },
};
