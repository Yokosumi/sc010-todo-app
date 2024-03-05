import { useContext } from 'react'
import { AppContext } from '../../utils/AppContext'
import { TodoItem } from './TodoItem'

export const TodoList = () => {
    const { todoList } = useContext(AppContext)
    return (
        <>
            {todoList.map((todo) => (
                <>
                    <TodoItem key={todo._id}>{todo.body}</TodoItem>
                </>
            ))}
        </>
    )
}
