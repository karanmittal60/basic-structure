import {combineReducers} from "redux";



{
    visibilityFilter: 'SHOW_ALL',
        todos: [
        {
            text: 'Consider using Redux',
            completed: true
        },
        {
            text: 'Keep all state in a single tree',
            completed: false
        }
    ]
}


const reducers =  combineReducers({

});

export default reducers;