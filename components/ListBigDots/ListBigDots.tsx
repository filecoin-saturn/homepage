type Props = {
    children: React.ReactNode[]
}

export default function ListBigDots({children}: Props) {
    return (
        <>
            {children.map((child, i, array) => {
                return (
                    <div key={i} className='flex space-x-1 md:space-x-3'>
                        <div className='flex flex-col'>
                            <div className='bg-sat-blue-1 outline-2 outline outline-regular-blue/30 rounded-full min-w-[1.2rem] min-h-[1.2rem] '/>
                            {i === array.length - 1 ? null : (
                                <div className='flex-grow my-1 w-1 border-r-sat-blue-1 opacity-30 border-r-[2px] ml-[0.4rem]'/>
                            )}
                        </div>
                        <div className='px-4 mb-8 -mt-2'>
                            {child}
                        </div>
                    </div>
                )
            })}
        </>
    )
}