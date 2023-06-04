import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { todoSelector } from "../store/todo/todoSelector";

export const TodoDetail = () => {
    const {key} = useParams();
    const todos = useSelector(todoSelector);
    
    const deed = todos.find((obj)=>obj.key=== +key);
   
    if(!deed){
        return <Navigate to="/error" />;
    }
    
    return (
        <section>
            {deed.done && 
                <p className="has-text-success">
                    Выполнено
                </p>}
            <h1>{deed.title}</h1>
            <p>{deed.createdAt}</p>
            {deed.desc && <p>{deed.desc}</p>}
            {deed.image && <div><img src={deed.image} alt="Иллюстрация"/></div>}
        </section>
    );
}