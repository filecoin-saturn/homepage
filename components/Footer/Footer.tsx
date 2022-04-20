import Button5 from "../Button5/Button5"
import Button8 from "../Button8/Button8"
import Button9 from "../Button9/Button9"

type Props = {
    links: {
        title: string;
        links: {
            text: string;
            link: string;
        }[];
    }[],
    credits: string
}

export default function Footer({links, credits}: Props){
    return (
        <>
            <div className=" bg-black mx-auto w-full py-10">
                <div className=" mx-auto text-white w-full flex items-center justify-center ">
                    <div className="flex text-left justify-start mx-auto flex-wrap max-w-[14rem] sm:max-w-md md:max-w-2xl lg:max-w-none lg:space-x-16 xl:space-x-24 antialiased">
                        <div className="text-left -ml-3 md:text-center md:w-fit justify-start px-2 mb-16 sm:mb-20 sm:-ml-2 md:-ml-4 md:mr-12 md:-mt-2 xl:mr-14 ">
                            <Button5 colorMode="dark" link="/" />
                        </div>
                        <div className="flex flex-wrap text-left justify-between md:justify-center mx-auto font-inter text-sm sm:text-base text-light-grey sm:space-x-16 md:space-x-16 lg:space-x-16 xl:space-x-32 ">
                            {links.map((e, i) => {
                                return (
                                    <div key={i} className="px-2 last:mt-8 sm:last:mt-0 flex flex-col items-start">
                                        <div className="font-semibold text-white">
                                            {e.title}
                                        </div>
                                        {e.links.map((e2, i2) => {
                                            return (
                                                <div key={i2} className="-ml-[0.9rem]">
                                                    <Button8 link={e2.link} text={e2.text} />
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="text-left sm:text-left md:mx-auto sm:flex sm:items-center sm:space-x-2 mt-16 sm:mt-20 w-full lg:w-fit px-2 justify-start md:justify-center lg:flex-col lg:mt-1 lg:items-center lg:justify-start lg:space-y-2 ">
                            <div className="font-inter font-semibold text-white text-xs sm:ml-2 md:ml-0 lg:ml-2">
                                {credits}
                            </div>
                            <div className="w-fit -ml-[0.9rem]">
                                <Button9 link="https://protocol.ai/" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

