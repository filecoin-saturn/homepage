import Link from "next/link"

type ButtonProps = {
    type: "button",
    link?: never,
    text: string,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void,
    replace?: boolean,
    isActive?: never,
    disabled: boolean,
    isScrolled?: boolean

}

type NextLinkProps = {
    type: "next-link",
    link: string,
    text: string,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void,
    isActive: boolean,
    replace: boolean,
    disabled?: never,
    isScrolled?: boolean
}

type Props = ButtonProps | NextLinkProps

export default function Button5({type, text, onClick, replace, ...all}: Props) {
    const rest: Partial<Props> = all
    return type === "next-link" ? (
        <div className="relative ">
            <div className="flex items-center border-2 border-transparent space-x-2 px-2 md:px-3 invisible">
                <div className={` h-[0.35rem] w-[0.35rem] rounded-full bg-transparent `}></div>
                <div className=" text-transparent ">
                    {text}
                </div>
            </div>
            <div className="absolute inset-y-0 right-0 ">
                <Link href={rest.link ?? ""} replace={replace} >
                    <a  onClick={onClick}
                        className={`group outline-none relative z-20 group disabled:opacity-30 ${rest.isScrolled ? `` : ``} `} 
                        >
                        <div className={`flex group-active:scale-90 items-center ${rest.isActive ? `space-x-2`: ``} px-2 py-1 md:px-3 md:py-1 border-2 border-transparent text-sat-grey-1 group-focus-visible:border-white group-focus-visible:text-white group-focus-visible:bg-white/10 rounded-full group-hover:text-white ${rest.isScrolled ? `group-hover:bg-white/10 group-hover: group-active:bg-white/25 group-hover:backdrop-blur-[20px] group-active:backdrop-blur-[20px] ` : `backdrop-blur-[20px] bg-white/10 group-hover:bg-white/25 group-active:bg-white/40 `}`}>
                            <div className={` ${rest.isActive? `` : `hidden `} h-[0.35rem] w-[0.35rem] rounded-full bg-white`}></div>
                            <div className={`relative md:text-sm md:leading-tight font-inter font-semibold antialiased tracking-wide ${rest.isActive ? `text-white`: ``}` }>
                                {text}
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    ) : (
        <button disabled={rest.disabled} className={`disabled:opacity-30 disabled:pointer-events-none group outline-none`}>
            <div className={`justify-center relative text-sat-grey-1 flex group-active:scale-90 items-center p-1 border-2 border-transparent group-focus-visible:border-white group-focus-visible:text-white group-focus-visible:bg-white/10 rounded-full group-hover:text-white ${rest.isScrolled ? ` group-hover:bg-white/10 group-hover: group-active:bg-white/25 group-hover:backdrop-blur-[20px] group-active:backdrop-blur-[20px]    ` : `backdrop-blur-[20px] bg-white/10 group-hover:bg-white/25 group-active:bg-white/40`}`}>
                <div className="font-inter font-semibold antialiased inset-0 tracking-wide">
                    {text}
                </div>
            </div>
        </button>
    )
}