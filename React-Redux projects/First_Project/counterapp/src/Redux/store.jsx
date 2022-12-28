import {createStore} from "redux";
import myRootReducer from "./reducer";


const myStore = createStore(myRootReducer);
export default myStore;