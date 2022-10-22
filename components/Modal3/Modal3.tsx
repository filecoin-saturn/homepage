import Link from "next/link";
import { useContent } from "../../content/content";
import Button14 from "../Button14/Button14";
import CustomProse from "../CustomProse/CustomProse";

type Props = {
    backdropBlur: boolean
    link?: string,
    contentId: string,
    children: React.ReactNode
}

export default function Modal3({children, backdropBlur, link, contentId}: Props) {
    const content = useContent(contentId)
    const l = link ?? content.link
    return (
        <div className="relative -mx-2">
            <a href={l} className={`flex overflow-hidden items-center justify-between focus-visible:delay-0 focus-visible:transition-none font-inter opacity-100 outline-transparent outline-none ring-inset ring-transparent ring-2 md:ring-[0.1875rem] focus-visible:ring-white rounded-[1.4375rem] md:rounded-[1.75rem] lg:rounded-[2.0625rem] group pl-[1.375rem] md:pl-[1.625rem] pr-[0.3125rem] md:pr-1.5 py-[0.3125rem] md:py-1.5 lg:py-2 lg:pr-2 lg:pl-[2.375rem] space-x-4  active:scale-90 transition-transform ${backdropBlur ? `supports-blur:backdrop-blur-sm supports-blur:bg-sat-grad-blue-green-1-20 supports-blur:hover:bg-sat-grad-blue-green-1-30 bg-sat-grad-blue-green-1-20-fallback-1 hover:bg-sat-grad-blue-green-1-30-fallback-1 supports-blur:active:bg-sat-grad-blue-green-1-40 active:bg-sat-grad-blue-green-1-40-fallback-1`: `bg-sat-grad-blue-green-1-20-fallback-1`}`}>
                <span className="text-white text-sm md:text-base lg:text-lg font-semibold leading-[1.1rem] lg:leading-6 antialised">
                    {children}
                </span>
                <div className="bg-sat-blue-3 rounded-full p-2.5 md:p-[0.6875rem] group-hover:-rotate-45 transition-transform group-hover:bg-sat-grad-blue-green-3 group-hover:shadow-colored group-focus-visible:shadow-colored active:shadow-colored active:scale-90 ring-transparent ring-2 md:ring-[0.1875rem] ring-inset group-focus-visible:ring-white group-focus-visible:-rotate-45">
                    <div className="bg-arrow-right bg-cover bg-no-repeat bg-center w-4 h-4 md:w-[1.375rem] md:h-[1.375rem] lg:w-[1.75rem] lg:h-[1.75rem]"></div>
                </div>
            </a>    
        </div>
    )
}