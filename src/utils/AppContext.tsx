import { createContext, useState, useEffect, useContext } from 'react'
import { Todo, EditMode } from './types'
import { fetchSingleEndpoint } from './api'
import axios from 'axios'

const URL = 'localhost:3075'

// * The AppContextType is a type that defines the shape of the context object.
type AppContextType = {
    todoList: Todo[]
    editMode: boolean
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>
    handlePost: (value: string) => void
    handleDelete: (_id: string) => void
    handleEditMode: () => void
}

//* The todoContext object is the default value of the context object.
const todoContext: AppContextType = {
    todoList: [] as Todo[],
    editMode: false,
    setTodoList: () => {},
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
    const [editMode, setEditMode] = useState<EditMode>(false)

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
        editMode,
        setTodoList,
        setEditMode,
        handlePost,
        handleDelete,
        handleEditMode,
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

// * custom hook for using the AppContext
export const useAppContext = () => {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider')
    }
    return context
}
