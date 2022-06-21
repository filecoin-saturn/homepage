import Link from "next/link"



type Props = {
    type: "next-link" | "button"
    link: string,
    text: string,
    onClick: () => void
    isActive: boolean,
    replace: boolean,
    disabled?: boolean,
    backdropBlur: boolean
    
}

type ButtonWrapperProps = {
   children: React.ReactNode
   type?: "next-link" | "button"
   onClick?: () => void
   link?: string,
   replace?: boolean,
   disabled?: boolean 
   text?: string
}


type ButtonContentProps = {
    backdropBlur?: boolean
    isActive?: boolean,
    text?: string,
 }

export function ButtonContent({isActive, text}: ButtonContentProps) {
    return (
        <div className={`border-2 border-transparent group-active:bg-white/25 group-active:scale-90 group-focus-visible:border-white hover:bg-white/10 hover:backdrop-blur-md rounded-full p-0.5 px-4 relative text-sat-grey-1 group-focus-visible:bg-white/10 group-focus-visible:backdrop-blur-md group-focus-visible:text-white`}>
            <div className={`text-base sm:text-lg font-inter font-semibold antialiased tracking-wide ${isActive ? `text-white`: ``}` }>
                {text}
            </div>
        </div> 
    )
}

export function ButtonWrapper({...all}: ButtonWrapperProps) {
    const rest: Partial<ButtonWrapperProps> = all
    return rest.type === "next-link" ? (
        <Link href={rest.link ?? ""} replace={rest.replace}>
            <a 
            className="group outline-none relative flex-none  "
            onClick={rest.onClick}
            aria-label={`navigation ${rest.text}`}
            >
                {rest.children}
            </a>
        </Link>
    ) : (
        <button disabled={rest.disabled} 
            aria-label={`navigation ${rest.text}`} 
            className="group outline-none relative flex-none"
        >
            {rest.children}
        </button>
    )
}

export default function Button7({...all}: Props) {
    const rest: Partial<Props> = all
    return (
        <ButtonWrapper type={rest.type} disabled={rest.disabled} link={rest.link} onClick={rest.onClick} replace={rest.replace} text={rest.text} >
            <ButtonContent isActive={rest.isActive} text={rest.text}/>
        </ButtonWrapper>
    )
}