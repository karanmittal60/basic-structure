import {combineReducers} from "redux";
import incrementReducer from "../container/dashboard/reducer";


const rootReducers =  combineReducers({
    dashboardReducer: incrementReducer
});

export default rootReducers;