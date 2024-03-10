import { AppProvider } from './utils/AppContext'
import { TodoApp } from './components/customs/todo/TodoApp'

function App() {
    return (
        <>
            <AppProvider>
                <TodoApp />
            </AppProvider>
        </>
    )
}

export default App
