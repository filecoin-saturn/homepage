import CustomProse from "../CustomProse/CustomProse"


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
                        <div className='flex flex-col'>
                            <div className={`${backdropBlur ? ` supports-blur:backdrop-blur-md supports-blur:bg-sat-blue-3 supports-blur:outline-sat-blue-3/30 bg-sat-blue-3-30-fallback-1` : ` bg-sat-blue-3-30-fallback-1`}  outline-4 outline  rounded-full min-w-[1.2rem] min-h-[1.2rem] `}/>
                            {i === array.length - 1 ? null : (
                                <div className={`${backdropBlur ? `supports-blur:backdrop-blur-md supports-blur:border-r-sat-blue-3/30` : `border-r-sat-blue-3-30-fallback-1`} flex-grow my-1 w-1 opacity-30 border-r-2 ml-[0.4rem]`}/>
                            )}
                        </div>
                        <div className='px-4 mb-8 -mt-4 md:flex-none max-w-lg'>
                                {child}
                        </div>
                    </div>
                )
            })}
        </>
    )
}