type Props = {
    children: React.ReactNode,
    overrides?: string
}

export default function CustomProse({children, overrides}: Props) {
    return (
        <div className="prose antialiased
            prose-h1:font-inter prose-h1:font-semibold prose-h1:text-[1.75rem] prose-h1:lg:text-4xl prose-h1:xl:text-[2.35rem] prose-h1:md:mb-2 prose-h1:mb-1.5
            prose-h2:font-inter prose-h2:font-semibold prose-h2:text-2xl prose-h2:xl:text-[1.75rem]
            prose-h3:font-inter prose-h3:font-semibold prose-h3:text-lg prose-h3:md:text-xl prose-h3:md:mb-2 prose-h3:mb-1
            prose-h4:font-inter prose-h4:font-semibold prose-h4:text-base prose-h4:md:text-lg
            prose-p:font-source-serif-pro prose-p:leading-tight sm:prose-p:leading-tight prose-p:text-lg prose-p:xl:text-[1.25rem] prose-p:md:my-2 prose-p:my-1
            prose-ul:list-none prose-ul:font-source-serif-pro prose-ul:text-base prose-ul:font-normal prose-ul:md:text-lg prose-ul:text-black
            prose-li:ml-2 prose-li:before:content-['\2022'] prose-li:before:text-regular-blue prose-li:before:text-lg prose-li:md:before:text-2xl prose-li:before:absolute prose-li:before:-left-2 prose-li:relative prose-li:before:top-1/2 prose-li:before:-translate-y-1/2 
            
        ">
            <div className={`prose ${overrides ?? ""}`}>
                {children}
            </div>
        </div>
    )
}