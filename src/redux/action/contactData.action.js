import axios from "axios";
import * as actionTypes from "../actionType";

export const contactDataReducer = (contactData, id) => async (dispatch) => {
  try {
    const contactDetails = {
      firstName: contactData.firstName,
      lastName: contactData.lastName,
      contact: contactData.contact,
      email: contactData.email,
      status: contactData.status,
    };

    await axios.post(
      `https://rehmatulla-contact-app-default-rtdb.firebaseio.com/contacts/${id}.json`,
      {
        ...contactDetails,
      }
    );

    const response = await axios.get(
      `https://rehmatulla-contact-app-default-rtdb.firebaseio.com/contacts/${id}.json`
    );

    const keys = Object.keys(response.data);
    const contactInfo = keys.map((key) => ({ ...response.data[key], id: key }));

    console.log(contactInfo);

    dispatch({
      type: actionTypes.POST_DATA,
      payload: contactDetails,
    });

    dispatch({
      type: actionTypes.GET_DATA,
      payload: contactInfo,
    });
  } catch (error) {
    console.log(error);
  }
};
