import {TodoListItem} from './TodoListItem';



export const TodoList = ({todos, ...rest}) => {
    return (
        <ul className="list-group lista">
            {todos.map(t => 
                <TodoListItem key={t.id} todo={t} {...rest} />
            )}
        </ul>
    )
}