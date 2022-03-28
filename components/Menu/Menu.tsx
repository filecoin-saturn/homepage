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
        <div className="flex flex-col justify-between h-full text-center py-3">
            <div className="relative my-2 flex justify-center items-center">
                <button className="relative active:scale-90 outline-none group md:hidden h-7 w-7 " onClick={() => {setIsOpen(false)}}>
                    <div className="hidden group-focus-visible:flex bg-focus-menu-button w-full h-full bg-center bg-no-repeat bg-contain">
                    </div>
                    <div className="absolute hover:opacity-80 top-0 group-focus-visible:hidden group-focus-visible:bg-opacity-0 bg-nav-menu bg-contain w-full h-full bg-center bg-no-repeat outline-none disabled:opacity-50">
                    </div>
                </button>
                </div>

            <div className="flex flex-col space-y-6 mx-auto">
                {linkArray.map((link, index) => {
                    return (
                        <>
                            <Link href={link.href} key={index}>
                                <a className="group outline-none relative" onClick={() => {setIsOpen(false)}}>
                                    <div className="relative group-focus-visible:bg-gradient-to-r bg-transparent from-gradient-turqouise to-gradient-blue rounded-3xl p-0.5 group-active:scale-90">
                                        <div className="group-focus-visible:bg-light-blue-2 bg-transparent rounded-3xl px-2 py-1.5  ">
                                            <div className="relative text-base">
                                                <div className={`font-roboto font-bold antialiased tracking-wide ${path.asPath === link.href ? ``: `invisible`}` }>
                                                    {link.title}
                                                </div>
                                                <div className={`absolute font-roboto font-normal inset-0 antialised tracking-wide ${path.asPath === link.href ? `invisible`: ``}` }>
                                                    {link.title}
                                                </div>
                                            </div> 
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