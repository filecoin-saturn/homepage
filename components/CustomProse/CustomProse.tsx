type Props = {
    children: React.ReactNode,
    overrides?: string
}

export default function CustomProse({children, overrides}: Props) {
    return (
        <div className="prose antialiased
            prose-h1:font-inter prose-h1:font-black prose-h1:my-2 prose-h1:text-white prose-h1:text-5xl prose-h1:md:text-6xl prose-h1:lg:text-7xl
            prose-h2:font-inter prose-h2:font-black 
            prose-h3:font-inter prose-h3:font-black prose-h3:text-white prose-h3:text-xl prose-h3:md:text-2xl prose-h3:lg:text-[1.7rem] prose-h3:my-0 prose-h3:leading-tight
            prose-h4:font-inter prose-h4:font-semibold prose-h4:text-sat-grey-2 prose-h4:my-2 prose-h4:text-lg prose-h4:md:text-xl prose-h4:lg:text-2xl prose-h4:tracking-wide
            prose-p:font-source-serif-pro prose-p:my-4 prose-p:lg:my-6 prose-p:text-sat-grey-2 prose-p:text-base prose-p:font-normal prose-p:md:text-lg prose-p:lg:text-2xl
        ">
            <div className={`prose  ${overrides ?? ""}`}>
                {children}
            </div>
        </div>
    )
}