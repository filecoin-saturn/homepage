import Link from "next/link"
import dynamic from "next/dynamic";
import { useContent } from "../../content/content";


type Props = {
    backdropBlur: boolean
    contentId?: string
    text?: string
    link?: string
    backgroundImage?: string

}

function Button17({ backdropBlur, contentId, text, link, backgroundImage}: Props) {
    const content = useContent(contentId ?? "")
    const t = text ?? content.text
    const bi = backgroundImage ?? content.backgroundImage
    const l = link ?? content.link
    return (
        <Link href={l}>
            <a target="_blank" className="outline-transparent group rounded-2xl md:rounded-2.5xl lg:rounded-3xl outline-offset-0" >
                <div className={`flex items-center space-x-2 rounded-[1.0625rem] md:rounded-2.5xl lg:rounded-3xl p-2 px-5 md:py-[0.6875rem] md:px-7 lg:px-[1.9375rem] outline-2 outline-offset-0 outline-transparent group-focus-visible:outline-white group-active:scale-90 will-change-transform ${backdropBlur ? `supports-blur:group-focus-visible:bg-sat-grad-blue-green-1-20 supports-blur:group-hover:bg-sat-grad-blue-green-1-30 supports-blur:group-active:bg-sat-grad-blue-green-1-40 supports-blur:bg-sat-grad-blue-green-1-20 supports-blur:backdrop-blur-md bg-sat-grad-blue-green-1-40-fallback-1 group-hover:bg-sat-grad-blue-green-1-30-fallback-1 group-active:bg-sat-grad-blue-green-1-40-fallback-1 group-focus-visible:bg-sat-grad-blue-green-1-20-fallback-1` : `bg-sat-white-10-fallback-2 group-hover:bg-sat-grad-blue-green-1-30-fallback-1 group-active:bg-sat-grad-blue-green-1-40-fallback-1 group-focus-visible:bg-sat-grad-blue-green-1-20-fallback-1`} `}>
                    <img alt={text} className="bg-no-repeat bg-contain bg-center h-5 w-5 lg:h-6 lg:w-6" src={bi}></img>
                    <div className="text-white text-center font-semibold text-base md:leading-tight md:text-[1.1875rem] lg:text-[1.4375rem] font-inter antialiased">
                        {t}
                    </div>
                </div>

            </a>
        </Link>
    )
}

export default dynamic(() => Promise.resolve(Button17), {
    ssr: false
})