import CustomProse from "../CustomProse/CustomProse"
import dynamic from "next/dynamic";

type FeaturesContent = {
    content : Array<{
        image: string,
        title: string, 
        text: string,
    }>,
    animation?: () => () => void,
    backdropBlur: boolean
}


function Features({content, backdropBlur}: FeaturesContent) {return (
        <div className="grid gap-2 lg:gap-16 items-stretch lg:grid-cols-2 w-full ">
            {content.map((postContent, key) => {
                return (
                    <div key={key} className="odd:text-left even:text-right relative flex flex-col odd:items-start even:items-end lg:even:items-start text-right lg:even:text-left w-full my-2 sm:my-1 lg:my-0 whitespace-pre-wrap">
                        <div data-gsap="animate" className={` rounded-full p-2 relative my-2 md:my-2 lg:my-4 w-fit will-change-transform ${backdropBlur ? `supports-blur:backdrop-blur-sm supports-blur:bg-white/20 bg-sat-fallback-grey-1`: `bg-sat-fallback-grey-1`}`}>
                            <div className="bg-contain bg-no-repeat bg-center h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10" style={{backgroundImage: postContent.image}}></div>
                        </div>
                        <div data-gsap="animate-children" className="odd:place-self-start lg:even:place-self-start max-w-md">
                            <CustomProse overrides="" >
                                <h3>
                                    {postContent.title}
                                </h3>
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
export default dynamic(() => Promise.resolve(Features), {
    ssr: false
})