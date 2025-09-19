import {TodoListItem} from './TodoListItem';



export const TodoList = ({todos, deleteTodo, toggleDone}) => {
    return (
        <ul className="list-group lista">
        {todos.map(t => 
            <TodoListItem key={t.id} todo={t} deleteTodo={deleteTodo} toggleDone={toggleDone} />
        )}
        </ul>
    )
}