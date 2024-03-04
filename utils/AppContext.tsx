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
    handleDelete: (_id: string) => {},
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

    const handleDelete = async (id: string) => {
        try {
            const response = await axios.delete(`http://${URL}/todos/${id}`)
            if (response.status === 200) {
                setTodoList((prev) => prev.filter((todo) => todo._id !== id))
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
        handleDelete,
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}
