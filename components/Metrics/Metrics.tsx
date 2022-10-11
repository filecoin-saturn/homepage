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
        <div className="grid grid-cols-2 sm:flex sm:justify-between w-full max-w-[11rem] gap-2 md:space-x-2 sm:max-w-none md:my-8 ">
            {content.map((postContent: PostContentContent, key: number) => {
                console.log(postContent.metric)
                return (
                    <div key={key} className="text-white font-inter min-w-[14rem] sm:min-w-fit flex items-center space-x-1 lg:space-x-4 ">
                        <div className="text-[1.4rem] md:text-4xl lg:text-5xl font-black" >
                            {postContent.number}
                        </div>
                        <div className="text-[0.65rem] max-w-[6rem] md:max-w-[7rem] md:text-sm lg:text-lg lg:max-w-[9rem] leading-none lg:leading-5 whitespace-pre-wrap">
                            {postContent.metric}
                        </div>
                    </div>
                )
            })}
        </div> 
    ) 
}