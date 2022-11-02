export const validator = (switchExpression, value) => {
  try {
    switch (switchExpression) {
      case 'bug-title': {
        value = `${value}`; // <= this will convert value to string
        if (value.length >= 150)
          throw { message: 'Bug Title cannot be longer than 150 characters' };
        if (value.length <= 3)
          throw { message: 'Bug Title cannot be less than 3 characters' };

        const reg = /^[a-zA-Z0-9\ \']+$/;

        const status = reg.test(value) === true;

        if (status !== true)
          throw { message: 'Bug Title should only have Letters and Numbers' };

        return value;
      }
      default: {
        throw { message: 'Invalid Input' };
      }
    }
  } catch (error: any) {
    // console.log(error);

    throw { message: error?.message || 'Invalid Input' };
  }
};
