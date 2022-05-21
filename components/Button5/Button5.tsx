import { link } from "fs"
import Link from "next/link"
import { useRouter } from "next/router"

type ButtonProps = {
    type: "button",
    link?: never,
    text: string,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void,
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
    disabled?: never
    isScrolled?: boolean
}

type Props = ButtonProps | NextLinkProps

export default function Button5({type, text, onClick, ...all}: Props) {
    const rest: Partial<Props> = all
    return type === "next-link" ? (
        <Link href={rest.link ?? ""} >
            <a  onClick={onClick}
                className={`group outline-none relative z-20 group disabled:opacity-30 ${rest.isScrolled ? `` : ``} `} 
                 >
                <div className={`w-full h-full flex group-active:scale-90 items-center ${rest.isActive ? `space-x-2`: ``} px-2 py-1 md:px-3 md:py-1 border-2 border-transparent text-sat-grey-1 group-focus-visible:border-white group-focus-visible:text-white group-focus-visible:bg-white/10 rounded-full group-hover:text-white ${rest.isScrolled ? `group-hover:bg-white/10 group-hover: group-active:bg-white/25 group-hover:backdrop-blur-[20px] group-active:backdrop-blur-[20px] ` : `backdrop-blur-[20px] bg-white/10 group-hover:bg-white/25 group-active:bg-white/40 `}`}>
                    <div className={` ${rest.isActive? `` : `hidden `} h-[0.35rem] w-[0.35rem] rounded-full bg-white`}></div>
                    <div className={`relative md:text-sm  `}>
                        <div className={`font-inter font-semibold antialiased tracking-wide ${rest.isActive ? `text-white`: ``}` }>
                            {text}
                        </div>
                    </div> 
                </div>
            </a>
        </Link>
    ) : (
        <button disabled={rest.disabled} className={`disabled:opacity-30 disabled:pointer-events-none group outline-none`}>
            <div className={`justify-center relative text-sat-grey-1 w-full h-full flex group-active:scale-90 items-center p-1 border-2 border-transparent group-focus-visible:border-white group-focus-visible:text-white group-focus-visible:bg-white/10 rounded-full group-hover:text-white ${rest.isScrolled ? ` group-hover:bg-white/10 group-hover: group-active:bg-white/25 group-hover:backdrop-blur-[20px] group-active:backdrop-blur-[20px]    ` : `backdrop-blur-[20px] bg-white/10 group-hover:bg-white/25 group-active:bg-white/40`}`}>
                <div className="font-inter font-semibold antialiased inset-0 tracking-wide">
                    {text}
                </div>
            </div>
        </button>
    )
}