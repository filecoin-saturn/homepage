import {useContent} from '../../content/content'

type Props = {
    text?: string,
    subtext?: string
    link?: string
    disabled?: boolean
    target?: "_blank" | undefined,
    contentId?: string
}

export default function Button12({target, text, subtext, link, disabled, contentId}: Props) {
    const content = useContent(contentId ?? "")
    const t = text ?? content.text
    const st = subtext ?? content.subtext
    const l = link ?? content.link
    return (
            <a target={target} href={l} className={`${disabled ? `pointer-events-none   ` : ``} outline-none group relative  `}>
                <div className='group-active:scale-90 absolute w-full bg-sat-blue-3 h-full rounded-[50%] shadow-ellipse -z-10' ></div>
                <div className={` ${disabled ? `pointer-events-none backdrop-blur-md supports-blur:bg-sat-blue-3/60 bg-sat-blue-3-30-fallback-1 ` : ``}  rounded-3xl h-full w-full no-underline text-center group-active:scale-90 text-white bg-sat-blue-3 group-hover:bg-sat-grad-blue-green-1  `}>
                    <div className='font-inter px-0.5 sm:px-10 md:px-20 lg:px-8 py-2 sm:py-3 rounded-3xl group-focus-visible:border-white border-4 border-transparent h-full w-full font-black text-sm md:text-sm tracking-wide antialiased'>
                        <div className='text-sm md:text-base lg:text-xl  font-normal'>
                            {st}
                        </div>
                        <div className='text-sm md:text-xl lg:text-3xl '>
                            {t}
                        </div>
                    </div>
                </div>
                
            </a>
    )
}