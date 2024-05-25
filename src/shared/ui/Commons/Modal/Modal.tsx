import { ModalProps } from 'antd';
import React from 'react';
import { StyledAntdModal } from './styled';
import { useModal } from '@/shared/hooks';

interface Props extends ModalProps {
  modal: ReturnType<typeof useModal>;
  children: React.ReactNode;
  onOk?: () => void;
  onCancel?: () => void;
}

const Modal = ({ modal, children, onOk, onCancel, ...restProps }: Props) => {
  const handleOk = () => {
    onOk && onOk();
  };

  const handleClose = () => {
    onCancel && onCancel();
    modal.hide();
  };

  return (
    <StyledAntdModal
      title='Basic Modal'
      open={modal.isOpen}
      onOk={handleOk}
      onCancel={handleClose}
      {...restProps}
      destroyOnClose
    >
      {children}
    </StyledAntdModal>
  );
};

export default Modal;
