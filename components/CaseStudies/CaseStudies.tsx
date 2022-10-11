import CustomProse from "../CustomProse/CustomProse"
import dynamic from "next/dynamic";
import { useContent } from "../../content/content";

type contentType = Array<{
    logo: string,
    title: string, 
    subtitle: string,
    link: string
}>

type CaseStudiesContent = {
    content?: contentType,
    animation?: () => () => void,
    backdropBlur: boolean,
    contentId: string
}


function CaseStudies({content, backdropBlur, contentId}: CaseStudiesContent) {
    const c = useContent(contentId)
    const c1: contentType = content ?? c
    return (
        <div className="space-y-4 sm:space-y-0 sm:flex justify-between mx-2 gap-2 lg:gap-16 items-stretch lg:grid-cols-2 w-full ">
            {c1.map((postContent, key) => {
                return (
                    <a  href={postContent.link} key={key} className={`group flex rounded-3xl px-2 justify-center items-center will-change-transform ${backdropBlur ? `supports-blur:backdrop-blur-md supports-blur:bg-white/10 bg-sat-white-10-fallback-1`: `bg-sat-white-10-fallback-1`}`}>
                        <div data-gsap="animate" className={` rounded-full p-4 relative mb-2 md:my-2 lg:my-4 w-fit will-change-transform ${backdropBlur ? `supports-blur:backdrop-blur-md supports-blur:bg-white/20 bg-sat-white-20-fallback-1`: `bg-sat-white-20-fallback-1`}`}>
                            <img alt={postContent.title} src={postContent.logo} className=""></img>
                        </div>
                        <div data-gsap="animate-children" className="text-left mx-4">
                            <CustomProse overrides="prose-p:my-2" >
                                <h5>
                                    {postContent.title}
                                </h5>
                                <p >
                                    {postContent.subtitle}
                                </p>
                            </CustomProse>
                        </div>
                        <div>
                            <div className="">
                                <div >
                                    <div className="bg-sat-blue-3 rounded-full p-2.5 md:p-[0.6875rem] group-hover:-rotate-45 transition-transform group-hover:bg-sat-grad-blue-green-3 group-hover:shadow-colored group-focus-visible:shadow-colored active:shadow-colored active:scale-90 ring-transparent ring-2 ring-inset group-focus-visible:ring-white group-focus-visible:-rotate-45">
                                        <div className="bg-arrow-right bg-cover bg-no-repeat bg-center w-4 h-4 md:w-[1.125rem] md:h-[1.125rem]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                )
            })}
        </div> 
    )
}
export default dynamic(() => Promise.resolve(CaseStudies), {
    ssr: false
})