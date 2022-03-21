import { useRouter } from "next/router";
import Link from "next/link"


type MenuProps ={
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Menu({setIsOpen}: MenuProps){
    const path = useRouter()
    const linkArray = [
        {title: "Intro", href: "/#intro" },
        {title: "How it works", href: "/#howitworks" },
        {title: "Download", href: "/#download" }
    ]
    return (
        <div className="flex flex-col justify-between h-full text-center">
            <button 
                className="h-10 w-10 mx-auto mt-4 "
                onClick={() => {setIsOpen(false)}}
            >
                <div className="bg-menu-cross bg-center p-1 bg-contain bg-no-repeat w-full h-full hover:opacity-80 outline-none disabled:opacity-50 active:scale-90 ">
                </div>
            </button>
            <div className="flex flex-col space-y-6">
                {linkArray.map((link, index) => {
                    return (
                        <>
                            <Link href={link.href}>
                                <a  onClick={() => {setIsOpen(false)}}>
                                    <div className="relative text-base">
                                        <div className={`font-roboto font-bold antialiased tracking-wide ${path.asPath === link.href ? ``: `invisible`}` }>
                                            {link.title}
                                        </div>
                                        <div className={`absolute font-roboto font-normal inset-0 antialised tracking-wide ${path.asPath === link.href ? `invisible`: ``}` }>
                                            {link.title}
                                        </div>
                                    </div>   
                                </a>
                            </Link>
                        </>
                    )
                })}
            </div>  
            <div className="mb-4">
                <button disabled className="disabled:opacity-40">
                    <div className="relative text-base">
                            <div className=" font-roboto font-normal antialiased inset-0 tracking-wide">
                                ENG
                            </div>
                        </div>
                </button>
            </div>
        </div>
    )
}