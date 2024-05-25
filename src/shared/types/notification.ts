export interface OpenNotificationEvent {
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
  description?: string;
  placement?: 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight';
}
