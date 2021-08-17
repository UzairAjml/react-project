const initState = {
  balance: 0,
  isType: false,
};

const bankReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DEPOSITE':
      return { ...state, balance: state.balance + action.payload };

    case 'WITHDRAW':
      return { ...state, balance: state.balance - action.payload };
    case 'COLLECT_INTEREST':
      return { ...state, balance: state.balance * 1.03 };
    case 'DELETE':
      return { ...state, balance: 0 };

    case 'Acc_Type':
      return { ...state, isType: !state.isType };

    default:
      return state;
  }
};

export { bankReducer };
