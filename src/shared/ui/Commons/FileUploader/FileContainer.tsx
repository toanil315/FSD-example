import React, { useEffect } from 'react';
import { FileItem } from './FileUploader';
import { StyledFileContainer, StyledFileItem } from './styled';
import { Loading } from '../Loading';
import axios from 'axios';
import { CloseIcon } from '../../Icons';

interface Props {
  files: FileItem[];
  addFile: (fileLink: string, file: FileItem) => void;
  deleteFile: (fileLink: string) => void;
}

const FileContainer = ({ files, ...restProps }: Props) => {
  const renderFileItem = () => {
    return files.map((file) => (
      <FileItemEl
        key={file.name || file.url}
        file={file}
        {...restProps}
      />
    ));
  };

  return <StyledFileContainer>{renderFileItem()}</StyledFileContainer>;
};

const FileItemEl = ({ file, addFile, deleteFile }: { file: FileItem } & Omit<Props, 'files'>) => {
  useEffect(() => {
    if (file.needUpload) {
      axios
        .post(
          'https://api.escuelajs.co/api/v1/files/upload',
          {
            file: file.file,
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        )
        .then((res) => addFile(res.data.location, file));
    }
  }, [file]);

  return (
    <StyledFileItem>
      <p className='name'>{file.name || file.url}</p>
      <div>
        {file.loading ? (
          <Loading size='small' />
        ) : (
          <div
            className='close-action'
            onClick={() => deleteFile(file.url)}
          >
            <CloseIcon />
          </div>
        )}
      </div>
    </StyledFileItem>
  );
};

export default FileContainer;
