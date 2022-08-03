type Props = {
    children: React.ReactNode
    backdropBlur: boolean
}

export default function Modal3({children, backdropBlur}: Props) {
    return (
        <div className={`rounded-[1.625rem] md:rounded-[1.75rem]  pl-6 flex items-center justify-between pr-2 py-2 space-x-4 bg-sat-white-10-fallback-2 ${backdropBlur ? "supports-blur:backdrop-blur-md supports-blur:bg-white supports-blur:bg-opacity-10" : ""}`}>
            {children}
        </div>
    )
}