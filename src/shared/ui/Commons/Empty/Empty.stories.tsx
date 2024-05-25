import type { Meta, StoryObj } from '@storybook/react';
import DataEmpty from './DataEmpty';
import PageEmpty from './PageEmpty';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta = {
  title: 'Components/Empty',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: 'Empty component, nothing new here.',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj;

export const Page: Story = {
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({}),
  },
  render: () => <PageEmpty />,
};

export const Data: Story = {
  render: () => <DataEmpty />,
};
