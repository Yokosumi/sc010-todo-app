type props = {
    children: React.ReactNode
}

export const Container = ({ children }: props) => {
    return (
        <div className="bg-secondary-foreground text-primary-foreground min-h-screen flex flex-col items-center justify-center">
            {children}
        </div>
    )
}
