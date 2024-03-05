import { useContext } from 'react'
import { AppContext } from '../../utils/AppContext'
import { TodoItem } from './TodoItem'
import { Container } from './Container'

export const TodoList = () => {
    const { todoList } = useContext(AppContext)
    return (
        <>
            {todoList.map((todo) => (
                <Container
                    className="my-4 items-center rounded bg-slate-700"
                    direction="row"
                    key={todo._id}
                >
                    <TodoItem id={todo._id}>{todo.body}</TodoItem>
                </Container>
            ))}
        </>
    )
}
