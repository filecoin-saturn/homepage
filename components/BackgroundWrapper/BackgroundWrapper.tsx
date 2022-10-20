type Props = {
    children: React.ReactNode
    backdropBlur: boolean
}

export default function BackgroundWrapper({children, backdropBlur}: Props) {
    return (
        <div className={` -mx-3 md:-mx-6 px-3 py-2 xs:px-5 md:px-8 md:py-4 rounded-2xl md:rounded-3xl ${backdropBlur ? ` supports-blur:bg-sat-grad-blue-green-1-10 supports-blur:backdrop-blur-md bg-sat-grad-blue-green-1-10-fallback-1 ` : `bg-sat-grad-blue-green-1-10-fallback-1`}`}>
            {children}
        </div>
    )
}