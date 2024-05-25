import React from 'react';
import { FileItem, UploadConfig } from './FileUploader';
import { StyledBrowseFileInput } from './styled';
import { Button } from '../Button';
import HelperText from '../Input/HelperText';
import { useTranslation } from 'react-i18next';
import ErrorMessage from '../Input/ErrorMessage';

interface Props extends UploadConfig {
  addToQueue: (file: FileItem) => void;
  error?: { message?: string };
}

const BrowseFileInput = ({ name, accept, helperText, addToQueue, error }: Props) => {
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

  const activateInput = () => {
    inputRef.current!.click();
  };

  return (
    <div>
      <StyledBrowseFileInput isError={Boolean(error?.message)}>
        <input
          ref={inputRef}
          type='file'
          id={name}
          accept={accept}
          multiple
          hidden
          onChange={handleFileChange}
        />
        {t('components.uploader.chooseFile')}
        <Button
          type='button'
          onClick={activateInput}
        >
          {t('components.uploader.browserFile')}
        </Button>
      </StyledBrowseFileInput>
      <HelperText>{helperText}</HelperText>
      <ErrorMessage>{error?.message}</ErrorMessage>
    </div>
  );
};

export default BrowseFileInput;
