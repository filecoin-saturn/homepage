import Link from "next/link"
import { serialize } from "v8"

type ButtonProps = {
    type: "button",
    link?: never,
    text: string,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void,
    isActive?: never,
    disabled: boolean,
    size: string

}

type NextLinkProps = {
    type: "next-link",
    link: string,
    text: string,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void,
    isActive: boolean,
    disabled?: never
    size: string
}

type Props = ButtonProps | NextLinkProps

export default function Button7({type, text, onClick, ...all}: Props) {
    const rest: Partial<Props> = all
    return type === "next-link" ? (
        <Link href={rest.link ?? ""}>
            <a className="group outline-none disabled:opacity-50 hover:text-light-blue" onClick={onClick} >
                <div className="group-focus-visible:bg-gradient-to-r bg-transparent from-gradient-turqouise to-gradient-blue rounded-full p-0.5 group-active:scale-90 relative">
                    <div className="group-focus-visible:bg-light-blue-2 bg-transparent rounded-full px-2 py-1 md:px-3 md:py-1.5  ">
                        <div className={`relative md:text-sm ${rest.size === "xl" ? `text-xl` : `text-base` }`}>
                            <div className={`font-roboto font-bold antialiased tracking-wide ${rest.isActive ? ``: `invisible`}` }>
                                {text}
                            </div>
                            <div className={`absolute font-roboto font-normal inset-0 antialised tracking-wide ${rest.isActive ? `invisible`: ``}` }>
                                {text}
                            </div>
                        </div> 
                    </div>
                </div>  
            </a>
        </Link>
    ) : (
        <button disabled={rest.disabled} className="disabled:opacity-40">
            <div className={`relative ${rest.size === "xl" ? `text-xl` : `text-base` }`}>
                <div className="font-roboto font-normal antialiased inset-0 tracking-wide">
                    {text}
                </div>
            </div>
        </button>
    )
}