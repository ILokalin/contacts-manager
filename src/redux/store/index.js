import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "redux/reducers";

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
