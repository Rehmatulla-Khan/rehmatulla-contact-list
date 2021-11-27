import * as actionTypes from "../actionType";

const initialState = {
  accessToken: sessionStorage.getItem("contact-app-access-token"),
  user: sessionStorage.getItem("contact-app-user")
    ? JSON.parse(sessionStorage.getItem("contact-app-user"))
    : null,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...prevState,
        accessToken: payload.accessToken,
        user: payload.user,
        email: payload.email,
      };

    case actionTypes.LOGIN_FAIL:
      return {
        ...prevState,
        accessToken: null,
        user: null,
        email: null,
        error: action.payload,
      };

    case actionTypes.LOG_OUT:
      return {
        ...prevState,
        accessToken: null,
      };

    default:
      return initialState;
  }
};
