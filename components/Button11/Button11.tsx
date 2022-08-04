import Link from "next/link"



type Props = {
    type: "next-link" | "button"
    link: string,
    text: string,
    onClick: () => void
    isActive: boolean,
    replace: boolean,
    disabled?: boolean
    
}

type ButtonWrapperProps = {
   children: React.ReactNode
   type?: "next-link" | "button"
   onClick?: () => void
   link?: string,
   replace?: boolean,
   disabled?: boolean 
   text?: string,
   isActive?: boolean
}


type ButtonContentProps = {
    isActive?: boolean,
    text?: string,
 }

export function ButtonContent({isActive, text}: ButtonContentProps) {
    return (
        <div className={`group-active:scale-90 rounded-full p-1 px-[1.125rem] relative text-white bg-sat-blue-3 group-hover:bg-sat-grad-blue-green-1 group-focus-visible:outline-white outline-2 outline-offset-[-2px] outline-none`}>
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
            className={`block rounded-full group relative flex-none ${rest.isActive ? "outline-[5px] outline-offset-0 outline-sat-blue-3/30 outline" : "outline-none"}`}
            onClick={rest.onClick}
            aria-label={`navigation ${rest.text}`}
            >
                {rest.children}
            </a>
        </Link>
    ) : (
        <button disabled={rest.disabled} 
            aria-label={`navigation ${rest.text}`} 
            className={`group outline-none relative flex-none ${rest.isActive ? "outline-[5px] outline-offset-0 outline-sat-blue-3/30 outline" : "outline-none"}`}
        >
            {rest.children}
        </button>
    )
}

export default function Button11({...all}: Props) {
    const rest: Partial<Props> = all
    return (
        <ButtonWrapper type={rest.type} disabled={rest.disabled} link={rest.link} onClick={rest.onClick} replace={rest.replace} text={rest.text} isActive={rest.isActive} >
            <ButtonContent isActive={rest.isActive} text={rest.text} />
        </ButtonWrapper>
    )
}