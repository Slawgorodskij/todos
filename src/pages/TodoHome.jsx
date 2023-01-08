import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodoAction, doneTodoAction } from "../store/todoAction";
import { todoSelector } from "../store/todoSelector";

export const TodoHome = () => {
    const dispatch = useDispatch();
    const todos = useSelector(todoSelector);

    const setDone = (key) =>{
        const newDeed = todos.find( (current) => current.key === key);     

        if(newDeed){       
          newDeed.done=true
        }

        dispatch(doneTodoAction(todos));
    }

    const deleteTodo = ( key ) => {
       dispatch(deleteTodoAction(key));
    }

    return (
        <section>
            <h1 className="title">Дела</h1>
            {todos.map((item)=>(
                <div 
                    key={item.key} 
                    className="box columns is-mobile">
                    <div className="column is-for-fifths">
                        <Link to={`/${item.key}`}>
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