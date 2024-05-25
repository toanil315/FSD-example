import { theme } from '@/shared/styles';
import ReactQuill from 'react-quill';
import styled, { css } from 'styled-components';

export const StyledEditor = styled(ReactQuill)<{ error?: boolean }>`
  .ql-toolbar {
    border-top-left-radius: ${theme.radii.medium};
    border-top-right-radius: ${theme.radii.medium};
  }

  .ql-container {
    border-bottom-left-radius: ${theme.radii.medium};
    border-bottom-right-radius: ${theme.radii.medium};

    .ql-editor {
      min-height: 150px;
    }
  }

  ${({ error }) =>
    error &&
    css`
      .ql-toolbar {
        border-color: ${theme.colors.red_6} !important;
      }

      .ql-container {
        border-color: ${theme.colors.red_6} !important;
        box-shadow: 0 5px 10px ${theme.colors.red_6}40 !important;
      }
    `}
`;
