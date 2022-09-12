import {useContent} from '../../content/content'

type Props = {
    text?: string,
    link?: string
    disabled?: boolean
    target?: "_blank" | undefined,
    contentId?: string
}

export default function Button1({target, text, link, disabled, contentId}: Props) {
    const content = useContent(contentId ?? "")
    const t = text ?? content.text
    const l = link ?? content.link
    return (
            <a target={target} href={l} className={`${disabled ? `pointer-events-none   ` : ``} outline-none group relative  `}>
                <div className={` ${disabled ? `pointer-events-none backdrop-blur-md supports-blur:bg-sat-blue-1/60 bg-sat-blue-1-60-fallback-1 ` : ``}  rounded-full h-full w-full no-underline text-center group-active:scale-90 text-white bg-sat-blue-1 group-hover:bg-sat-grad-blue-green-1 shadow-colored  `}>
                    <div className='font-inter rounded-full group-focus-visible:border-white border-2 border-transparent h-full w-full font-black text-sm md:text-sm lg:text-lg tracking-wide px-3 lg:px-6 py-1 antialiased'>
                        {t}
                    </div>
                </div>
            </a>
    )
}