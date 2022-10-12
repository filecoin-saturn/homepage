import { useContent } from "../../content/content";

type Props = {
    contentId: string, 
}

type PostContentContent = {
        metric: string
        number: string
    
}

export default function Metrics({contentId}: Props) {
    const content = useContent(contentId)

    return (
        <div className="flex flex-wrap w-full first-of-type:mr-4 xs:gap-3  md:gap-8 lg:gap-8 max-w-none md:my-8  xl:justify-between ">
            {content.map((postContent: PostContentContent, key: number) => {
                return (
                    <div key={key} className="first-of-type:mr-4  text-white font-inter min-w-fit flex items-center space-x-1 md:space-x-3 lg:space-x-4 ">
                        <div className="text-[1.25rem] md:text-4xl lg:text-5xl font-black" >
                            {postContent.number}
                        </div>
                        <div className="text-[0.625rem] max-w-[6rem] md:max-w-[7rem] md:text-sm lg:text-lg lg:max-w-[9rem] leading-none md:leading-4 lg:leading-5 whitespace-pre-wrap">
                            {postContent.metric}
                        </div>
                    </div>
                )
            })}
        </div> 
    ) 
}