import { useState } from "react"
import { useRouter } from "next/router"
import Menu from "../Menu/Menu"
import { useEffect } from "react"
import Button5 from "../Button5/Button5"
import Button6 from "../Button6/Button6"
import Button7 from "../Button7/Button7"

type Props = {
    menuLinkArray: {
        title: string,
        href: string
    }[],
    navLinkArray: {
        title: string,
        href: string
    }[],
    languages: {
        text: string
    }
}

export default function NavBar({menuLinkArray, navLinkArray, languages}: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const path = useRouter()
    const [isScrolled, setIsScrolled] = useState(false)

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
                <Menu isOpen={isOpen} setIsOpen={setIsOpen} linkArray={menuLinkArray} languages={languages} />
            </div>
            <div id="navbar" className={`fixed inset-x-0 z-10 bg-white ${isScrolled ? `bg-opacity-70 backdrop-blur-md` : ``}`}>
                <div className="flex justify-between mx-4 md:mx-6 my-1.5 md:my-2 items-center">
                    <div className=" md:p-1">
                        <Button5 colorMode="light" link="/" />
                    </div>
                    <Button6 isOpen={isOpen} setIsOpen={setIsOpen} />
                    <div className="hidden md:flex space-x-16 mr-10">
                        <div className="flex space-x-12">
                            {navLinkArray.map((link, index) => {
                                return (
                                    <Button7 
                                        key={index} 
                                        type="next-link"
                                        link={link.href} 
                                        text={link.title} 
                                        onClick={(e) => {setIsOpen(false)}} 
                                        isActive={path.asPath === link.href} 
                                        size={"lg"}
                                    />
                                )
                            })}
                        </div>
                        <Button7 type="button" text={languages.text} size={"lg"} onClick={() => {}} disabled />
                    </div>
                </div>
            </div>
            <div id="navbar-area" className="bg-transparent w-full h-[3rem] md:h-[4.1rem]"></div>     
        </>
    )
}