import {clsx} from 'clsx';
import { MyButton } from './MyButton';

function render() {
    console.log('render');
    return '';
}

export const TodoListItem = ({todo, deleteTodo, toggleDone}) => {

    console.log('prova', todo.id);

    return (
        <li className={clsx('list-group-item', todo.done && 'done')}>
            {render()}
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