
type Props = {
    text: string,
    link: string
    disabled?: boolean
    backdropBlur: boolean
}

export default function Button2({text, link, disabled, backdropBlur}: Props) {
    return (
            <a href={link} className={`${disabled ? `pointer-events-none ` : ``} group outline-none relative `}>
                <div className={`${disabled ? `pointer-events-none supports-blur:bg-sat-grad-blue-green-1-20 bg-sat-grad-blue-green-1-20-fallback-1 supports-blur:text-sat-green-1/60 ` : ``}  group-active:scale-90 text-sat-green-1 rounded-full group-hover:bg-sat-grad-blue-green-1  p-0.5 will-change-transform ${backdropBlur ? `supports-blur:backdrop-blur-sm supports-blur:bg-sat-grad-blue-green-1-30 bg-sat-grad-blue-green-1-30-fallback-1  ` : `bg-sat-grad-blue-green-1-30-fallback-1 `}`}>
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