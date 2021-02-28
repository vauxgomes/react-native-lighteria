export const currencyFormatter = (value) => {
  return 'R$ ' + value.toFixed(2).replace('.', ',');
};
