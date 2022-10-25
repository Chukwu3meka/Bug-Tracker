export const setLocalStorage = (value: any): void => {
  localStorage.setItem('profile', JSON.stringify(value));
};

export const getLocalStorage = () => {
  const data = localStorage.getItem('profile');

  return data ? JSON.parse(data || '') : null;
};

export const removeLocalStorage = () => {
  localStorage.removeItem('profile');
};

export const handleHttpError = ({ appAlert, err, message }) => {
  // console.log(err);

  // appAlert({ message: 'dfdsfdsf', status: 'error' });
  appAlert({ message: message || err.message, status: 'error' });

  return 'error occur';
};

export const httpOptions = ({ HttpHeaders }) => ({
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // Authorization:
    //   'Basic ' + btoa('donaldwisdomnengi@gmail.com:Cassillas1nengi!'),
  }),
});
