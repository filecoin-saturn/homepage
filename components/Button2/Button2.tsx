
type Props = {
    text: string,
    link: string
    disabled?: boolean
    backdropBlur: boolean
}

export default function Button2({text, link, disabled, backdropBlur}: Props) {
    return (
            <a href={link} className={`${disabled ? `pointer-events-none opacity-60` : ``} group outline-none relative `}>
                <div className={`group-active:scale-90 text-sat-green-1 rounded-full bg-gradient-to-r from-sat-gradient-blue-1 to-sat-gradient-green-1 group-hover:from-sat-blue-1 group-hover:to-sat-green-1 p-0.5 will-change-transform ${backdropBlur ? `supports-blur:bg-opacity-40 supports-blur:backdrop-blur-sm bg-opacity-100 bg-sat-fallback-blue-4 ` : `bg-opacity-100 bg-sat-fallback-blue-4`}`}>
                    <div className=' rounded-full h-full w-full flex items-center justify-center group-hover:bg-sat-blue-2   '>
                        <div className='py-1 font-inter font-black text-sm md:text-sm lg:text-lg tracking-wide px-3 lg:px-6 antialiased group-focus-visible:text-white'>
                            {text}
                        </div>
                        <div className="absolute w-full h-full border-2 border-transparent bg-transparent group-focus-visible:border-white rounded-full"></div>
                    </div>
                </div>

            </a>
    )
}