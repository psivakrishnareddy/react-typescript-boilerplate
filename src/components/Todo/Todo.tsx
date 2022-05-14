import { forwardRef, useContext, useImperativeHandle } from "react";
import Todos from "../../models/Todos";
import TodoItem from "./TodoItem/TodoItem";
import classes from "./Todo.module.css"
import { TodosContext } from "../../context/TodoContenxt";

// const Todo: React.FC<{items: Todos[];removeTodoItem: (id: string)=>void}> = (props) => {
const Todo: React.FC = () => {
    const todoCtx = useContext(TodosContext);

    return (
        <>
        <ul className={classes.todos}>
            {todoCtx.items.map((data: Todos) => (
                <TodoItem key={data.id} text={data.text} removeTodoItem={todoCtx.removeTodo.bind(null,data.id)}/>
            ))}
        </ul>
        </>
    )
}

export default Todo;