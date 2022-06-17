type Props = {
    children: React.ReactNode,
    overrides?: string
}

export default function CustomProse({children, overrides}: Props) {
    return (
        <div className="prose antialiased
            prose-h1:font-inter prose-h1:font-black prose-h1:my-4 prose-h1:text-white prose-h1:text-5xl prose-h1:md:text-6xl prose-h1:lg:text-[5rem]
            prose-h2:font-inter prose-h2:font-semibold prose-h2:text-2xl prose-h2:lg:text-4xl prose-h2:text-white prose-h2:my-4
            prose-h3:font-inter prose-h3:font-black prose-h3:text-white prose-h3:text-xl prose-h3:mb-2  prose-h3:md:text-2xl prose-h3:lg:text-[1.7rem] prose-h3:leading-tight
            prose-h4:font-inter prose-h4:font-normal prose-h4:text-white prose-h4:mb-2 prose-h4:text-lg prose-h4:md:text-xl prose-h4:lg:text-base prose-h4:tracking-wide
            prose-p:font-inter prose-p:text-white prose-p:text-lg prose-p:font-normal prose-p:lg:text-base
            prose-a:text-white prose-a:underline-offset-2 prose-a:font-bold prose-a:font-inter
            prose-ol:font-source-serif-pro prose-ol:text-white prose-ol:text-lg prose-ol:font-normal prose-ol:lg:text-lg
            prose-code:after:hidden prose-code:before:hidden prose-code:bg-white prose-code:bg-opacity-20 prose-code:px-1 prose-code:py-0.5 prose-code:mx-0.5 prose-code:rounded-md prose-code:text-white
        ">
            <div className={`prose  ${overrides ?? ""}`}>
                {children}
            </div>
        </div>
    )
}