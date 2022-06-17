
type Props = {
    text: string,
    link: string
    disabled?: boolean
}

export default function Button1({text, link, disabled}: Props) {
    return (
            <a href={link} className={`${disabled ? `pointer-events-none opacity-60` : ``} outline-none group relative  `}>
                <div className=' rounded-full h-full w-full no-underline text-center group-active:scale-90   text-white bg-sat-blue-1 group-hover:bg-gradient-to-r group-hover:from-sat-green-1 group-hover:to-sat-blue-1 shadow-colored  '>
                    <div className='font-inter rounded-full group-focus-visible:border-white border-2 border-transparent h-full w-full font-black text-sm md:text-sm lg:text-lg tracking-wide px-3 lg:px-6 py-1 antialiased'>
                        {text}
                    </div>
                </div>
            </a>
    )
}