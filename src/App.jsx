import './App.css';
import {useState, useReducer} from 'react';
// import {Fragment} from 'react';

// function reducer(state, action) {
//   switch(action) {
//     case 'meno':
//       return state - 1;
//     case 'più':
//       return state + 1;

//   }
// }


const App = () => {
  // const [count, countDispach] = useReducer(reducer, 42);
  const [count, setCount] = useState(42);

  function minus() {
    // countDispach('meno');
    setCount(c => c - 1);
  }

  function plus() {
    // countDispach('più');
    setCount(count + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={minus}>-</button>
      <button onClick={plus}>+</button>
    </>

  )
}


export default App
