import type { Meta, StoryObj } from '@storybook/react';
import Form from './index';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { UPLOADER_ENUM } from '../Commons/FileUploader/FileUploader';
import { Button, Radio } from '../Commons';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component: 'Form component, combine between react-hook-form and yup for validation.',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Primary: Story = {
  render: () => {
    const form = useForm<any>({
      defaultValues: {
        text: '',
        date: undefined,
        select: undefined,
        checkbox: true,
        file: undefined,
        search: '',
        switch: true,
        slider: 50,
        editor: '',
      },
      resolver: yupResolver(
        yup.object().shape({
          text: yup.string().required('this field is required'),
          date: yup.string().required('this field is required'),
          select: yup.string().required('this field is required'),
          // file: yup.string().required('this field is required'),
          radio: yup.string().required('this field is required'),
          editor: yup.string().required('this field is required'),
        }),
      ),
    });

    const onSubmit = (value: any) => console.log(value);

    return (
      <FormProvider {...form}>
        <h1>Form Example</h1>
        <form
          style={{
            width: '500px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Form.Slider
            label='Label'
            required
            helperText='This is a helper text'
            name='slider'
            min={1}
            max={100}
            milestone={3}
          />
          <Form.Switch
            label='Label'
            helperText='This is a helper text'
            name='switch'
          />
          <Form.Search
            label='Label'
            required
            placeholder='Enter somethings...'
            helperText='This is a helper text'
            name='search'
          />
          <Form.Input
            label='Label'
            required
            placeholder='Enter somethings...'
            helperText='This is a helper text'
            allowClear
            name='text'
            type='password'
          />
          <Form.DatePicker
            label='Label'
            required
            placeholder='Enter somethings...'
            helperText='This is a helper text'
            allowClear
            name='date'
          />
          <Form.Select
            label='Label'
            required
            placeholder='Select somethings...'
            helperText='This is a helper text'
            allowClear
            name='select'
            options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'Yiminghe', label: 'yiminghe' },
            ]}
          />

          <Form.FileUploader
            label='Label'
            required
            helperText='This is a helper text'
            name='file'
            componentType={UPLOADER_ENUM.DRAG_AND_DROP}
            multiple
          />

          <Form.Radio
            label='Label'
            required
            helperText='This is a helper text'
            name='radio'
          >
            <Radio.Item value={'1'}>Radio 1</Radio.Item>
            <Radio.Item value={'2'}>Radio 2</Radio.Item>
            <Radio.Item value={'3'}>Radio 3</Radio.Item>
          </Form.Radio>

          <Form.CheckBox name='checkbox'>CheckBox</Form.CheckBox>
          <Form.Editor
            label='Label'
            required
            placeholder='Enter somethings...'
            name='editor'
          />
          <Button>Submit</Button>
        </form>
      </FormProvider>
    );
  },
};
