import {clsx} from 'clsx';
import { MyButton } from './MyButton';


export const TodoListItem = ({todo, deleteTodo, toggleDone}) => {
    return (
        <li className={clsx('list-group-item', todo.done && 'done')}>
            <span>{todo.text}</span>
            <MyButton 
                icon="fa-trash" 
                btnStyle="btn-danger" 
                clickHandler={() => deleteTodo(todo)} 
            />
            <MyButton 
                icon={todo.done ? 'fa-times' : 'fa-check'} 
                btnStyle="btn-success" 
                clickHandler={() => toggleDone(todo)}  
            />
        </li>
    )
}