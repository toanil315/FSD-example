import React, { useEffect } from 'react';
import { StyledFileUploaderWrapper } from './styled';
import Label from '../Input/Label';
import DndFile from './DndFile';
import BrowseFileInput from './BrowseFileInput';
import BrowseFileArea from './BrowseFileArea';
import FileContainer from './FileContainer';
import { ACTION_ENUM } from '@/shared/constants';

export enum UPLOADER_ENUM {
  DRAG_AND_DROP = 'DRAG_AND_DROP',
  BROWSE_INPUT = 'BROWSE_INPUT',
  BROWSE_AREA = 'BROWSE_AREA',
}

export interface UploadConfig {
  accept?: string;
  maxSize?: number;
  helperText?: string;
  name: string;
}

export interface FileItem {
  url: string;
  name?: string;
  loading?: boolean;
  needUpload?: boolean;
  file?: File;
}

export interface FileUploaderProps extends UploadConfig {
  componentType?: UPLOADER_ENUM;
  label?: string;
  required?: boolean;
  error?: { message?: string };
  onChange?: (value: string | string[] | undefined, action?: ACTION_ENUM) => void;
  value?: string | string[];
  multiple?: boolean;
}

const FileUploader = ({
  multiple = false,
  label,
  required = false,
  onChange,
  componentType = UPLOADER_ENUM.BROWSE_AREA,
  value,
  ...restProps
}: FileUploaderProps) => {
  const [files, setFiles] = React.useState<FileItem[]>([]);

  useEffect(() => {
    if (Array.isArray(value)) {
      let uploadedLinks: FileItem[] = [];
      uploadedLinks = value.map((url) => ({ url, loading: false }));
      setFiles((prev) => [...uploadedLinks, ...prev.filter((file) => !value.includes(file.url))]);
    }

    if (typeof value === 'string') {
      const uploadedLink = { url: value, loading: false };
      setFiles([uploadedLink]);
    }
  }, [value, multiple]);

  const addToQueue = (file: FileItem) => {
    if (multiple) {
      return setFiles((prev) => [...prev, file]);
    }
    setFiles([file]);
  };

  const addFile = (fileLink: string, tempFile: FileItem) => {
    if (multiple) {
      const newValues = value ? [...value, fileLink] : [fileLink];
      onChange && onChange(newValues, ACTION_ENUM.CREATE);
    } else {
      onChange && onChange(fileLink);
    }
    setFiles((prev) => prev.filter((file) => file.name !== tempFile.name));
    URL.revokeObjectURL(tempFile.url);
  };

  const deleteFile = (fileLink: string) => {
    if (multiple) {
      const newValues = (value as string[]).filter((file) => file !== fileLink);
      onChange && onChange(newValues, ACTION_ENUM.DELETE);
    } else {
      onChange && onChange(undefined);
    }
    setFiles((prev) => prev.filter((file) => file.url !== fileLink));
  };

  return (
    <>
      <StyledFileUploaderWrapper>
        <Label
          label={label}
          required={required}
        />
        <div className='container'>
          <UploaderFactory
            type={componentType}
            addToQueue={addToQueue}
            {...restProps}
          />
          <FileContainer
            files={files}
            addFile={addFile}
            deleteFile={deleteFile}
          />
        </div>
      </StyledFileUploaderWrapper>
    </>
  );
};

interface UploaderFactoryProps extends UploadConfig {
  type: UPLOADER_ENUM;
  addToQueue: (file: FileItem) => void;
}

const UploaderFactory = ({ type, ...restProps }: UploaderFactoryProps) => {
  switch (type) {
    case UPLOADER_ENUM.DRAG_AND_DROP:
      return <DndFile {...restProps} />;
    case UPLOADER_ENUM.BROWSE_INPUT:
      return <BrowseFileInput {...restProps} />;
    case UPLOADER_ENUM.BROWSE_AREA:
      return <BrowseFileArea {...restProps} />;
    default:
      return <BrowseFileInput {...restProps} />;
  }
};

export default FileUploader;
