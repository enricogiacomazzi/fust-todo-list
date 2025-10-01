import './App.css';
import {useState, useRef} from 'react';
import {clsx} from 'clsx';
import style from './App.module.css';
import { useForm } from "react-hook-form"


const App = () => {
  const {register, handleSubmit, formState: {errors}} = useForm();

  const inputCls = (field) => {
    console.log(errors[field]);
    return !!errors[field] ? 'invalid' : '';
  }

  const onSubmit = (data) => {
    console.log('ciao', data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className={inputCls('firstname')} type="text" {...register('firstname', {required: true})}></input>
        <input className={inputCls('lastname')} type="text" {...register('lastname', {required: true, minLength: 4})}></input>
        <input className={inputCls('username')} type="text" {...register('username', {required: true, pattern: /^@\w+$/})}></input>
        <input className={inputCls('height')} type="text" {...register('height', {required: true, valueAsNumber: true, min: 0})}></input>
        <br />
        <input type="submit" value="Send" />
        <br/>
      </form>
    </>

  )
}


export default App
