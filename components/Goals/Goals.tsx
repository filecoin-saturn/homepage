import CustomProse from "../CustomProse/CustomProse"
import dynamic from "next/dynamic";

type GoalsContent = {
    content : Array<{
        image: string,
        title: string, 
        text: string,
    }>,
    animation?: () => () => void,
    backdropBlur: boolean
}


function Goals({content, backdropBlur}: GoalsContent) {return (
        <div className="grid gap-2 lg:gap-16 items-stretch lg:grid-cols-2 w-full ">
            {content.map((postContent, key) => {
                return (
                    <div key={key} className="odd:text-left even:text-right relative flex flex-col odd:items-start even:items-end lg:even:items-start text-right lg:even:text-left w-full my-2 sm:my-1 lg:my-0 whitespace-pre-wrap">
                        <div data-gsap="animate" className={` rounded-full p-2 relative mb-2 md:my-2 lg:my-4 w-fit will-change-transform ${backdropBlur ? `supports-blur:backdrop-blur-md supports-blur:bg-white/20 bg-sat-white-20-fallback-1`: `bg-sat-white-20-fallback-1`}`}>
                            <img alt={postContent.title} src={postContent.image} className="bg-contain bg-no-repeat bg-center h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10"></img>
                        </div>
                        <div data-gsap="animate-children" className="odd:place-self-start lg:even:place-self-start max-w-md">
                            <CustomProse overrides="prose-p:my-0" >
                                <h5>
                                    {postContent.title}
                                </h5>
                                <p >
                                    {postContent.text}
                                </p>
                            </CustomProse>
                        </div>
                    </div>
                )
            })}
        </div> 
    )
}
export default dynamic(() => Promise.resolve(Goals), {
    ssr: false
})