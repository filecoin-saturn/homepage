import { useEffect, useState } from "react";
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
    const [pulledMetrics, setPulledMetrics ] = useState<number[]>([])

        useEffect(() => {
            (async function getUptoDateMetrics() {
                const options = {method: 'GET'};
                const response = await fetch('https://uc2x7t32m6qmbscsljxoauwoae0yeipw.lambda-url.us-west-2.on.aws/?filAddress=all&startDate=1662596100000&endDate=1663200900000&step=day', options)
                const jsonResponse = await response.json()
                if(jsonResponse) {
                    const pops = jsonResponse.nodes ? jsonResponse.nodes[0].count + jsonResponse.nodes[1].count : content[0].number
                    const numRequestsServed = (jsonResponse.metrics[0].numRequests / 1000000) > 100 ? jsonResponse.metrics[0].numRequests / 1000000 : content[1].number
                    setPulledMetrics([pops.toFixed(), numRequestsServed.toFixed()])
                }
        
            })();
          }, [content]); 

    return (
        <div className="flex flex-wrap w-full first-of-type:mr-4 xs:gap-3  md:gap-8 lg:gap-16 max-w-none md:my-8 xl:gap-16 ">
            {content.map((postContent: PostContentContent, key: number) => {
                return (
                    <div key={key} className="first-of-type:mr-4  text-white font-inter min-w-fit flex items-center space-x-1 md:space-x-3 lg:space-x-4 ">
                        <div className="text-[1.25rem] md:text-4xl lg:text-5xl font-black" >
                            {[pulledMetrics[key]?? postContent.number]}{postContent.unit}
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