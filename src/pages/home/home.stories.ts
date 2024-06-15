// Replace your-framework with the name of your framework (e.g. nextjs, vue3-vite)
import type { Meta, StoryObj } from '@storybook/react';
import HomePage from '.';
import { blogHandlers } from '@/entities/blog/mocks/handlers';

const meta: Meta<typeof HomePage> = {
  title: 'Pages/Home',
  component: HomePage,
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Primary: Story = {
  parameters: {
    msw: {
      handlers: blogHandlers,
    },
  },
};
