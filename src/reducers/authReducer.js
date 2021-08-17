const initialState = {
  islogin: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, islogin: !state.islogin };
    default:
      return state;
  }
};

export default authReducer;
