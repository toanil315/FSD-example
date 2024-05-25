import React from 'react';
import { StyledSteps } from './styled';
import { StepsProps } from 'antd';
import { useSteps } from '@/shared/hooks';

interface Props extends StepsProps {
  stepsInstance: ReturnType<typeof useSteps>;
}

const Steps = ({ stepsInstance, ...restProps }: Props) => {
  const { current, status } = stepsInstance;

  return (
    <StyledSteps
      status={status}
      current={current}
      {...restProps}
    />
  );
};

export default Steps;
