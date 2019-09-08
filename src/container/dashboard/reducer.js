import {ADD_TODO, ONE_MINUS, ONE_PLUS} from "./constants";

const initialState = {
    number: 1,
    todo: []
};

function incrementReducer(state= initialState, action) {
    switch (action.type) {
        case ONE_PLUS:
            return {
                ...state,
                number: action.payload+1
            };
        case ONE_MINUS:
            return {
                ...state,
                number: action.payload-1
            };
        case ADD_TODO:
            return {
                ...state,
                todo: [
                    ...state.todo,
                    {
                        text: action.payload
                    }
                ]
            }
        default:
            return state;
    }
}

export default incrementReducer;