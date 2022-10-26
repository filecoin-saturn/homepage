

type Props = {
    children: React.ReactNode[]
    backdropBlur?: boolean
}

export default function ListBigDots({children, backdropBlur}: Props) {
    return (
        <>
            {children.map((child, i, array) => {
                return (
                    <div key={i} className='flex space-x-1 md:space-x-3'>
                        <div className='flex flex-col items-center -mt-[0.1875rem] md:-mt-0.5 lg:mt-0.5'>
                            <div className={`${backdropBlur ? ` supports-blur:backdrop-blur-md supports-blur:ring-sat-blue-3/30` : ``} ring-sat-blue-3-30-fallback-1 bg-sat-blue-3 ring-4 rounded-full min-w-[1.2rem] min-h-[1.2rem] `}/>
                            {i === array.length - 1 ? null : (
                                <div className={`${backdropBlur ? `supports-blur:backdrop-blur-md supports-blur:bg-sat-blue-3/30` : ``} bg-sat-blue-3-30-fallback-1 flex-grow my-2 w-0.5`}/>
                            )}
                        </div>
                        <div className='pl-[0.54875rem] mb-[1.375rem] md:mb-8 -mt-4 md:flex-none md:pl-[0.8125rem] max-w-lg lg:max-w-md xl:max-w-lg'>
                            {child}
                        </div>
                    </div>
                )
            })}
        </>
    )
}