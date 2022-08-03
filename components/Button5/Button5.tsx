import Link from "next/link"


type Props = {
    type: "next-link" | "button"
    link: string,
    text: string,
    onClick: () => void
    isActive: boolean,
    replace: boolean,
    disabled?: boolean,
    backdropBlur: boolean,
    highlight?: boolean
}

type ButtonWrapperProps = {
   children: React.ReactNode
   type: "next-link" | "button"
   onClick: () => void
   link: string,
   replace: boolean,
   disabled?: boolean 
   text: string
}


type ButtonContentProps = {
    backdropBlur: boolean
    isActive: boolean,
    text: string,
    highlight?: boolean
 }
export function ButtonContent({...all}: ButtonContentProps) {
    const rest: Partial<Props> = all
    return (
        <div className={`flex group-active:scale-90 items-center ${rest.isActive ? `space-x-2`: ``} px-2 py-1 md:px-3 border-2 border-transparent text-sat-gray-1 group-focus-visible:border-white group-focus-visible:text-white rounded-full group-hover:text-white will-change-transform group-focus-visible:bg-sat-white-10-fallback-1 ${rest.highlight ? "bg-sat-white-10-fallback-1 group-hover:bg-sat-white-20-fallback-1 group-active:bg-sat-white-30-fallback-1" : "group-hover:bg-sat-white-10-fallback-1 group-active:bg-sat-white-20-fallback-1"} ${rest.backdropBlur ? `${rest.highlight ? 'supports-blur:group-hover:bg-white/20 supports-blur:bg-white/10 supports-blur:backdrop-blur-md supports-blur:group-active:bg-white/30' : 'supports-blur:group-hover:bg-white/10 supports-blur:group-active:bg-white/20'} supports-blur:group-focus-visible:bg-white/10 supports-blur:group-focus-visible:backdrop-blur-md supports-blur:group-hover:backdrop-blur-md supports-blur:group-active:backdrop-blur-md` : ``}`}>
            <div className={` ${rest.isActive? `` : `hidden `} h-[0.35rem] w-[0.35rem] rounded-full bg-white`}></div>
            <div className={`relative md:text-sm md:leading-tight font-inter font-semibold antialiased tracking-wide ${rest.isActive ? `text-white`: ``}` }>
                {rest.text}
            </div>
        </div>
    )
}

export function ButtonWrapper({children, type, onClick, replace, link, disabled, text}: ButtonWrapperProps) {
    return type === "next-link" ? (
        <Link href={link ?? ""} replace={replace} >
            <a  onClick={onClick}
                className={`group outline-none relative z-20 group disabled:opacity-30 `}
                aria-label={`navigation ${text}`} 
            >
                {children}
            </a>
        </Link>
    ) : (
        <button disabled={disabled} aria-label={`navigation ${text}`} onClick={onClick} className="group outline-none relative z-20 group disabled:opacity-30">
             {children}
        </button>
    )
}

export default function Button5({type, text, onClick, replace, isActive, backdropBlur, link, disabled, highlight}: Props) {
    return (
        <div className="relative ">
            <div className="flex items-center border-2 border-transparent space-x-2 px-2 py-1 md:px-3 invisible">
                <div className={` h-[0.35rem] w-[0.35rem] rounded-full bg-transparent `}></div>
                <div className=" text-transparent relative md:text-sm md:leading-tight font-inter font-semibold antialiased tracking-wide ">
                    {text}
                </div>
            </div>
            <div className="absolute inset-y-0 right-0 ">
                <ButtonWrapper type={type} onClick={onClick} replace={replace} link={link} disabled={disabled} text={text} >
                    <ButtonContent text={text} isActive={isActive} backdropBlur={backdropBlur} highlight={highlight} />
                </ButtonWrapper>
            </div>
        </div>
    )
}