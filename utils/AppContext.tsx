import { createContext, useState, useEffect } from 'react'
import { Todo, EditMode, AppContextType } from './types'
import { fetchSingleEndpoint } from './api'
import axios from 'axios'

const URL = 'localhost:3075'

const todoContext: AppContextType = {
    todoList: [],
    setTodoList: () => {},
    newTodo: { _id: '', body: '', checked: false, badges: [''] },
    setNewTodo: () => {},
    editMode: false,
    setEditMode: () => {},
    handlePost: () => {},
    handleDelete: (_id: string) => {},
    handleEditMode: () => {},
}

type AppProviderProps = {
    children: React.ReactNode
}

export const AppContext = createContext<AppContextType>(todoContext)

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [todoList, setTodoList] = useState<Todo[]>([] as Todo[])
    const [newTodo, setNewTodo] = useState<Todo>({} as Todo)
    const [editMode, setEditMode] = useState<EditMode>(true)

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

    const handleEditMode = () => {
        setEditMode(!editMode)
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
        editMode,
        setEditMode,
        handleEditMode,
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}
