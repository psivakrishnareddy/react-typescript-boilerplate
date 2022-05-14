import React, { useContext, useRef } from "react";
import { TodosContext } from "../../context/TodoContenxt";
import classes from "./NewToDo.module.css"

const NewToDos: React.FC =  () => {

    const todoInputRef = useRef<HTMLInputElement>(null);

    const todoCtx = useContext(TodosContext);

    const onSubmitHandler = (event: React.FormEvent) => {
        console.log(event);
        event.preventDefault();

        const enteredValue = todoInputRef.current!.value;

        if (enteredValue.trim().length === 0) {
            // throw new Error("This is Not Valid");
            return;
        } else {
            todoCtx.addTodo(enteredValue);
            todoInputRef.current!.value = "";
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className={classes.form}>
            <label htmlFor="todo-name">TO DO APP</label>
            <input type="text" name="todo-name" id="item-name" ref={todoInputRef} />
            <button type="submit">Add</button>
        </form>
    )
}

export default NewToDos;