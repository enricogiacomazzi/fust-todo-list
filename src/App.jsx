import './App.css';
import {useState, useRef} from 'react';
import {clsx} from 'clsx';
import style from './App.module.css';
import { useForm } from "react-hook-form"
import { MyInput } from './components/MyInput';


const App = () => {
  const frm = useForm();
  const {register, watch, handleSubmit, formState: {errors, dirtyFields}} = frm;

  const inputCls = (field) => {
    console.log(errors[field]);
    return !!errors[field] ? 'invalid' : '';
  }

  const onSubmit = (data) => {
    console.log('ciao', data);
  }

  console.log(watch('firstname'));

  return (
    <>
      <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
        <MyInput label="Nome" inputName="firstname" form={frm} registerProps={{required: true}} />
        <MyInput label="Cognome" inputName="lastname" form={frm} registerProps={{required: true, minLength: 5}} />
        <MyInput label="Username" inputName="username" form={frm} registerProps={{required: true, pattern: /^@\w+$/}}/>
        
        <br />
        <input className="btn btn-primary" type="submit" value="Send" />
        <br/>
      </form>
    </>

  )
}


export default App
