const initState = {
  isDark: false,
};

const modeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DARKMODE':
      return { ...state, isDark: state.isDark };

    default:
      return state;
  }
};

export { modeReducer };
