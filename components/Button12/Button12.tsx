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
    const a = content.dataAnalytics
    return (
            <a target={target} data-analytics={`'${a}'`} href={l} className={`grow ${disabled ? `pointer-events-none   ` : ``} outline-none group relative  `}>
                <div className='group-active:scale-90 absolute w-full bg-transparent top-0 translate-y-1/4 h-[75%] rounded-[50%]  shadow-ellipse -z-10' ></div>
                <div className={` ${disabled ? `pointer-events-none backdrop-blur-md supports-blur:bg-sat-blue-3/60 bg-sat-blue-3-30-fallback-1 ` : ``}  rounded-2xl md:rounded-3xl h-full w-full no-underline text-center group-active:scale-90 text-white bg-sat-blue-3 group-hover:bg-sat-grad-blue-green-1  `}>
                    <div className='font-inter px-4 sm:px-6 md:px-12 lg:px-6 py-1  xs:py-2 md:py-[0.9rem] lg:py-[0.7rem] rounded-2xl md:rounded-3xl group-focus-visible:border-white border-4 border-transparent h-full w-full font-black text-sm md:text-sm tracking-wide antialiased'>
                        <div className='text-xs md:text-base lg:text-xl  font-normal'>
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