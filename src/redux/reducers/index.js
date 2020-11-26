import { combineReducers } from "redux";
import { authReducer } from "redux/reducers/auth.reducer";
import { alertReducer } from "redux/reducers/alert.reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  // http: httpReduser,
});
