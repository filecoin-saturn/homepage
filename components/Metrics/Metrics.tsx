import { useCallback, useEffect, useState } from "react";
import { animated, SpringValue, useSpring, UseSpringProps } from "react-spring";
import { useContent } from "../../content/content";

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

    async function getUptoDateMetrics() {
        const options = {method: 'GET'};
        const response = await fetch('https://uc2x7t32m6qmbscsljxoauwoae0yeipw.lambda-url.us-west-2.on.aws/?filAddress=all&startDate=1662596100000&endDate=1663200900000&step=day', options)
        const jsonResponse = await response.json()
        if(jsonResponse) {
            const pops = jsonResponse.nodes ? jsonResponse.nodes[0].count + jsonResponse.nodes[1].count : content[0].number
            const numRequestsServed = (jsonResponse.metrics[0].numRequests / 1000000) > 100 ? jsonResponse.metrics[0].numRequests / 1000000 : content[1].number
            return [Number(pops.toFixed()), Number(numRequestsServed.toFixed())]
        }else {
            return [0,0]
        }

    }
        const styles = useSpring({
            to: useCallback(async (next: <T>(a: T) => void) => {
             const metrics = await getUptoDateMetrics() 
             await Promise.all(
                [
                    next({ x: metrics[0], config: { duration: 350 } }),
                    next({ y: metrics[1], config: { duration: 550 } }),
                    next({ z: Number(content[2].number), config: { duration: 650 } })
                ]
             )
            },[]),
            from: { x: 0, y: 0, z: 0 },
        })
        
    return (
        <div className="flex flex-wrap w-full first-of-type:mr-4 xs:gap-3  md:gap-8 lg:gap-16 max-w-none md:my-8 xl:gap-16 ">
            {content.map((postContent: PostContentContent, key: number) => {
                return (
                    <div key={key} className="first-of-type:mr-4  text-white font-inter min-w-fit flex items-center space-x-1 md:space-x-3 lg:space-x-4 ">
                        <div className="text-[1.25rem] md:text-4xl lg:text-5xl font-black flex md:space-x-1 lg:space-x-2">
                            <animated.div className="" >
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