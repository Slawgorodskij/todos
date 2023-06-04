import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {addTodoAction, deleteTodoAction, doneTodoAction} from "../store/todo/todoAction";
import {todoSelector} from "../store/todo/todoSelector";
import {del, getList, setDoneApi} from "../services/api";
import {firebaseDb} from "../services/firebase";
import {useEffect} from "react";
import {loginSuccess} from "../store/user/userAction";

export const TodoHome = () => {
    const dispatch = useDispatch();
    const todos = useSelector(todoSelector);
    const user = useSelector(state => state.user.currentUser);

    const setDone = async (key) => {
        const newTodos = todos.slice()
        const newDeed = newTodos.find((current) => current.key === key);

        if (newDeed) {
            newDeed.done = true
        }
        await setDoneApi(user, key);
        dispatch(doneTodoAction(newTodos));
    }

    const deleteTodo = async (key) => {
        await del(user, key)
        dispatch(deleteTodoAction(key));
    }

    useEffect(() => {
        const authStateChanged = async (user) => {
            dispatch(loginSuccess(user))
            if (user && todos.length === 0) {
                const newData = await getList(user);
                newData.map(data => dispatch(addTodoAction(data)))
            }
        }
        onAuthStateChanged(getAuth(firebaseDb), authStateChanged);
    }, [])

    return (
        <section>
            <h1 className="title">Дела</h1>
            {todos.map((item) => (
                <div
                    key={item.key}
                    className="box columns is-mobile">
                    <div className="column is-for-fifths">
                        <Link to={`/${item.newKey}`}>
                            {item.done && <del>{item.title}</del>}
                            {!item.done && item.title}
                        </Link>
                    </div>
                    <button
                        className="button is-success mr-5"
                        title="Пометить как сделаное"
                        disabled={item.done}
                        onClick={() => setDone(item.key)}>
                        &#9745;
                    </button>
                    <button
                        className="button is-danger"
                        title="Удалить"
                        onClick={() => deleteTodo(item.key)}>
                        &#9746;
                    </button>
                </div>
            ))}
        </section>
    );
}