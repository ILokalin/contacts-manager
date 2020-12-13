import { alertReducer } from "./alert.reducer";
import { authReducer } from "./auth.reducer";
import { combineReducers } from "redux";
import { contactReducer } from "./contactReducer";
import { httpReducer } from "./http.reducer";

export const rootReducer = combineReducers({
  alert: alertReducer,
  auth: authReducer,
  contact: contactReducer,
  http: httpReducer,
});
