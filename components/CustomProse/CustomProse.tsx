type Props = {
    children: React.ReactNode,
    overrides?: string
}

export default function CustomProse({children, overrides}: Props) {
    return (
        <div className="prose antialiased
            prose-h1:font-inter prose-h1:font-black prose-h1:my-4 prose-h1:text-white prose-h1:text-4xl prose-h1:md:text-6xl prose-h1:lg:text-[5.625rem] lg:even:prose-h1:text-5xl xl:even:prose-h1:text-[5rem]
            prose-h2:font-inter prose-h2:font-black prose-h2:text-2xl prose-h2:lg:text-4xl prose-h2:text-white prose-h2:my-4
            prose-h3:font-inter prose-h3:font-black prose-h3:text-white prose-h3:my-2 prose-h3:text-3xl prose-h3:md:text-5xl prose-h3:lg:text-6xl prose-h3:leading-tight
            prose-h4:font-inter prose-h4:font-black prose-h4:text-white prose-h4:my-2 prose-h4:text-xl prose-h4:md:text-2xl prose-h4:lg:text-4xl
            prose-h5:font-inter prose-h5:font-black prose-h5:text-base prose-h5:md:text-2xl prose-h5:lg:text-3xl  prose-h5:text-white prose-h5:my-2 prose-h5:lg:leading-7
            prose-p:font-inter prose-p:text-white prose-p:text-sm prose-p:md:text-base prose-p:lg:text-lg prose-p:font-normal prose-p:leading-[1.1rem] prose-p:lg:leading-6
            prose-code:font-source-code-pro prose-code:font-semibold prose-code:after:hidden prose-code:before:hidden prose-code:bg-white prose-code:bg-opacity-20 prose-code:px-1 prose-code:py-0.5 prose-code:mx-0.5 prose-code:rounded-md prose-code:text-white
            prose-a:text-white prose-a:underline-offset-2 prose-a:font-bold prose-a:font-inter hover:prose-a:underline-offset-[3px] focus:prose-a:text-sat-blue-1 focus:prose-a:outline-none
            prose-ol:font-inter prose-ol:text-white prose-ol:text-lg prose-ol:font-normal prose-ol:lg:text-base marker:prose-ol:text-white marker:prose-ol:font-bold
            prose-ul:font-inter prose-ul:text-white prose-ul:text-lg prose-ul:font-normal prose-ul:lg:text-base prose-ul:my-0 marker:prose-ul:text-white marker:prose-ul:font-bold
        ">
            <div className={`prose  ${overrides ?? ""}`}>
                {children}
            </div>
        </div>
    )
}