import { Container } from './components/Container'
import { Button } from './components/ui/button'
import { Input } from '@/components/ui/input'
import { TodoList } from './components/TodoList'
import { handlePost } from '../utils/FetchData'

export const TodoApp = () => {
    return (
        <>
            <Container className="justify-center" size="full" direction="row">
                <Container className="border-2" size="md">
                    <Container direction="row">
                        <Input className="text-secondary-foreground" />
                        <Button
                            onClick={() => handlePost}
                            variant={'secondary'}
                        >
                            Add Todo
                        </Button>
                    </Container>
                    <TodoList />
                </Container>
            </Container>
        </>
    )
}
