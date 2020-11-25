import { combineReducers } from "redux";
import { alertReducer } from "redux/reducers/alert.reducer";

export const rootReducer = combineReducers({
  // auth: authReducer,
  alert: alertReducer,
  // http: httpReduser,
});
