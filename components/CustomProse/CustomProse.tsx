type Props = {
    children: React.ReactNode,
    overrides?: string
}

export default function CustomProse({children, overrides}: Props) {
    return (
        <div className="prose antialiased
            prose-h1:font-inter prose-h1:font-black prose-h1:my-4 prose-h1:text-white prose-h1:text-5xl prose-h1:md:text-6xl prose-h1:lg:text-[5rem] lg:first-letter:prose-h1:uppercase lg:even:prose-h1:text-5xl xl:even:prose-h1:text-[5rem] xl:even:first-letter:prose-h1:lowercase
            prose-h2:font-inter prose-h2:font-black prose-h2:text-2xl prose-h2:lg:text-4xl prose-h2:text-white prose-h2:my-4
            prose-h3:font-inter prose-h3:font-black prose-h3:text-white prose-h3:my-2 prose-h3:text-3xl prose-h3:md:text-5xl prose-h3:lg:text-6xl prose-h3:leading-tight
            prose-h4:font-inter prose-h4:font-semibold prose-h4:text-white prose-h4:my-2 prose-h4:text-2xl prose-h4:md:text-2xl prose-h4:lg:text-3xl
            prose-h5:font-inter prose-h5:font-black prose-h5:text-white prose-h5:my-2 prose-h5:text-2xl prose-h5:md:text-3xl prose-h5:lg:text-3xl
            prose-h6:font-inter prose-h6:font-regular prose-h6:text-white prose-h6:my-1 prose-h6:text-lg prose-h6:md:text-xl prose-h6:lg:text-2xl prose-h6:leading-tight
            prose-p:font-inter prose-p:text-white prose-p:text-base prose-p:font-normal prose-p:lg:text-lg
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