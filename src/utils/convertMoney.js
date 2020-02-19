const convertMoney = (value) => {
  const formatter  = new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL',
  });
  return formatter.format(value);
}

export default convertMoney;