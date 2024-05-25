import React from 'react';
import 'react-quill/dist/quill.snow.css';
import { StyledEditor } from './styled';
import { FieldError } from 'react-hook-form';
import Label from '../Input/Label';
import ErrorMessage from '../Input/ErrorMessage';

export interface EditorProps {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent) => void;
  value?: string;
  error?: FieldError;
}
const Editor = ({ label, required, error, onChange, ...editorProps }: EditorProps) => {
  const isEditorEmpty = (value: string) => {
    return value === '<p><br></p>';
  };

  const handleEditorChange = (content: string) => {
    const event = {
      target: {
        name: editorProps.name,
        value: isEditorEmpty(content) ? '' : content,
      },
    };
    onChange(event as unknown as React.ChangeEvent);
  };

  return (
    <div>
      <Label
        htmlFor={editorProps.name}
        required={required}
        label={label}
      />
      <StyledEditor
        error={Boolean(error?.message)}
        {...editorProps}
        onChange={handleEditorChange}
      />
      {error?.message && <ErrorMessage>{error.message}</ErrorMessage>}
    </div>
  );
};

export default Editor;
