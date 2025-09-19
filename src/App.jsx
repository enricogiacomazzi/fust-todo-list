import './App.css';
import {useState} from 'react';
import {clsx} from 'clsx';
import style from './App.module.css';
import { TodoList } from './components/TodoList';

const initialTodos = [
  {id: 1, text: 'fare la spesa', done: false },
  {id: 2, text: 'comprare il latte', done: false },
  {id: 3, text: 'andare a casa', done: true },
];


function myStyle(styles) {
  return styles.filter(s => s).join(' ');
}


const App = () => {
  let [todos, setTodos] = useState(initialTodos);

  function deleteTodo(todo) {
    setTodos(td => td.filter(t => t.id !== todo.id));
  }

  function toggleDone(todo) {
    setTodos(td => td.map(t => {
      if(t.id === todo.id) {
        t.done = !t.done;
      }
      return t;
    }));
  }

  return (
    <>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleDone={toggleDone} />
    </>

  )
}


export default App
