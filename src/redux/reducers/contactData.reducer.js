import * as actionTypes from "../actionType";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const contactDataReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.GET_CONTACT_START:
      return {
        ...prevState,
        loading: true,
      };
    case actionTypes.GET_CONTACT_SUCCESS:
      return {
        ...prevState,
        data: payload,
        loading: false,
      };
    case actionTypes.GET_CONTACT_FAILED:
      return {
        ...prevState,
        error: payload,
        loading: false,
      };

    default:
      return prevState;
  }
};
