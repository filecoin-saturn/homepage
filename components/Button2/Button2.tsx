
type Props = {
    text: string,
    link: string
}

export default function Button2({text, link}: Props) {
    return (
            <a href={link} className='active:scale-90 group outline-none group rounded-full no-underline text-sat-green-1 bg-gradient-to-r from-sat-gradient-blue-1 to-sat-gradient-green-1 hover:from-sat-blue-1 hover:to-sat-green-1 p-0.5 backdrop-filter backdrop-blur-sm bg-opacity-40'>
                <div className=' rounded-full h-full w-full bg-clip-content flex items-center justify-center group-hover:bg-sat-blue-2   '>
                    <div className='py-1 font-inter font-black text-xs md:text-sm lg:text-lg tracking-wide px-4 lg:px-6 antialiased group-focus-visible:text-white'>
                        {text}
                    </div>
                    <div className="absolute w-full h-full border-2 border-transparent bg-transparent group-focus-visible:border-white rounded-full"></div>
                </div>
            </a>
    )
}