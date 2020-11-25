import thunk from "redux-thunk";
import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "redux/reducers";

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
