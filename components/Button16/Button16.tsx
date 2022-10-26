import {useContent} from '../../content/content'

type Props = {
    text?: string,
    link?: string
    disabled?: boolean
    target?: "_blank" | undefined,
    contentId?: string
}

export default function Button16({target, text, link, disabled, contentId}: Props) {
    const content = useContent(contentId ?? "")
    const t = text ?? content.text
    const l = link ?? content.link
    return (
            <div className='not-prose -mx-2 md:mx-0'>
                <a target={target} href={l} className={` grow ${disabled ? `pointer-events-none   ` : ``} outline-none group relative  `}>
                    <div className={` ${disabled ? `pointer-events-none backdrop-blur-md supports-blur:bg-sat-blue-3/60 bg-sat-blue-3-30-fallback-1 ` : ``}  rounded-2xl md:rounded-2xl xl:rounded-[1.75rem] h-full w-full no-underline text-center group-active:scale-90 text-white bg-sat-blue-3 group-hover:bg-sat-grad-blue-green-1  `}>
                        <div className=' font-inter px-4 sm:px-6 md:px-12 lg:px-6 lg:py-[0.7rem] decoration-transparent rounded-2xl md:rounded-2xl xl:rounded-[1.75rem] group-focus-visible:border-white border-4 border-transparent h-full w-full font-black text-sm md:text-sm tracking-wide antialiased'>
                                <h6 className='my-2 md:my-4 lg:my-3 font-inter font-black text-base md:text-[1.4375rem] lg:text-[1.815rem]  text-white lg:leading-7' >
                                    {t}
                                </h6>
                        </div>
                    </div>
                </a>
            </div>
    )
}