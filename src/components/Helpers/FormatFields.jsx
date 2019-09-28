/* eslint-disable import/prefer-default-export */


const toCurrency = (number) => {
  const formatter = new Intl.NumberFormat('pt', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatter.format(number);
};

export {
  toCurrency,
};
