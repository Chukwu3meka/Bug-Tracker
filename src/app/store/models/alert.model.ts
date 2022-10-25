export interface AlertModel {
  message?: string;
  status?: 'success' | 'error' | 'warning' | 'normal';
  hidden: boolean;
}
