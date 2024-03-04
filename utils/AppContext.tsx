import { createContext, useState, useEffect } from 'react'
import { Todo, AppContextType } from './types'
import { fetchSingleEndpoint } from './FetchData'
import axios from 'axios'

const todoContext: AppContextType = {
    todoList: [],
    setTodoList: () => {},
    newTodo: { _id: '', body: '', checked: false, badges: [''] },
    setNewTodo: () => {},
}

type AppProviderProps = {
    children: React.ReactNode
}

export const AppContext = createContext<AppContextType>(todoContext)

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [todoList, setTodoList] = useState<Todo[]>([] as Todo[])
    const [newTodo, setNewTodo] = useState<Todo>({} as Todo)

    useEffect(() => {
        fetchSingleEndpoint('todos').then((data) => setTodoList(data))
    }, [])

    const contextValue: AppContextType = {
        todoList,
        setTodoList,
        newTodo,
        setNewTodo,
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}
