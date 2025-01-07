const users = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          token: action.payload.token,
          user: action.payload.user
        };
        case "GET_USER_INFO":
            return{
                ...state,
                user: action.payload,
            }
      default:
        return state;
    }
  };
  export default users;