const initState = {
  isDark: 'light',
};

const modeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DARKMODE':
      return { ...state, isDark: action.payload };

    default:
      return state;
  }
};

export { modeReducer };
