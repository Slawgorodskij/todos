import * as types from "./todoTypes";

// const date1 = new Date(2022, 10, 22, 15, 30);
// const date2 = new Date(2022, 10, 22, 16, 50);
const initialState = {
    todos: [
        // {
        //     title: 'Изучить React',
        //     desc: 'Да поскорее!',
        //     image: '',
        //     done: true,
        //     createdAt: date1.toLocaleString(),
        //     key: date1.getTime(),
        // },
        // {
        //     title: 'Написать первое React-приложение',
        //     desc: 'Список запланированных дел',
        //     image: '',
        //     done: false,
        //     createdAt: date2.toLocaleString(),
        //     key: date2.getTime(),
        // },
    ]
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case types.DONE:
            return {
                ...state,
                todos: action.payload,
            }
        case types.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(obj => obj.key !== action.payload)
            }
        default:
            return state;
    }
}