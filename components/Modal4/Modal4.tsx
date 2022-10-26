import CustomProse from "../CustomProse/CustomProse";

type Props = {
    backdropBlur: boolean
    link?: string,
    postContent: {logo: string; title: string; subtitle: string; link: string;},

}

export default function Modal4({postContent, backdropBlur}: Props) {
    return (
            <a  href={postContent.link} rel="noreferrer" target="_blank" className={`grow outline-4 p-3 sm:px-3 relative md:p-2 md:px-0 md:py-4 lg:px-4 lg:py-3 outline-offset-0 focus-visible:outline-white outline-none active:scale-90 -ml-4 xs:-ml-2  group flex rounded-2xl md:rounded-3xl items-center will-change-transform ${backdropBlur ? `supports-blur:backdrop-blur-sm supports-blur:bg-sat-grad-blue-green-1-20 bg-sat-grad-blue-green-1-20-fallback-1`: `bg-sat-grad-blue-green-1-20-fallback-1`}`}>
                <div className="flex justify-start items-center px-2">
                    <div data-gsap="animate" className={` rounded-full relative p-4 will-change-transform ${backdropBlur ? `supports-blur:backdrop-blur-md supports-blur:bg-white/20 bg-sat-white-20-fallback-1`: `bg-sat-white-20-fallback-1`}`}>
                        <img alt={postContent.title} src={postContent.logo} className="max-w-[2rem] md:max-w-[2.5rem] lg:max-w-[3rem]"></img>
                    </div>
                    <div data-gsap="animate-children" className="text-left mx-4">
                        <CustomProse overrides="prose-p:mt-0 prose-p:font-bold prose-p:text-base prose-p:md:text-xl prose-p:lg:text-[1.5rem] prose-p:!my-0 prose-p:sm:!my-0 prose-p:lg:leading-7" >
                            <p>
                                {postContent.title}
                            </p>
                        </CustomProse>
                        <CustomProse overrides="prose-p:my-1 prose-h6:text-base prose-h6:md:text-xl prose-h6:lg:text-[1.5rem] prose-h6:!my-0 prose-h6:sm:!my-0 prose-h6:lg:leading-7" >
                            <p >
                                {postContent.subtitle}
                            </p>
                        </CustomProse>
                    </div>
                </div>
            </a>
    )
}