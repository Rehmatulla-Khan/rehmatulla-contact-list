import axios from "axios";
import * as actionTypes from "../actionType";

export const getContact = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_CONTACT_START,
    });

    const { data } = await axios.get(
      `https://rehmatulla-contact-app-default-rtdb.firebaseio.com/contacts/${id}.json`
    );

    if (!data) {
      dispatch({
        type: actionTypes.NO_CONTACTS_IN_DATABASE,
      });
      return;
    }
    const contacts = Object.keys(data).map((item) => ({
      ...data[item],
      contactId: item,
    }));

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

export const addContact = (userId, formData, imgURL) => async (dispatch) => {
  dispatch({
    type: actionTypes.ADD_CONTACT_START,
  });

  const contactDetails = { ...formData, imgURL };

  await axios.post(
    `https://rehmatulla-contact-app-default-rtdb.firebaseio.com/contacts/${userId}.json`,
    {
      ...contactDetails,
    }
  );

  try {
    dispatch({
      type: actionTypes.ADD_CONTACT_SUCCESS,
      payload: contactDetails,
    });
    dispatch(getContact(userId));
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CONTACT_FAILED,
      payload: error.message,
    });
  }
};

export const deleteContact = (userId, contactId) => async (dispatch) => {
  dispatch({
    type: actionTypes.DELETE_CONTACT_START,
  });

  try {
    await axios.delete(
      `https://rehmatulla-contact-app-default-rtdb.firebaseio.com/contacts/${userId}/${contactId}.json`
    );

    dispatch({
      type: actionTypes.DELETE_CONTACT_SUCCESS,
    });

    await dispatch(getContact(userId));
  } catch (error) {
    dispatch({
      type: actionTypes.DELETE_CONTACT_FAILED,
      payload: error.message,
    });
  }
};

export const editContact =
  (userId, contactId, contactUpdateInfo, imgURL) => async (dispatch) => {
    dispatch({
      type: actionTypes.EDIT_CONTACT_START,
    });

    try {
      await axios.put(
        `https://rehmatulla-contact-app-default-rtdb.firebaseio.com/contacts/${userId}/${contactId}.json`,
        {
          ...contactUpdateInfo,
          imgURL,
        }
      );

      dispatch({
        type: actionTypes.EDIT_CONTACT_SUCCESS,
      });

      await dispatch(getContact(userId));
    } catch (error) {
      dispatch({
        type: actionTypes.EDIT_CONTACT_FAILED,
        payload: error.message,
      });
    }
  };
