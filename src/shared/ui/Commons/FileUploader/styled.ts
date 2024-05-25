import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  isError?: boolean;
}

export const StyledFileUploaderWrapper = styled.div`
  width: 100%;

  .container {
    display: flex;
    flex-flow: column nowrap;
    gap: 16px;
  }
`;

export const StyledBrowseFileInput = styled.div<Props>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  font-size: ${({ theme }) => theme.fontSizes.body};
  line-height: ${({ theme }) => theme.lineHeights.body};
  color: ${({ theme }) => theme.colors.grey_7};
  padding-left: 12px;

  border: 2px solid ${({ theme }) => theme.colors.grey_5};
  border-right: none;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: ${({ theme }) => theme.radii.medium};

  ${({ isError, theme }) =>
    isError &&
    css`
      border-color: ${theme.colors.red_6} !important;
    `}
`;

export const StyledBrowseFileArea = styled.div<Props>`
  width: 100%;

  .area {
    padding: 32px;
    border: 2px dashed ${({ theme }) => theme.colors.grey_7};
    border-radius: ${({ theme }) => theme.radii.medium};

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 16px;

    cursor: pointer;

    .instruction {
      font-size: ${({ theme }) => theme.fontSizes.body};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      line-height: ${({ theme }) => theme.lineHeights.body};
      color: ${({ theme }) => theme.colors.grey_8};
    }

    & > span {
      margin-top: 0;
    }

    ${({ isError, theme }) =>
      isError &&
      css`
        border-color: ${theme.colors.red_6} !important;
      `}
  }
`;

export const StyledDndFile = styled(StyledBrowseFileArea)<{ isDragEnter?: boolean }>`
  position: relative;

  .area {
    transition: all 0.2s linear;

    ${({ isDragEnter, theme }) =>
      isDragEnter &&
      css`
        border-color: ${theme.colors.primary_6};
        border-style: solid;
        background-color: ${theme.colors.primary_1};
      `}
  }

  input {
    display: block;
    opacity: 0;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .area {
    cursor: default;

    .link {
      color: ${({ theme }) => theme.colors.primary_6};
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const StyledFileContainer = styled.div`
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  gap: 12px;
`;

export const StyledFileItem = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey_4};

  padding: 14px 12px 14px 16px;

  border: 1px solid ${({ theme }) => theme.colors.grey_5};
  border-radius: ${({ theme }) => theme.radii.medium};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  .name {
    font-size: ${({ theme }) => theme.fontSizes.body};
    line-height: ${({ theme }) => theme.lineHeights.body};
    color: ${({ theme }) => theme.colors.grey_12};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .close-action {
    padding: 4px;
    cursor: pointer;
  }
`;
