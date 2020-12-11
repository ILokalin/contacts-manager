import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { alertReducer } from "./alert.reducer";
import { httpReducer } from "./http.reducer";
import { contactReducer } from "./contactReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  http: httpReducer,
  contact: contactReducer,
});
