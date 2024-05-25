import React from 'react';
import { FileItem, UploadConfig } from './FileUploader';
import { StyledBrowseFileArea } from './styled';
import HelperText from '../Input/HelperText';
import { useTranslation } from 'react-i18next';
import ErrorMessage from '../Input/ErrorMessage';
import { UploadIcon } from '../../Icons';

interface Props extends UploadConfig {
  addToQueue: (file: FileItem) => void;
  error?: { message?: string };
}

const BrowseFileArea = ({ name, accept, helperText, addToQueue, error }: Props) => {
  const { t } = useTranslation();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileItem: FileItem = {
        name: file.name,
        loading: true,
        needUpload: true,
        url: URL.createObjectURL(file),
        file,
      };
      // if (maxSize && file.size > maxSize) {
      //   fileItem.error = t('components.uploader.fileTooLarge', { maxSize });
      // }
      addToQueue(fileItem);
    }
    inputRef.current!.value = '';
  };

  return (
    <div>
      <StyledBrowseFileArea isError={Boolean(error?.message)}>
        <input
          ref={inputRef}
          type='file'
          id={name}
          accept={accept}
          multiple
          hidden
          onChange={handleFileChange}
        />
        <label
          htmlFor={name}
          className='area'
        >
          <UploadIcon />
          <p className='instruction'>{t('components.uploader.browserFile')}</p>
          <HelperText>{helperText}</HelperText>
        </label>
      </StyledBrowseFileArea>
      <ErrorMessage>{error?.message}</ErrorMessage>
    </div>
  );
};

export default BrowseFileArea;
