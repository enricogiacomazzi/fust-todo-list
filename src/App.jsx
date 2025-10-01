import './App.css';
import {useState, useRef} from 'react';
import {clsx} from 'clsx';
import style from './App.module.css';
import { Formik } from 'formik';
import { MyInput } from './components/MyInput';


const App = () => {

  const onSub = (values) => {
    console.log('sub', values);
  }

  return (
    <Formik 
      initialValues={{firstname: 'Mario', lastname: ''}}
      onSubmit={onSub}
      validate={values => {
        const errors = {};

        if(!values.firstname || values.firstname?.length < 3) {
          errors.firstname = 'firstname required';
        }

        if(!values.lastname) {
          errors.lastname = 'lastname required';
        }

        return errors;

      }}

    >
      {({values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,}) => (
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="firstname"
              className={clsx([
              'form-control', 
              touched.firstname && errors.firstname && 'is-invalid',
              touched.firstname && !errors.firstname && 'is-valid'
              ])} 
              onChange={handleChange} 
              onBlur={handleBlur} 
              value={values.firstname}
            ></input>
            <input 
              type="text" 
              name="lastname" 
              className={clsx([
              'form-control', 
              touched.lastname && errors.lastname && 'is-invalid',
              touched.lastname && !errors.lastname && 'is-valid'
              ])} 
              onChange={handleChange} 
              onBlur={handleBlur} 
              value={values.lastname}
            ></input>
            <br/>
            <input type="submit" value="invia"></input>
            <br/>
            <pre>{errors.firstname}</pre>
          </form>
      )}
    </Formik>
  )
}


export default App
