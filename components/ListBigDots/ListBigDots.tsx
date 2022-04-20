type Props = {
    children: React.ReactNode[]
}

export default function ListBigDots({children}: Props) {
    return (
        <>
            {children.map((child, i, array) => {
                return (
                    <div key={i} className='flex space-x-1'>
                        <div className='flex flex-col'>
                            <div className='bg-regular-blue outline-2 outline outline-regular-blue/30 rounded-full min-w-[0.75rem] min-h-[0.75rem] '/>
                            {i === array.length - 1 ? null : (
                                <div className='flex-grow my-1 w-1 border-r-regular-blue opacity-30 border-r-[2px] pl-[0.3rem]'/>
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