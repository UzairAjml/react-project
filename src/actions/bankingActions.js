const deposit = (ammount) => {
  return {
    type: 'DEPOSITE',
    payload: parseInt(ammount),
  };
};
const withdraw = (ammount) => {
  return {
    type: 'WITHDRAW',
    payload: parseInt(ammount),
  };
};
const interest = (ammount) => {
  return {
    type: 'COLLECT_INTEREST',
  };
};
const del = () => {
  return {
    type: 'DELETE',
  };
};
const accType = () => {
  return {
    type: 'Acc_Type',
  };
};
const login = () => {
  return {
    type: 'LOGIN',
  };
};

export { deposit, withdraw, interest, del, accType, login };
