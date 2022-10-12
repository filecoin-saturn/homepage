import {useContent} from "../../content/content"

type Props = {
    text?: string,
    subtext?: string
    link?: string
    disabled?: boolean
    backdropBlur: boolean
    target?: "_blank",
    contentId: string
}

export default function Button13({text, link, subtext, disabled, backdropBlur, target, contentId}: Props) {
    const content = useContent(contentId ?? "")
    const t = text ?? content.text
    const st = subtext ?? content.subtext
    const l = link ?? content.link
    return (
            <a target={target} href={l} className={`grow text-center${disabled ? `pointer-events-none ` : ``} group outline-none relative `}>
                <div className={`${disabled ? ` pointer-events-none supports-blur:bg-sat-grad-blue-green-1-30 bg-sat-grad-blue-green-1-30-fallback-1 supports-blur:text-sat-green-1/60 ` : ``}  group-active:scale-90 text-sat-green-1 rounded-2xl md:rounded-3xl group-hover:bg-sat-grad-blue-green-1  p-1 will-change-transform ${backdropBlur ? `supports-blur:backdrop-blur-sm supports-blur:bg-sat-grad-blue-green-1-30 bg-sat-grad-blue-green-1-30-fallback-1  ` : `bg-sat-grad-blue-green-1-30-fallback-1 `}`}>
                    <div className=' rounded-[0.8rem] md:rounded-[1.25rem] h-full w-full flex items-center justify-center group-hover:bg-sat-blue-5   '>
                        <div className=' px-4 sm:px-6 md:px-10 py-1 xs:py-2 md:py-[0.9rem] lg:px-12 font-inter font-black text-sm md:text-sm tracking-wide  antialiased group-focus-visible:text-white'>
                            <div className='text-xs md:text-base lg:text-lg  font-normal'>
                                {st}
                            </div>
                            <div className="text-sm md:text-xl lg:text-2xl ">
                                {t}
                            </div>
                        </div>
                        <div className="absolute w-full h-full border-4 border-transparent bg-transparent group-focus-visible:border-white rounded-2xl md:rounded-3xl"></div>
                    </div>
                </div>

            </a>
    )
}