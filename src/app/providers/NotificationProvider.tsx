import { OPEN_NOTIFICATION_EVENT_NAME } from '@/shared/constants';
import { OpenNotificationEvent } from '@/shared/types/notification';
import { notification } from 'antd';
import React, { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

const NotificationProvider = ({ children }: Props) => {
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    // We use this approach to achieve the behavior:  outside component can call notification.open
    const handleOpenNotification = (event: CustomEvent<OpenNotificationEvent>) => {
      const { message, type, description, placement } = event.detail;
      api[type]({
        message,
        description,
        placement: placement || 'bottomLeft',
      });
    };

    window.addEventListener(OPEN_NOTIFICATION_EVENT_NAME as any, handleOpenNotification);

    return () => {
      window.removeEventListener(OPEN_NOTIFICATION_EVENT_NAME as any, handleOpenNotification);
    };
  }, []);

  return (
    <>
      {contextHolder}
      {children}
    </>
  );
};

export default NotificationProvider;
