import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const path = useRouter()
    
    return (
        <>
            {isOpen === true ?<div className="md:hidden absolute inset-0 bg-white z-20"></div> : null}
            <div id="navbar" className="fixed h-full inset-x-0 z-10">
                <div className="flex justify-between mx-2 md:mx-4 mt-2 items-center">
                    <Link href={"/"}>
                        <a className="w-28 h-12 p-2">
                            <div className="bg-nav-logo bg-contain w-full h-full bg-center bg-no-repeat ">
                            </div>
                        </a>
                    </Link>
                    <button className="md:hidden h-12 w-12 p-2 " onClick={() => {setIsOpen(true)}}>
                        <div className="bg-nav-menu bg-contain w-full h-full bg-center bg-no-repeat">
                        </div>
                    </button>
                        <div className="hidden md:flex space-x-16 mr-10">
                            <div className="flex space-x-12">
                                <Link href={"/#howitworks"}>
                                    <a className="">
                                    <div className="relative text-sm">
                                            <div className={`font-roboto font-bold ${path.asPath === "/#howitworks" ? ``: `invisible`}` }>
                                                How it works
                                            </div>
                                            <div className={`absolute font-roboto font-normal inset-0 ${path.asPath === "/#howitworks" ? `invisible`: ``}` }>
                                                How it works
                                            </div>
                                        </div>
                                        
                                    </a>
                                </Link>
                                <Link href={"/#download"}>
                                    <a className="">
                                    <div className="relative text-sm">
                                            <div className={`font-roboto font-bold ${path.asPath === "/#download" ? ``: `invisible`}` }>
                                                Download
                                            </div>
                                            <div className={`absolute font-roboto font-normal inset-0 ${path.asPath === "/#download" ? `invisible`: ``}` }>
                                                Download
                                            </div>
                                        </div>
                                        
                                    </a>
                                </Link>
                            </div>
                                <button disabled className="disabled:opacity-20">
                                    <div className="relative text-sm">
                                                <div className="font-roboto font-bold">
                                                    ENG
                                                </div>
                                                <div className="absolute font-roboto font-normal inset-0">
                                                    ENG
                                                </div>
                                            </div>
                                    </button>
                        </div>
                </div>
            </div>
            <div id="navbar-area" className="bg-transparent w-full h-[4.25rem]"></div>     
        </>
    )
}