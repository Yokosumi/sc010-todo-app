import { AppProvider } from './utils/AppContext'
import { TodoApp } from './TodoApp'

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
