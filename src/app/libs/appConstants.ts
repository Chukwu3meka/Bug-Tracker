export const colors = {
  primary: '#ad2723',
  secondary: '#a8a8a8;',

  open: '#64242c',
  closed: '#54a593',
  pending: '#eaa649',

  high: '#800000',
  normal: '#CD5C5C',
  low: '#FFA07A',
};

// export const localApiUrl = 'http://localhost:5000';
export const localApiUrl = 'http://10.128.32.201:4201';
export const publicApiUrl = 'http://10.128.32.14:8080/api/v1';

export const apiDelay: number = 200;

export const basicAuth: { data: string } = {
  data: '',
};

export const authenticationHeader: { email: string; password: string } = {
  email: '',
  password: '',
};

// export const authDetails: { email: string; password: string } = {
//   email: '',
//   password: '',
// };
