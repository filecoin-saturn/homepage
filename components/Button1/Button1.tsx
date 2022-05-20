
type Props = {
    text: string,
    link: string
}

export default function Button1({text, link}: Props) {
    return (
            <a href={link} className=' active:scale-90 outline-none group rounded-full no-underline text-center text-white bg-sat-blue-1 hover:bg-gradient-to-r hover:from-sat-green-1 hover:to-sat-blue-1  shadow-colored'>
                <div className='rounded-full border-2 border-transparent group-focus-visible:border-white  '>
                    <div className='font-inter font-black text-xs md:text-sm lg:text-lg tracking-wide px-4 lg:px-12 py-1 antialiased'>
                        {text}
                    </div>
                </div>
            </a>
    )
}