import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Menu from "../Menu/Menu"
import { useEffect } from "react"

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const path = useRouter()
    const [isScrolled, setIsScrolled] = useState(false)


    const linkArray = [
        {title: "How it works", href: "/#howitworks" },
        {title: "Download", href: "/#download" }
    ]

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0
        }
        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if(entry.target.id === "navbar-area") {
                    setIsScrolled(!entry.isIntersecting)
                }
            });
          };
        const observer = new IntersectionObserver(callback, options);
        const target = document.querySelector('#navbar-area');
        if(target) observer.observe(target);
        return () => {
            if(target) observer.unobserve(target)
        }
    }, [])
    
    return (
        <>
            <div className={`md:hidden fixed inset-0 bg-white z-20 transition-transform duration-300  ${isOpen ? `` : `translate-x-full`}`}>
                <Menu setIsOpen={setIsOpen}/>
            </div>
            <div id="navbar" className={`fixed inset-x-0 z-10 bg-white ${isScrolled ? `bg-opacity-70 backdrop-blur-md` : ``}`}>
                <div className="flex justify-between mx-4 md:mx-6 my-2 items-center">
                    <Link href={"/"}>
                        <a className="group outline-none active:scale-90 disabled:opacity-50 hover:opacity-80 ">
                            <div className="group-focus-visible:bg-filecoin-saturn-border bg-contain bg-no-repeat bg-center p-4">
                               <div className="w-20 h-12 bg-nav-logo bg-contain bg-center bg-no-repeat ">
                                </div> 
                            </div> 
                        </a>
                    </Link>
                    <button className="md:hidden h-7 w-7 " onClick={() => {setIsOpen(true)}}>
                        <div className="bg-nav-menu bg-contain w-full h-full bg-center bg-no-repeat hover:opacity-80 outline-none disabled:opacity-50">
                        </div>
                    </button>
                        <div className="hidden md:flex space-x-16 mr-10">
                            <div className="flex space-x-12">
                            {linkArray.map((link, index) => {
                            return (
                                <>
                                    <Link href={link.href} key={index}>
                                        <a className="group outline-none active:scale-90 disabled:opacity-50 hover:opacity-70 group-focus-visible:bg-filecoin-saturn-border bg-contain bg-no-repeat bg-center">
                                            <div className="relative text-sm ">
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