import { createStore, compose } from "redux";
import reducer from "../reducers";

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// check line 4

export default createStore(reducer, composer());
