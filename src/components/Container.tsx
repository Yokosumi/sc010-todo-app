import { cn } from '@/lib/utils'

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode
    direction?: 'row' | 'col'
    size?: 'sm' | 'md' | 'lg' | 'full'
}

const flexDirection: Record<'row' | 'col', string> = {
    row: 'flex gap-4',
    col: 'flex-col gap-4',
}

const sizeVariants: Record<'sm' | 'md' | 'lg' | 'full', string> = {
    sm: 'w-40 p-4',
    md: 'max-w-xl px-4 py-2',
    lg: 'max-w-2xl px-10 py-8',
    full: 'w-full h-screen',
}

export const Container: React.FC<ContainerProps> = ({
    className,
    children,
    direction,
    size,
}) => {
    const flexVariant = direction ? flexDirection[direction] : ''
    const sizeVariant = size ? sizeVariants[size] : ''

    return (
        <div
            className={cn(
                'w-full bg-secondary-foreground p-4 text-primary-foreground',
                className,
                flexVariant,
                sizeVariant
            )}
        >
            {children}
        </div>
    )
}
