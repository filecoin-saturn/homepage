import Link from "next/link"
import { text } from "stream/consumers"

type NextLinkProps = {
    link: string,
    text: string,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void,
    isActive: boolean,
    disabled?: never
    isScrolled?: boolean
    type: "next-link",
    replace?: boolean
}

type ButtonProps = {
    type: "button",
    link?: never,
    text: string,
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void,
    isActive?: never,
    disabled: boolean,
    isScrolled?: boolean
    replace?: never
    backdropBlur: boolean

}

type AllProps = ButtonProps | NextLinkProps

export default function Button7({...all}: AllProps) {
    const rest: Partial<AllProps> = all
    return rest.type === "next-link" ? (
        <Link href={rest.link ?? ""} replace={rest.replace}>
            <a 
                className="group outline-none relative flex-none  "
                onClick={rest.onClick}
            >
                <div className={`border-2 border-transparent group-active:bg-white/25 group-active:scale-90 group-focus-visible:border-white hover:bg-white/10 hover:backdrop-blur-md rounded-full p-0.5 px-4 relative text-sat-grey-1 group-focus-visible:bg-white/10 group-focus-visible:backdrop-blur-md group-focus-visible:text-white`}>
                    <div className={`text-base sm:text-lg font-inter font-semibold antialiased tracking-wide ${rest.isActive ? `text-white`: ``}` }>
                        {rest.text}
                    </div>
                </div> 
            </a>
        </Link>
    ) : (
        <button disabled={rest.disabled} className={`disabled:opacity-30 disabled:pointer-events-none group outline-none`}>
            <div className={`justify-center relative text-sat-grey-1 w-full h-full border-2 border-transparent group-active:bg-white/25 group-active:scale-90 group-focus-visible:border-white group-focus-visible:bg-white/10 group-focus-visible:backdrop-blur-md group-focus-visible:text-white hover:bg-white/10 hover:backdrop-blur-md rounded-full p-1 px-1.5`}>
                <div className="font-inter text-base sm:text-lg font-semibold inset-0 tracking-wide antialiased">
                    {rest.text}
                </div>
            </div>
        </button>

    )
}