import * as actionTypes from "../actionType";

const initialState = {
  data: [],
  loading: false,
  contactDetails: {},
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

    case actionTypes.NO_CONTACTS_IN_DATABASE:
      return {
        ...prevState,
        loading: false,
        data: [],
      };

    case actionTypes.GET_CONTACT_FAILED:
      return {
        ...prevState,
        error: payload,
        loading: false,
      };

    case actionTypes.ADD_CONTACT_START:
      return {
        ...prevState,
        // data: prevState.data,
        // error: prevState.error,
        // loading: prevState.loading,
        loading: true,
      };

    case actionTypes.ADD_CONTACT_SUCCESS:
      return {
        ...prevState,
        loading: false,
        contactDetails: payload,
      };

    case actionTypes.ADD_CONTACT_FAILED:
      return {
        ...prevState,
        error: payload,
      };

    case actionTypes.EDIT_CONTACT_START:
      return {
        ...prevState,
      };

    case actionTypes.EDIT_CONTACT_SUCCESS:
      return {
        ...prevState,
      };

    case actionTypes.EDIT_CONTACT_FAILED:
      return {
        ...prevState,
        error: payload,
      };

    case actionTypes.DELETE_CONTACT_START:
      return {
        ...prevState,
      };

    case actionTypes.DELETE_CONTACT_SUCCESS:
      return {
        ...prevState,
      };

    case actionTypes.DELETE_CONTACT_FAILED:
      return {
        ...prevState,
        error: payload,
      };

    default:
      return prevState;
  }
};
