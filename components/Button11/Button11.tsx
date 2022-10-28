import Link from "next/link"
import { useContent } from "../../content/content"



type Props = {
    type: "next-link" | "button"
    link?: string,
    text?: string,
    onClick: () => void
    isActive: boolean,
    replace: boolean,
    disabled?: boolean,
    contentId: string
    dataAnalytics: string
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
   dataAnalytics: string
}


type ButtonContentProps = {
    isActive?: boolean,
    text?: string,
 }

export function ButtonContent({isActive, text}: ButtonContentProps) {
    return (
        <div className={`group-active:scale-90 rounded-full p-1 px-[1.125rem] relative text-white bg-sat-blue-3 group-hover:bg-sat-grad-blue-green-1 group-focus-visible:ring-white ring-2 ring-inset ring-transparent`}>
            <div className={`text-base sm:text-lg font-inter font-semibold antialiased tracking-wide ${isActive ? `text-white`: ``}` }>
                {text}
            </div>
        </div> 
    )
}

export function ButtonWrapper({...all}: ButtonWrapperProps) {
    const rest: Partial<ButtonWrapperProps> = all
    const a = all.dataAnalytics
    return rest.type === "next-link" ? (
        <Link href={rest.link ?? ""} data-analytics={`${a}`} replace={rest.replace}>
            <a 
            className={`block outline-none rounded-full group relative flex-none ${rest.isActive ? "ring-[5px] ring-sat-blue-3/30" : "ring-transparent"}`}
            onClick={rest.onClick}
            aria-label={`navigation ${rest.text}`}
            >
                {rest.children}
            </a>
        </Link>
    ) : (
        <button disabled={rest.disabled} 
            aria-label={`navigation ${rest.text}`} 
            className={`group outline-none ring-transparent relative flex-none ${rest.isActive ? "ring-[5px] ring-sat-blue-3/30" : "ring-transparent"}`}
        >
            {rest.children}
        </button>
    )
}

export default function Button11({...all}: Props) {
    const rest: Partial<Props> = all
    const content = useContent(all.contentId)
    const l = rest.link ?? content.href
    const t = rest.text ?? content.title
    const a = content.dataAnalytics
    return (
        <ButtonWrapper type={rest.type} dataAnalytics={a} disabled={rest.disabled} link={l} onClick={rest.onClick} replace={rest.replace} text={t} isActive={rest.isActive} >
            <ButtonContent isActive={rest.isActive} text={t} />
        </ButtonWrapper>
    )
}