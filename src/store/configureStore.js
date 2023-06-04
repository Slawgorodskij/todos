import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./todo/todoReducer"
import { userReducer } from "./user/userReducer";

const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunk));