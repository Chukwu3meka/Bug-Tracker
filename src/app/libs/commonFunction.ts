export const setLocalStorage = (value: any): void => {
  localStorage.setItem('profile', JSON.stringify(value));
};

// export const getLocalStorage = (key: string, localStorage: Storage) => {
//   const data = localStorage.getItem(key);

//   return JSON.parse(data || '');
// };
export const getLocalStorage = () => {
  const data = localStorage.getItem('profile');
  return JSON.parse(data || '');
};
// JSON.parse(localStorage.getItem('profile') || '');

// export const setLocalStorage = (key: string, value: any): void => {};
