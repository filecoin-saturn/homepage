import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Menu from "../Menu/Menu"

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const path = useRouter()

    const linkArray = [
        {title: "How it works", href: "/#howitworks" },
        {title: "Download", href: "/#download" }
    ]
    
    return (
        <>
            <div className={`md:hidden fixed inset-0 bg-white z-20 transition-transform duration-300  ${isOpen ? `` : `translate-x-full`}`}>
                <Menu setIsOpen={setIsOpen}/>
            </div>
            <div id="navbar" className="fixed inset-x-0 z-10">
                <div className="flex justify-between mx-4 md:mx-6 my-2 items-center">
                    <Link href={"/"}>
                        <a className="w-20 h-12">
                            <div className="bg-nav-logo bg-contain w-full h-full bg-center bg-no-repeat ">
                            </div>
                        </a>
                    </Link>
                    <button className="md:hidden h-7 w-7 " onClick={() => {setIsOpen(true)}}>
                        <div className="bg-nav-menu bg-contain w-full h-full bg-center bg-no-repeat">
                        </div>
                    </button>
                        <div className="hidden md:flex space-x-16 mr-10">
                            <div className="flex space-x-12">
                            {linkArray.map((link, index) => {
                            return (
                                <>
                                    <Link href={link.href} key={index}>
                                        <a className="">
                                            <div className="relative text-sm">
                                                <div className={`font-roboto font-bold tracking-wide ${path.asPath === link.href ? ``: `invisible`}` }>
                                                    {link.title}
                                                </div>
                                                <div className={`absolute font-roboto font-normal tracking-wide inset-0 ${path.asPath === link.href ? `invisible`: ``}` }>
                                                    {link.title}
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </>
                            )
                            })}
                            </div>
                                <button disabled className="disabled:opacity-40">
                                    <div className="relative text-sm">
                                            <div className="font-roboto font-normal inset-0 tracking-widest">
                                                ENG
                                            </div>
                                        </div>
                                </button>
                        </div>
                </div>
            </div>
            <div id="navbar-area" className="bg-transparent w-full h-[4.1rem]"></div>     
        </>
    )
}