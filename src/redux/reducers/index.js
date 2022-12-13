import { combineReducers } from "redux";
import paybekReducers from "./paybekReducers";

const rootReducer = combineReducers({
    paybek: paybekReducers,
})

export default rootReducer;