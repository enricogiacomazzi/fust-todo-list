import './App.css';
import {useState, useRef} from 'react';
import {clsx} from 'clsx';
import style from './App.module.css';



const App = () => {
  const [formValue, setFormValue] = useState({
    firstname: '',
    lastname: '',
    username: ''
  });
  const [formValid, setFormValid] = useState({
    firstname: false,
    lastname: false,
    username: false
  });

  const [formTouched, setFormTouched] = useState({
    firstname: false,
    lastname: false,
    username: false
  });


  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formValue);
  }

  const inputChangeHandler = (e) => {
    const val = e.target.value.replace(/\D/g, '');
    setText(val);
    // console.log('change', val);
  }


  function formHandler(e) {
    const value = e.target.value;
    const field = e.target.name;
    setFormValue(f => ({...f, [field]: value}));
  }


  return (
    <>
      <form onSubmit={submitHandler}>
        <input name="firstname" className={(!formValid.firstname && formTouched.firstname) ? 'invalid' : ''} type="text" value={formValue.firstname} onChange={formHandler}></input>
        <input name="lastname" type="text" value={formValue.lastname} onChange={formHandler}></input>
        <input name="username" type="text" value={formValue.username} onChange={formHandler}></input>
        <br />
        <input type="submit" value="Send" />
      </form>
    </>

  )
}


export default App
