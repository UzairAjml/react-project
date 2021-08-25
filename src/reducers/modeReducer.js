const initState = {
  isDark: 'light',
};

const modeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DARKMODE':
      //  const mode=window.localStorage.getItem('mode');

      return { ...state, isDark: action.payload };

    default:
      return state;
  }
};

export { modeReducer };
