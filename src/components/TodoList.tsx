import { useAppContext } from '@/utils/AppContext'
import { TodoItem } from './TodoItem'
import { Container } from './ui/Container'

export const TodoList = () => {
    const { todoList } = useAppContext()
    return (
        <>
            {todoList.map((todo) => (
                <Container
                    className="my-4 place-items-center  rounded border-2 bg-slate-700"
                    direction="row"
                    key={todo._id}
                >
                    <TodoItem id={todo._id}>{todo.body}</TodoItem>
                </Container>
            ))}
        </>
    )
}
