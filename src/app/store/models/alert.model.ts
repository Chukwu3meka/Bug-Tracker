export interface AlertModel {
  message?: string;
  status?: 'success' | 'error' | 'warning' | 'info';
  hidden?: boolean;
}
