import { createContext, useState } from 'react'
import { Todo, TodoList } from './types'

export type TodoContextType = {
    todoList: TodoList

    newTodo: Todo
}

type TodoProviderProps = {
    children: React.ReactNode
}

const TodoContext = createContext<TodoContextType>({} as TodoContextType)

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
    const [todoList, setTodoList] = useState<TodoList>([])
    const [newTodo, setNewTodo] = useState<Todo>({} as Todo)

    return (
        <TodoContext.Provider value={{ todoList, newTodo }}>
            {children}
        </TodoContext.Provider>
    )
}
