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
                <div className="flex justify-between mx-4 md:mx-6 my-1.5 md:my-2 items-center">
                    <div className=" md:p-4">
                        <Link href={"/"}>
                            <a className="group outline-none active:scale-90 disabled:opacity-50 hover:opacity-70 ">
                                <div className="group-focus-visible:bg-filecoin-saturn-border bg-opacity-80 bg-contain group-active:scale-90 bg-no-repeat bg-center w-20 h-12 md:w-28 md:h-12 flex justify-center items-center">
                                    <div className="w-16 h-10 md:w-20 md:h-12 bg-nav-logo bg-contain bg-center bg-no-repeat group-hover:opacity-70 ">
                                    </div> 
                                </div> 
                            </a>
                        </Link>
                    </div>
                    <button className="relative active:scale-90 outline-none group md:hidden h-7 w-7 " onClick={() => {setIsOpen(true)}}>
                        <div className="hidden group-focus-visible:flex bg-focus-menu-button w-full h-full bg-center bg-no-repeat bg-contain">
                        </div>
                        <div className="absolute hover:opacity-80 top-0 group-focus-visible:hidden group-focus-visible:bg-opacity-0 bg-nav-menu bg-contain w-full h-full  bg-center bg-no-repeat outline-none disabled:opacity-50">
                        </div>
                    </button>
                    <div className="hidden md:flex space-x-16 mr-10">
                        <div className="flex space-x-12">
                        {linkArray.map((link, index) => {
                        return (
                            <div key={index} className="rounded-3xl overflow-hidden">
                                <Link href={link.href}>
                                    <a className="group rounded-3xl outline-none active:scale-90 disabled:opacity-50 hover:text-light-blue">
                                        <div className="w-full rounded-3-xl group-focus-visible:bg-gradient-to-r bg-transparent from-gradient-turqouise to-gradient-blue rounded-3xl p-0.5 group-active:scale-90">
                                            <div className="group-focus-visible:bg-light-blue-2 bg-transparent rounded-3xl px-3 py-1.5  ">
                                                <div className="relative text-sm ">
                                                    <div className={`font-roboto font-bold tracking-wide ${path.asPath === link.href ? ``: `invisible`}` }>
                                                        {link.title}
                                                    </div>
                                                    <div className={`absolute font-roboto font-normal tracking-wide inset-0 ${path.asPath === link.href ? `invisible`: ``}` }>
                                                        {link.title}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
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
            <div id="navbar-area" className="bg-transparent w-full h-[3rem] md:h-[4.1rem]"></div>     
        </>
    )
}