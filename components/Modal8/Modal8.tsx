import { useEffect, useState } from "react";
import { RenderMDXContent, useContent } from "../../content/content";
import BackgroundWrapper from "../BackgroundWrapper/BackgroundWrapper";
import CustomProse from "../CustomProse/CustomProse";
import Question from "../Question/Question";

type Props = {
    backdropBlur: boolean
    email?: string,
    contentId: string,
    message?: string
}

export default function Modal8({backdropBlur, contentId}: Props) {
    const content = useContent(contentId)
    const contentIds = Object.keys(content).filter(k => typeof Number(k) === "number").map((n) => `faq.questions[${n}]`)

    const [faqArray, setFaqArray] = useState<number[]>([])


    function toggleFAQ(key : number){
        if(!faqArray.includes(key)){
            setFaqArray([...faqArray, key])
        }
        else if(faqArray.includes(key)){
            setFaqArray((faqArray) =>
                faqArray.filter((checkForKey) =>  !(checkForKey === key))
            );
        }
    }
    return (
        <>
            {contentIds.map((ids, key) => {
                return (
                    <button onClick={() => toggleFAQ(key)}  className="group text-left outline-none   " key={key}>
                        <BackgroundWrapper color="20" backdropBlur={backdropBlur}>
                            <div className="flex space-x-2 md:space-x-6 xl:space-x-16 items-center justify-between my-1 md:my-2 lg:my-4 lg:px-1 xl:my-5 ">
                                <Question contentId={ids + ".question"} />
                            <div className={` ${faqArray.includes(key) ? `rotate-180` : ``} group-focus-visible:outline-white outline-2 outline-transparent transition-transform transform duration-300 h-full top-0 bg-sat-grad-blue-green-1-30 cursor-pointer rounded-full p-2.5 md:p-[0.6875rem] lg:p-3  `}>
                                <div className="bg-wide-arrow-icon-green group-focus-visible:bg-wide-arrow-icon-white bg-cover bg-no-repeat bg-center w-[1.15rem] h-[1.15rem] md:w-[1.125rem] md:h-[1.125rem] lg:w-6 lg:h-6"></div>            
                            </div>
                            </div>
                            <div className={`${faqArray.includes(key) ? ` h-auto my-2 md:my-3 lg:my-4 ` : `h-0 opacity-0 `}  overflow-hidden ease-in-out transition-all duration-300 block `}>
                                <CustomProse>
                                    <RenderMDXContent contentId={ids + ".default"} />
                                </CustomProse>
                            </div>
                        </BackgroundWrapper>
                    </button>
                )
            })}
        </>
    )
}