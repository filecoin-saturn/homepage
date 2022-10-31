import { useCallback } from "react";
import { animated, useSpring } from "react-spring";
import { useContent } from "../../content/content";
import { getUptoDateMetrics } from "../../dataFetching/dataFetching";

type Props = {
    contentId: string, 
}

type PostContentContent = {
        metric: string
        number: string
        unit: string
    
}

export default function Metrics({contentId}: Props) {
    const content = useContent(contentId)

        const styles = useSpring({
            to: useCallback(async (next: <T>(a: T) => void) => {
             
            try { 
            const metrics = await getUptoDateMetrics(content) 
            
            await Promise.all(
                [
                    next({ x: metrics[0], config: { duration: 350 } }),
                    next({ y: metrics[1], config: { duration: 550 } }),
                    next({ z: Number(content[2].number), config: { duration: 650 } })
                ]
             )}
             catch(err){
                // fallback from abort controller
             await Promise.all(
                [
                    next({ x: Number(content[0].number), config: { duration: 350 } }),
                    next({ y: Number(content[1].number), config: { duration: 550 } }),
                    next({ z: Number(content[2].number), config: { duration: 650 } })
                ]
                )}
             }
            ,[content]),
            from: { x: 0, y: 0, z: 0 },
        })
        
    return (
        <div className="flex flex-wrap w-full first-of-type:mr-4 xs:gap-3  md:gap-8 lg:gap-12 max-w-none md:my-8 xl:gap-14 ">
            {content.map((postContent: PostContentContent, key: number) => {
                return (
                    <div key={key} className="first-of-type:mr-4  text-white font-inter min-w-fit flex items-center space-x-1 md:space-x-3 lg:space-x-3 ">
                        <div className="text-[1.25rem] md:text-4xl lg:text-5xl font-black flex space-x-0.5 md:space-x-1 lg:space-x-2">
                            <animated.div className={`${content[key].number.length === 2 ? `w-7 md:w-12 lg:w-[65px]` : `w-10 md:w-[70px] lg:w-[90px]` }`} >
                                {key === 0 ? styles.x.to(val => Math.floor(val)) : key === 1 ? styles.y.to(val => Math.floor(val)) : styles.z.to(val => Math.floor(val))}  
                            </animated.div>
                            <div>
                                {postContent.unit}
                            </div>
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