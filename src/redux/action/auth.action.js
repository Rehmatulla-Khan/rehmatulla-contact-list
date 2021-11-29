import firebase from "firebase/app";
import auth from "../../firebase";
import * as actionTypes from "../actionType";

export const login = () => async (dispatch) => {
  dispatch({
    type: actionTypes.LOGIN_REQUEST,
  });
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const response = await auth.signInWithPopup(provider);

    const profile = {
      user: response.additionalUserInfo.profile.name,
      email: response.additionalUserInfo.profile.email,
      accessToken: response.credential.accessToken,
      id: response.additionalUserInfo.profile.id,
    };

    sessionStorage.setItem("contact-app-access-token", profile.accessToken);
    sessionStorage.setItem("contact-app-user", JSON.stringify(profile));

    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: profile,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const logOut = () => async (dispatch) => {
  await auth.signOut();

  dispatch({
    type: actionTypes.LOG_OUT,
  });
  sessionStorage.removeItem("contact-app-access-token");
  sessionStorage.removeItem("contact-app-user");
};
