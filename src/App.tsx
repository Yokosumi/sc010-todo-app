import { AppProvider } from '../utils/AppContext'
import { Container } from './components/Container'
import { Button } from './components/ui/button'
import { Input } from '@/components/ui/input'
import { TodoList } from './components/TodoList'

function App() {
    return (
        <>
            <AppProvider>
                <Container
                    className="justify-center"
                    size="full"
                    direction="row"
                >
                    <Container className="border-2" size="md">
                        <Container direction="row">
                            <Input className="text-secondary-foreground" />
                            <Button variant={'secondary'}>Add Todo</Button>
                        </Container>
                        <TodoList />
                    </Container>
                </Container>
            </AppProvider>
        </>
    )
}

export default App
