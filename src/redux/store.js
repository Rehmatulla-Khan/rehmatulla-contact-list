import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/auth.reducer";
import { contactDataReducer } from "./reducers/contactData.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  contactData: contactDataReducer,
});

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
