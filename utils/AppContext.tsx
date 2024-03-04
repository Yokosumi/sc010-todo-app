import { createContext, useState, useEffect } from 'react'
import { Todo, AppContextType } from './types'
import { fetchSingleEndpoint } from './api'
import axios from 'axios'

const URL = 'localhost:3075'

const todoContext: AppContextType = {
    todoList: [],
    setTodoList: () => {},
    newTodo: { _id: '', body: '', checked: false, badges: [''] },
    setNewTodo: () => {},
    handlePost: () => {},
}

type AppProviderProps = {
    children: React.ReactNode
}

export const AppContext = createContext<AppContextType>(todoContext)

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [todoList, setTodoList] = useState<Todo[]>([] as Todo[])
    const [newTodo, setNewTodo] = useState<Todo>({} as Todo)

    const handlePost = async (value: string) => {
        try {
            const newTodo = {
                body: value,
                checked: false,
                badges: [''],
            }

            const response = await axios.post(`http://${URL}/todos`, newTodo, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
            })
            if (response.status === 201) {
                setTodoList((prev) => [...prev, response.data])
            }
        } catch (e: any) {
            throw new Error(e)
        }
    }

    useEffect(() => {
        fetchSingleEndpoint('todos').then((data) => setTodoList(data))
    }, [])

    const contextValue: AppContextType = {
        todoList,
        setTodoList,
        newTodo,
        setNewTodo,
        handlePost,
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}
