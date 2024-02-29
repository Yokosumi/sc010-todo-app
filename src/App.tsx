import { AppProvider } from '../utils/AppContext'
import { Container } from './components/Container'
import { Button } from './components/ui/button'
import { Input } from '@/components/ui/input'
import { TodoList } from './components/TodoList'
import { FlexBucket } from './components/FlexBucket'

function App() {
    return (
        <>
            <AppProvider>
                <Container>
                    <FlexBucket className="flex-col">
                        <FlexBucket className="border-none">
                            <Input className="text-secondary-foreground" />{' '}
                            <Button variant={'secondary'}>Add Todo</Button>
                        </FlexBucket>
                        <TodoList />
                    </FlexBucket>
                </Container>
            </AppProvider>
        </>
    )
}

export default App
