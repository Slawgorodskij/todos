import * as types from "./todoTypes";

export const addTodoAction = (dataDeed) => ({
    type: types.ADD_TODO,
    payload: dataDeed,
});

export const doneTodoAction = (dataDeed) => ({
    type: types.DONE,
    payload: dataDeed,
});

export const deleteTodoAction = (key) => ({
    type: types.DELETE_TODO,
    payload: key,
});