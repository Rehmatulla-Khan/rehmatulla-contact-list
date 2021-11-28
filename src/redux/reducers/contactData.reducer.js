import * as actionTypes from "../actionType";

const initialState = {
  data: null,
};

export const postDataReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.POST_DATA:
      return {
        ...prevState,
      };
    case actionTypes.GET_DATA:
      return {
        ...prevState,
        data: payload,
      };

    default:
      return prevState;
  }
};
