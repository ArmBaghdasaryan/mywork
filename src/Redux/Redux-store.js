import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import RegistReducer from "../Reducer/RegistrReducer";


let Rootreducers = combineReducers({
    RegistrPage: RegistReducer
});
let store = createStore(Rootreducers, applyMiddleware(thunkMiddleware))
window.store = store;
export default store;
