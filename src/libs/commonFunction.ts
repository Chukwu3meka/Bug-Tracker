export const setLocalStorage = (key: string, value: any): void => {};

export const getLocalProfile = (key: string, localStorage: Storage) => {
  const data = localStorage.getItem(key);

  return JSON.parse(data || '');
};
