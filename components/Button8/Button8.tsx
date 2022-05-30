import Link from "next/link"
import dynamic from "next/dynamic";


type Props = {
    text: string,
    link: string
    backgroundImage: string
}

function Button8({text, link, backgroundImage}: Props) {
    return (
        <Link href={link}>
            <a href="" target="_blank" className="outline-none group " >
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-[20px] rounded-full p-1 px-3 border-2 border-transparent group-focus-visible:border-white group-hover:bg-white/25 group-active:bg-white/40 group-active:scale-90 ">
                    <div className="bg-no-repeat bg-contain bg-center h-5 w-5 " style={{backgroundImage: backgroundImage}}> 
                    </div>
                    <div className="text-white text-center font-semibold text-sm lg:text-base font-inter ">
                        {text}
                    </div>
                </div>

            </a>
        </Link>
    )
}

export default dynamic(() => Promise.resolve(Button8), {
    ssr: false
})