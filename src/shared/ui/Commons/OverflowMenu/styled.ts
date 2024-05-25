import styled from '@emotion/styled';
import { Dropdown } from 'antd';

export const StyledDropdown = styled(Dropdown)`
  &.ant-dropdown-trigger {
    margin: -5px;
    padding: 5px;
    border-radius: ${({ theme }) => theme.radii.medium};

    &:hover {
      background-color: ${({ theme }) => theme.colors.grey_5};
    }
  }
`;

export const StyledPanel = styled.div`
  &&& {
    .ant-dropdown-menu {
      box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
      border-radius: ${({ theme }) => theme.radii.medium};
      min-width: 160px;
    }

    .ant-dropdown-menu-item {
      padding: 10px 16px;
      color: ${({ theme }) => theme.colors.grey_12};

      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      &:hover {
        background-color: ${({ theme }) => theme.colors.grey_4};
      }

      &.ant-dropdown-menu-item-disabled {
        color: ${({ theme }) => theme.colors.grey_7};
        svg {
          fill: ${({ theme }) => theme.colors.grey_7};
        }
      }
    }
  }
`;
