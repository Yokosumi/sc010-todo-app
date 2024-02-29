import React from 'react'
import { twMerge } from 'tailwind-merge'

type FlexBucketProps = React.HTMLAttributes<HTMLDivElement>

export const FlexBucket = ({ className, children }: FlexBucketProps) => {
    return (
        <>
            <div
                className={twMerge('flex gap-4 border-2 w-fit p-4', className)}
            >
                {children}
            </div>
        </>
    )
}
