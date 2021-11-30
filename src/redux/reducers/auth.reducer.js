import * as actionTypes from "../actionType";

const sessionData = JSON.parse(sessionStorage.getItem("contact-app-user"));

const initialState = {
  accessToken: sessionStorage.getItem("contact-app-access-token"),
  loading: false,
  userName: sessionData ? sessionData.user : null,
  id: sessionData ? sessionData.id : null,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case actionTypes.LOGIN_SUCCESS:
      return {
        ...prevState,
        accessToken: payload.accessToken,
        user: payload.user,
        email: payload.email,
        id: payload.id,
        loading: false,
      };

    case actionTypes.LOGIN_FAIL:
      return {
        ...prevState,
        accessToken: null,
        user: null,
        email: null,
        error: action.payload,
        loading: false,
      };

    case actionTypes.LOG_OUT:
      return {
        ...prevState,
        accessToken: null,
      };

    default:
      return prevState;
  }
};
