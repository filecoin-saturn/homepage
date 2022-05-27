
type Props = {
    text: string,
    link: string
}

export default function Button2({text, link}: Props) {
    return (
            <a href={link} className=' group outline-none relative '>
                <div className="group-active:scale-90 text-sat-green-1 rounded-full bg-gradient-to-r from-sat-gradient-blue-1 to-sat-gradient-green-1 group-hover:from-sat-blue-1 group-hover:to-sat-green-1 p-0.5 backdrop-filter backdrop-blur-sm bg-opacity-40">
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