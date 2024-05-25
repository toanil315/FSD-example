import { Controller, useFormContext } from 'react-hook-form';
import Editor, { EditorProps } from '../Commons/Editor/Editor';

const RHFEditor = (props: Omit<EditorProps, 'onChange'> & { name: string }) => {
  const { control } = useFormContext();

  return (
    <Controller
      render={({ field, fieldState }) => (
        <Editor
          error={fieldState.error}
          {...props}
          {...field}
        />
      )}
      name={props.name || ''}
      control={control}
    />
  );
};

export default RHFEditor;
