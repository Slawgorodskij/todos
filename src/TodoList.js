import { Link, Navigate } from "react-router-dom";

export default function TodoList(props){
    if(!props.currentUser){
        return <Navigate to="/login" replace />
    }
return (
    <section>
        <h1 className="title">Дела</h1>
        {props.list.map((item)=>(
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
                    onClick={(event)=>props.setDone(item.key)}
                    >&#9745;</button>

                    <button
                    className="button is-danger"
                    title="Удалить"
                    onClick={(event)=>props.delete(item.key)}
                    >&#9746;</button>
            
            </div>
        ))}
    </section>
)
}