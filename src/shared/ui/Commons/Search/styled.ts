import styled from '@emotion/styled';

interface Props {
  multiple?: boolean;
}

export const StyledSearch = styled.div<Props>`
  .ant-select-arrow {
    inset-inline-end: unset;
    inset-inline-start: 14px;
  }

  .ant-select-selector {
    height: ${({ multiple }) => (multiple ? 'max-content !important' : 'unset')};
    padding-left: 36px !important;
  }

  .ant-select-selection-search {
    inset-inline-start: ${({ multiple }) => (multiple ? '' : '36px !important')};
  }

  .ant-select-selection-placeholder {
    padding-left: 28px !important;
  }
`;
