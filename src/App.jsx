import './App.css';
import {useState} from 'react';
import {clsx} from 'clsx';
import style from './App.module.css';
import { TodoList } from './components/TodoList';
import { TodoListItem } from './components/TodoListItem';
import {produce} from 'immer';
import { Card } from './components/Card';

const initialTodos = [
  {id: 1, text: 'fare la spesa', done: false },
  {id: 2, text: 'comprare il latte', done: false },
  {id: 3, text: 'andare a casa', done: true },
];

const App = () => {
  let [todos, setTodos] = useState(initialTodos);

  function deleteTodo(todo) {
    // setTodos(td => td.filter(t => t.id !== todo.id));
    setTodos(td => produce(td, draft => {
      const index = draft.findIndex(t => t.id === todo.id);
      draft.splice(index, 1);
    }));
  }

  function toggleDone(todo) {
    // const index = todos.findIndex(t => t.id === todo.id);
    // todos[index].done = !todos[index].done;
    // setTodos(structuredClone(todos));
    // setTodos(td => [...td]);

    setTodos(td => produce(td, draft => {
      const tmp = draft.find(t => t.id === todo.id);
      tmp.done = !tmp.done;
    }));

    // setTodos(td => td.map(t => t.id === todo.id ? {...t, done: !t.done} : t))

    // setTodos(td => td.map(t => {
    //   if(t.id === todo.id) {
    //     t.done = !t.done;
    //   }
    //   return t;
    // }));
  }


  function tmp() {
    const obj = {
      firstname: 'mario',
      lastname: 'rossi',
      age: 33,
      height: 1.6,
      hairColor: 'blonde',
      eyeColor: 'blue',
      enabled: true
    };

    const obj2 = {...obj};

    delete obj2.height;

    // const {height, ...obj2} = obj;

    console.log(obj2);

    // tmp2(obj);
  }


  function tmp2(value) {
    const {firstname, lastname, enabled} = value;
    console.log('a', firstname);
    console.log('b', lastname);
    console.log('c', enabled);
  }


  return (
    <>
      {/* <button className="btn btn-primary" onClick={tmp}>ciao</button>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleDone={toggleDone} /> */}
      <Card title="Apelle">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </Card>
      <Card title="Figlio">
        <ul>
          <li>ciao1</li>
          <li>ciao2</li>
          <li>ciao3</li>
          <li>ciao4</li>
          <li>ciao5</li>
        </ul>
      </Card>
      <Card title="Di" />
    </>

  )
}


export default App
