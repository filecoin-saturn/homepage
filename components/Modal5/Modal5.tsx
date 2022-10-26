import { useContent } from "../../content/content";
import Button14 from "../Button14/Button14";

type Props = {
    backdropBlur: boolean
    email?: string,
    contentId: string,
    message?: string
}

export default function Modal5({backdropBlur, email, message, contentId}: Props) {
    const content = useContent(contentId)
    const e = email ?? content.email
    const m = message ?? content.message
    return (  
            <div className="relative -mx-2 ">
                <Button14 additionalClasses="peer absolute group top-0 mt-[0.625rem] z-10 right-0 md:mt-2 mr-1 md:mr-2" email={e}/>
                <a  href={`mailto:${e}`} className={`focus-visible:delay-0 focus-visible:transition-none font-inter peer-active:opacity-0 opacity-100 peer-active:transition-none duration-0 transition-[opacity, colors] delay-[2500ms] my-4 outline-transparent outline-4 focus-visible:outline-white rounded-[1.625rem] md:rounded-[1.75rem] group pl-6 block items-center py-4 md:pr-2 space-x-4 ${backdropBlur ? `supports-blur:backdrop-blur-sm supports-blur:bg-sat-grad-blue-green-1-20 supports-blur:hover:bg-sat-grad-blue-green-1-30 bg-sat-grad-blue-green-1-20-fallback-1 hover:bg-sat-grad-blue-green-1-30-fallback-1 supports-blur:active:bg-sat-grad-blue-green-1-40 active:bg-sat-grad-blue-green-1-40-fallback-1`: `bg-sat-grad-blue-green-1-20-fallback-1`}`}>
                    <span className="text-white text-sm md:text-base lg:text-lg font-semibold leading-[1.1rem] lg:leading-6  ">
                        {e}
                    </span>
                </a>
                <div className={`peer-active:text-sat-green-1 w-full absolute top-0 -z-10 peer-active:transition-none duration-0 transition-[opacity, colors] delay-[2500ms] opacity-0 peer-active:opacity-100 text-white outline-transparent outline-4 focus-visible:outline-white rounded-[1.625rem] md:rounded-[1.75rem] group pl-6 block items-center py-4 md:pr-2 space-x-4  ${backdropBlur ? `supports-blur:backdrop-blur-sm supports-blur:bg-sat-grad-blue-green-1-20 supports-blur:hover:bg-sat-grad-blue-green-1-30 bg-sat-grad-blue-green-1-20-fallback-1 hover:bg-sat-grad-blue-green-1-30-fallback-1 supports-blur:active:bg-sat-grad-blue-green-1-40 active:bg-sat-grad-blue-green-1-40-fallback-1`: `bg-sat-grad-blue-green-1-20-fallback-1`}`}>
                    <span className=" font-inter text-sm md:text-base lg:text-lg font-semibold leading-[1.1rem] lg:leading-6">
                        {m}
                    </span>
                </div>
            </div>
           
    )
}