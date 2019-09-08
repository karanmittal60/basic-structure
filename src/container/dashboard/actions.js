import {ADD_TODO, ONE_MINUS, ONE_PLUS} from "./constants";


export function onePlus(number) {
    return {
        type: ONE_PLUS,
        payload: number
    }
};

export function oneMinus(number) {
    return {
        type: ONE_MINUS,
        payload: number
    }
};

export function addToList(text) {
    return {
        type: ADD_TODO,
        payload: text
    }
}