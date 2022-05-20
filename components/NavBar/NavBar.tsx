import { useState } from "react"
import { useRouter } from "next/router"
import Menu from "../Menu/Menu"
import { useEffect } from "react"
import Button3 from "../Button3/Button3"
import Button4 from "../Button4/Button4"
import Button5 from "../Button5/Button5"

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
            threshold: 0.99
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
            {/* <div className={`md:hidden fixed inset-0 bg-white z-20 transition-transform duration-300  ${isOpen ? `` : `translate-x-full`}`}>
                <Menu isOpen={isOpen} setIsOpen={setIsOpen} linkArray={menuLinkArray} languages={languages} />
            </div> */}
            <div id="navbar" className={`fixed inset-x-0 z-10 rounded-full m-2 md:m-4 ${isScrolled ? `bg-white/5 backdrop-blur-[40px]` : ``}`}>
                <div className="flex justify-between my-1 items-center">
                    <div className={`-ml-2 ${isScrolled ? ``:`translate-x-1/4 lg:translate-x-1/2`}`}>
                        <Button3 link="/start" />
                    </div>
                    <Button4 isOpen={isOpen} setIsOpen={setIsOpen} />
                    <div className={`hidden md:flex space-x-16 mr-2 ${isScrolled ? `` : `-translate-x-1/4`}`}>
                        <div className="flex space-x-12">
                            {navLinkArray.map((link, index) => {
                                return (
                                    <Button5 
                                        key={index} 
                                        type="next-link"
                                        link={link.href} 
                                        text={link.title} 
                                        onClick={(e) => {setIsOpen(false)}} 
                                        isActive={path.asPath === link.href} 
                                    />
                                )
                            })}
                        </div>
                        <Button5 type="button" text={languages.text} onClick={() => {}} disabled />
                    </div>
                </div>
            </div>
            <div id="navbar-area" className="bg-transparent w-full h-2"></div>     
        </>
    )
}