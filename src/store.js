
import rootReducers from "./reducers/index";
import { createStore } from 'redux'
const store=createStore(rootReducers);
export default store;