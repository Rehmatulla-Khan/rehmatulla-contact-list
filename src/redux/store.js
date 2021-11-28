import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/auth.reducer";
import { contactDataReducer } from "./action/contactData.action";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  contactData: contactDataReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
