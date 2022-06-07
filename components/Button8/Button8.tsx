import Link from "next/link"
import dynamic from "next/dynamic";


type Props = {
    text: string,
    link: string
    backgroundImage: string
    backdropBlur: boolean

}

function Button8({text, link, backgroundImage, backdropBlur}: Props) {
    return (
        <Link href={link}>
            <a href="" target="_blank" className="outline-none group " >
                <div className={`flex items-center space-x-2 rounded-full p-1 px-3 border-2 border-transparent group-focus-visible:border-white group-active:scale-90 will-change-transform ${backdropBlur ? `supports-blur:group-hover:bg-white/25 supports-blur:group-active:bg-white/40 supports-blur:bg-white/10 supports-blur:backdrop-blur-md bg-sat-fallback-blue-2 group-hover:bg-sat-fallback-grey-1/90 group-active:bg-sat-fallback-grey-2/90 group-focus-visible:bg-sat-fallback-grey-1` : `bg-sat-fallback-blue-2 group-hover:bg-sat-fallback-grey-1/90 group-active:bg-sat-fallback-grey-2/90 group-focus-visible:bg-sat-fallback-grey-1`} `}>
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