import CustomProse from "../CustomProse/CustomProse"
import dynamic from "next/dynamic";

type FeaturesContent = {
    content : Array<{
        image: string,
        title: string, 
        text: string,
        side: string,
        justify: string
    }>
}

function Features({content}: FeaturesContent) {
    return (
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:gap-4 xl:gap-10 ">
            {content.map((postContent ,key) => {
                return (
                <div key={key} className={`mt-2 flex flex-col sm:min-w-[28rem] md:max-w-[32rem] lg:mx-auto  my-0`}>
                    <div className=" flex lg:self-center lg:!text-left" style={{justifyContent: postContent.justify, textAlign: postContent.side as 'left'}}>
                        <div className="max-w-[15rem] md:max-w-[16rem] lg:max-w-[22rem] break-words">
                        <div className="flex my-2 md:my-4 lg:!justify-start " style={{justifyContent: postContent.justify}}>
                            <div className={`${postContent.image === "" ? ``: `bg-white/20`} w-fit rounded-full text-right p-2 relative`}>
                                <div className="bg-contain bg-no-repeat bg-center h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10" style={{backgroundImage: postContent.image}}></div>
                            </div>
                        </div>
                        <CustomProse overrides="prose-p:my-0 md:prose-p:my-0 lg:prose-p:my-0" >
                            <h3>
                                {postContent.title}
                            </h3>
                            <p>
                                {postContent.text}
                            </p>
                        </CustomProse>
                        </div>
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