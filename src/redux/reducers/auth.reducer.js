import * as actionTypes from "../actionType";

const sessionData = JSON.parse(sessionStorage.getItem("contact-app-user"));

const initialState = {
  accessToken: sessionStorage.getItem("contact-app-access-token"),
  userName: sessionData ? sessionData.user : null,
  id: sessionData ? sessionData.id : null,
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
        id: payload.id,
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
