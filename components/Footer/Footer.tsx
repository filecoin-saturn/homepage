import Button3 from "../Button3/Button3";
import Button8 from "../Button8/Button8"
import dynamic from "next/dynamic";

type Props = {
    links: {
        title: string;
        links: {
            text: string;
            link: string;
            backgroundImage: string

        }[];
    }[],
    credits: {
        text: string
        text2: string
        logo: string
    }
}

function Footer({links, credits}: Props){
    return (
        <>
            <div className=" mx-auto w-full py-16">
                <div className=" mx-auto text-white w-full flex items-center justify-center ">
                    <div className="flex text-left justify-start sm:justify-center mx-auto flex-wrap max-w-[17rem] sm:max-w-md sm:space-x-11 md:max-w-none md:space-x-16 lg:space-x-20 xl:space-x-36 antialiased">
                        <div className="hidden sm:block text-left md:text-center md:w-fit justify-start -mt-2 md:-mt-2 ">
                            <Button3 link="/" />
                        </div>
                        <div className="flex text-left justify-between md:justify-center mx-auto font-inter text-sm sm:text-base text-light-grey space-x-8 sm:space-x-11 md:space-x-12 lg:space-x-16 xl:space-x-40 ">
                            {links.map((e, i) => {
                                return (
                                    <div key={i} className="px-2 flex flex-col space-y-4 items-start">
                                        <div className="font-black text-base md:text-lg text-white">
                                            {e.title}
                                        </div>
                                        {e.links.map((e2, i2) => {
                                            return (
                                                <div key={i2}>
                                                    <Button8 link={e2.link} text={e2.text} backgroundImage={e2.backgroundImage} />
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="mt-10 md:mt-0 flex space-x-8 sm:-space-x-0 space-y-0 md:space-y-1  sm:items-stretch sm:flex-1  justify-center ">
                            <div className="sm:hidden">
                                <Button3 link="/" />
                            </div>
                            <div className="mx-auto w-full max-w-[8rem] md:max-w-[18rem] lg:flex  lg:space-x-1 ">
                                <div className="flex space-x-1">
                                    <div className=" font-inter font-semibold text-white text-xs md:text-sm md:ml-0 lg:ml-2">
                                    {credits.text}
                                    </div>
                                    <div className="bg-contain bg-center bg-no-repeat h-4 w-4 md:h-5 md:w-5" style={{backgroundImage: credits.logo}}></div>
                                    </div>
                                <div className=" font-inter font-semibold text-white text-xs md:text-sm md:ml-0 lg:ml-2">
                                    {credits.text2}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default dynamic(() => Promise.resolve(Footer), {
    ssr: false
})