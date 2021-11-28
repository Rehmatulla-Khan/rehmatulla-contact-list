import axios from "axios";
import * as actionTypes from "../actionType";

export const getContact = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_CONTACT_START,
    });
    const { data } = await axios.get(
      `https://rehmatulla-contact-app-default-rtdb.firebaseio.com/contacts/114297794016620175137.json`
    );

    const contacts = Object.keys(data).map((item) => data[item]);

    dispatch({
      type: actionTypes.GET_CONTACT_SUCCESS,
      payload: contacts,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CONTACT_FAILED,
      payload: error,
    });
  }
};
