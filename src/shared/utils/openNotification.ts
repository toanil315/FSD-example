import { OPEN_NOTIFICATION_EVENT_NAME } from '../constants';
import { OpenNotificationEvent } from '../types/notification';

export const openNotification = (event: OpenNotificationEvent) => {
  window.dispatchEvent(new CustomEvent(OPEN_NOTIFICATION_EVENT_NAME, { detail: event }));
};
