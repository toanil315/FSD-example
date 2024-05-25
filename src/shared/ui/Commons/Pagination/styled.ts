import styled from '@emotion/styled';
import { Pagination } from 'antd';

export const StyledPaginationWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    gap: 10px;
  }
`;
export const StyledPagination = styled(Pagination)`
  &.ant-pagination {
    display: flex;
  }

  .ant-pagination-item {
    width: 32px;
    height: 32px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({ theme }) => theme.radii.small};
    border: 1px solid ${({ theme }) => theme.colors.grey_5};

    font-size: ${({ theme }) => theme.fontSizes.small};

    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.grey_12};

    &.ant-pagination-item-active {
      background-color: ${({ theme }) => theme.colors.primary_6};
      border-color: ${({ theme }) => theme.colors.primary_6};

      a {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    .ant-pagination-item-link {
      border-radius: ${({ theme }) => theme.radii.small};
      background-color: ${({ theme }) => theme.colors.white};
      border-color: ${({ theme }) => theme.colors.grey_5};
    }
  }

  .ant-pagination-disabled {
    .ant-pagination-item-link {
      background-color: transparent;
      border-color: transparent;
    }
  }
`;

export const StyledLimitWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 8px;

  & > span {
    white-space: nowrap;
    font-size: ${({ theme }) => theme.fontSizes.body};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    color: ${({ theme }) => theme.colors.grey_12};
  }

  & > div {
    flex: 0;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;

    & > span {
      &:last-child {
        display: none;
      }
    }
  }
`;
