import styled from '@emotion/styled';
import { Slider } from 'antd';

export const StyledSliderWrapper = styled.div``;
export const StyledSlider = styled(Slider)<{ showMilesStoneValue?: boolean }>`
  position: relative;
  width: calc(100% - 60px);
  margin: 0 auto;

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: ${({ theme }) => theme.fontSizes.body};
    color: ${({ theme }) => theme.colors.black};
  }

  &::before {
    content: '${({ min }) => min}';
    left: -30px;
  }

  &::after {
    content: '${({ max }) => max}';
    right: -30px;
  }

  .ant-slider-track {
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary_6};
  }

  .ant-slider-step {
    height: 2px;
  }

  .ant-slider-rail {
    height: 2px;
  }

  .ant-slider-handle {
    &::after {
      background-color: ${({ theme }) => theme.colors.primary_6};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary_6};
    }
  }

  .ant-slider-mark-text {
    display: ${({ showMilesStoneValue }) => (showMilesStoneValue ? 'inline-block' : 'none')};
  }

  .ant-slider-dot {
    width: 2px !important;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.grey_6};
    border-radius: 0;
    inset-block-start: -6px;
    border: none !important;

    &.ant-slider-dot-active {
      background-color: ${({ theme }) => theme.colors.primary_6};
    }
  }

  &.ant-slider-disabled {
    .ant-slider-dot {
      background-color: ${({ theme }) => theme.colors.grey_6} !important;
    }
  }
`;
