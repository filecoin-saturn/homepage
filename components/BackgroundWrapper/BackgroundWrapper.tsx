type Props = {
    children: React.ReactNode
    backdropBlur: boolean
    color: "10" | "20"
}

export default function BackgroundWrapper({children, backdropBlur, color}: Props) {
    
    if(color === "10") { 
    return (
        <div className={` -mx-3 md:-mx-3 px-5 py-1 xs:px-5 md:px-8 xs:py-1 xs:pb-2 md:py-3 lg:py-2 lg:pb-3 rounded-[0.9375rem] md:rounded-[0.9375rem] ${backdropBlur ? ` supports-blur:bg-sat-grad-blue-green-1-10 supports-blur:backdrop-blur-md supports-blur:bg-opacity-100 bg-sat-grad-blue-green-1-10-fallback-2 bg-opacity-50 ` : `bg-sat-grad-blue-green-1-10-fallback-2 bg-opacity-50`}`}>
            {children}
        </div>
    )}
    else if(color === "20"){
        return (
            <div className={`group-focus-visible:outline-white outline-transparent outline-2 outline -mx-3 md:-mx-6 px-4 py-2 xs:px-5 md:px-6 md:py-0.5 rounded-3xl md:rounded-3xl ${backdropBlur ? ` supports-blur:bg-sat-grad-blue-green-1-20 supports-blur:hover:bg-sat-grad-blue-green-1-30  supports-blur:backdrop-blur-md bg-sat-grad-blue-green-1-20-fallback-1 hover:bg-sat-grad-blue-green-1-30-fallback-1 ` : `bg-sat-grad-blue-green-1-20-fallback-1 hover:bg-sat-grad-blue-green-1-30-fallback-1`}`}>
            {children}
        </div>
        )
    }
    else 
    return (
        <div>
            {children}
        </div>
    )
}