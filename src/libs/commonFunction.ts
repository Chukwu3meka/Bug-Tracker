export const setLocalStorage = (key: string, value: any): void => {};

export const getLocalProfile = (key: string, localStorage: Storage) => {
  const data = localStorage.getItem(key);

  // const a  =JSON.parse(data||"")
  //   console.log(a);
  //   console.log(data?.name);
  //   // return JSON.parse(data);
  //   return data;
  return JSON.parse(data || '');
};
