import './App.css';
import {useState, useRef} from 'react';
import {clsx} from 'clsx';
import style from './App.module.css';


const validators = {
    firstname: value => value.length > 0,
    lastname: value => value.length > 3,
    username: value => value.length > 0 && value.startsWith('@')
}


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

  function formHandler(e) {
    const value = e.target.value;
    const field = e.target.name;
    setFormValue(f => ({...f, [field]: value}));
    setFormTouched(f => ({...f, [field]: true}));

    const validator = validators[field];
    setFormValid(f => ({...f, [field]: validator(value)}));
  }

  const inputCls = (field) => {
    return (!formValid[field] && formTouched[field]) ? 'invalid' : '';
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input name="firstname" className={inputCls('firstname')} type="text" value={formValue.firstname} onChange={formHandler}></input>
        <input name="lastname" className={inputCls('lastname')} type="text" value={formValue.lastname} onChange={formHandler}></input>
        <input name="username" className={inputCls('username')} type="text" value={formValue.username} onChange={formHandler}></input>
        <br />
        <input type="submit" value="Send" />
        <br/>
        <pre>{JSON.stringify(formTouched)}</pre>
      </form>
    </>

  )
}


export default App
