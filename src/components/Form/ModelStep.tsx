import { ReactNode } from "react"

type ModelStepProps = {
    title: string,
    children: ReactNode
}

export function ModelStep({ title, children}: ModelStepProps) {
    return (
        <div className="sm:px-32">
            <h2 className="text-center m-0 mb-8 text-2xl">{title}</h2>
            <div className="flex w-full flex-col items-center gap-4">{children}</div>
        </div>
    )
}