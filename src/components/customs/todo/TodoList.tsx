import { useAppContext } from '@/lib/contexts/AppContext'
import { TodoItem } from '@/components/customs/todo/TodoItem'
import { Container } from '@/components/customs/container'
import { EditMode } from '@/components/customs/editmode'

export const TodoList = () => {
    const { todoList, editMode, editIndex } = useAppContext()
    return (
        <>
            {todoList.map((todo, index) => (
                <Container
                    className="my-4 place-items-center  rounded border-2 bg-slate-700"
                    direction="row"
                    key={index}
                >
                    {editMode && editIndex === index ? (
                        <EditMode id={todo._id} body={todo.body} />
                    ) : (
                        <TodoItem id={todo._id} index={index}>
                            {todo.body}
                        </TodoItem>
                    )}
                </Container>
            ))}
        </>
    )
}
