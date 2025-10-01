import {clsx} from 'clsx';
import {useId} from 'react';


export const MyInput = ({label, inputName, form, registerProps}) => {
    const {register, formState: {dirtyFields, errors}} = form;
    const id = useId();

    return (
        <div className="col-md-4">
          <label htmlFor={id} className="form-label">{label}</label>
          <input
            id={id}
            className={clsx([
              'form-control', 
              dirtyFields[inputName] && errors[inputName] && 'is-invalid',
              dirtyFields[inputName] && !errors[inputName] && 'is-valid'
            ])} 
            type="text" 
            {...register(inputName, registerProps)}
          ></input>
          <div className="invalid-feedback">
            Errore
          </div>
        </div>

    )
}