import { Container } from '../container'
import { Button } from '../../ui/button'
import { Input } from '@/components/ui/input'
import { TodoList } from './TodoList'
import { useInput } from '@/lib/tools/hooks'
import { useAppContext } from '@/lib/contexts/AppContext'

export const TodoApp = () => {
    const { handlePost } = useAppContext()
    const [inputState, handleInputChange, handleInputReset] = useInput('')

    return (
        <>
            <Container className="justify-center" size="full" direction="row">
                <Container className="border-2" size="md">
                    <Container direction="row">
                        <Input
                            className="text-secondary-foreground"
                            value={inputState}
                            onChange={handleInputChange}
                        />
                        <Button
                            onClick={() => {
                                handlePost(inputState)
                                handleInputReset()
                            }}
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
