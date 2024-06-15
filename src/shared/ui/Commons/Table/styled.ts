import styled from '@emotion/styled';
import { Table } from 'antd';

export const StyledTable = styled(Table)`
  .ant-pagination {
    display: none;
  }
  .ant-table {
    background: transparent;
  }
  .ant-table-thead > tr th {
    background-color: ${({ theme }) => theme.colors.grey_4};
    padding: 14px 16px;
    &.ant-table-cell {
      &:hover {
        background-color: ${({ theme }) => theme.colors.grey_5};
      }
    }
  }
  .ant-table-tbody > tr > td {
    padding: 14px 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey_5};
  }
  .ant-table-container table > thead > tr:first-of-type > *:first-of-type {
    border-start-start-radius: ${({ theme }) => theme.radii.medium};
    border-end-start-radius: ${({ theme }) => theme.radii.medium};
  }
  .ant-table-container table > thead > tr:last-child > *:last-child {
    border-start-end-radius: ${({ theme }) => theme.radii.medium};
    border-end-end-radius: ${({ theme }) => theme.radii.medium};
  }
`;

export const StyledSortAndFilterWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
  .sort {
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    border-radius: ${({ theme }) => theme.radii.medium};
    border: 1px solid ${({ theme }) => theme.colors.grey_6};
    cursor: pointer;
  }
`;

export const StyledList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 12px;
`;

export const StyledTableRecordCard = styled.div`
  width: 100%;
  padding: 10px 16px;
  border-radius: ${({ theme }) => theme.radii.medium};
  border: 1px solid ${({ theme }) => theme.colors.grey_4};
  background-color: white;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0px 0px 6px 0px rgba(0, 0, 0, 0.05);
  .row {
    padding: 10px 4px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey_3};
    font-size: ${({ theme }) => theme.fontSizes.body};
    line-height: ${({ theme }) => theme.lineHeights.body};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    .label {
      font-weight: ${({ theme }) => theme.fontWeights.bold};
    }
  }
`;
