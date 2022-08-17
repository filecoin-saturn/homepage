import Link from "next/link";
import CustomProse from "../CustomProse/CustomProse";

type Props = {
    children: React.ReactNode
    backdropBlur: boolean
    link: string
}

export default function Modal3({children, backdropBlur, link}: Props) {
    return (
        <CustomProse overrides='prose-p:my-0 prose-strong:text-white prose-strong:font-semibold prose-p:py-1.5 prose-strong:antialiased prose-p:leading-tight prose-a:no-underline' >
            <Link href={link}>
                <a target="_blank" className={`rounded-[1.625rem] md:rounded-[1.75rem] group pl-6 flex items-center ring-inset ring-transparent ring-2 justify-between pr-2 py-2 space-x-4 bg-sat-white-10-fallback-2 hover:bg-sat-white-20-fallback-2 transition-transform focus-visible:bg-sat-white-30-fallback-2 focus-visible:ring-white active:scale-95 ${backdropBlur ? "supports-blur:backdrop-blur-md supports-blur:bg-white/10 supports-blur:hover:bg-white/20 supports-blur:focus-visible:bg-white/30" : ""}`}>
                    {children}
                    <div className="bg-sat-blue-3 rounded-full p-2.5 md:p-[0.6875rem] group-hover:-rotate-45 transition-transform group-hover:bg-sat-grad-blue-green-3 group-hover:shadow-colored group-focus-visible:shadow-colored active:shadow-colored active:scale-90 ring-transparent ring-2 ring-inset group-focus-visible:ring-white group-focus-visible:-rotate-45">
                        <div className="bg-arrow-right bg-cover bg-no-repeat bg-center w-4 h-4 md:w-[1.125rem] md:h-[1.125rem]"></div>
                    </div>
                </a>
            </Link>
        </CustomProse>
    )
}