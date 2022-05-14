import { useEffect, useRef, useState } from 'react';
import './App.css';
import NewToDos from './components/NewToDos/NewToDos';
import Todo from './components/Todo/Todo';
import TodoContextProvider from './context/TodoContenxt';
import Todos from './models/Todos';

function App() {

  // let data = [new Todos("item 1"), new Todos('item 2'), new Todos('item 3')]
  // let [todoList, settodoList] = useState<Todos[]>([]);

  // const addTodoitem = (itemName: string) =>{
  //   console.log("EMITTED s");
  //     // todoList = [...todoList, new Todos(itemName)];
  //     settodoList((prevtodoList)=>{
  //       return prevtodoList.concat(new Todos(itemName))
  //     })
  // }

  // const removeTodoItemHandler = (todoId: string) => {
  //   settodoList(prevtodoList => {
  //     return prevtodoList.filter((data) => data.id !==todoId )
  //   })
  // }
  // //Clean up
  // useEffect(()=>{
  //   return () => {
  //     settodoList([])
  //   }
  // },[]);
  return (
    <div className="App">
      <TodoContextProvider>
        <NewToDos/>
        <Todo />
        </TodoContextProvider>
        {/* <NewToDos addItem={addTodoitem} ></NewToDos>
        <Todo items={todoList} removeTodoItem={(todoId: string) => {removeTodoItemHandler(todoId)}}/> */}
    </div>
  );
}

export default App;
