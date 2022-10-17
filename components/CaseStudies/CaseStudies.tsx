import CustomProse from "../CustomProse/CustomProse"
import dynamic from "next/dynamic";
import { useContent } from "../../content/content";
import Modal4 from "../Modal4/Modal4";

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
        <div className="space-y-4 md:space-y-0 md:flex md:my-3 justify-start j mx-2 gap-2 md:gap-6 lg:gap-8 w-full ">
            {c1.map((postContent, key) => {
                return (
                    <Modal4 backdropBlur={backdropBlur} postContent={postContent} key={key}/>
                )
            })}
        </div> 
    )
}
export default dynamic(() => Promise.resolve(CaseStudies), {
    ssr: false
})