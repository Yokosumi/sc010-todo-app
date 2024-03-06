import { createContext, useState, useEffect } from 'react'
import { Todo, EditMode } from './types'
import { fetchSingleEndpoint } from './api'
import axios from 'axios'

const URL = 'localhost:3075'

// * The AppContextType is a type that defines the shape of the context object.
export type AppContextType = {
    todoList: Todo[]
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
    handlePost: (value: string) => void
    handleDelete: (_id: string) => void
    editMode: boolean
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>
    handleEditMode: () => void
}

//* The todoContext object is the default value of the context object.
const todoContext: AppContextType = {
    todoList: [] as Todo[],
    setTodoList: () => {},
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

    // * The contextValue object is the value of the context object.
    const contextValue: AppContextType = {
        todoList,
        setTodoList,
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
