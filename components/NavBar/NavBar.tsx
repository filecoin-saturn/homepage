import { useCallback, useState } from "react"
import { useRouter } from "next/router"
import Menu from "../Menu/Menu"
import { useEffect } from "react"
import Button3 from "../Button3/Button3"
import Button4 from "../Button4/Button4"
import Button5 from "../Button5/Button5"
import Button7 from "../Button7/Button7"
import IntersectionObserverWrapper from "../IntersectionObserverWrapper/IntersectionObserverWrapper"
import dynamic from "next/dynamic";

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
    },
    sections: string[]
}

function NavBar({menuLinkArray, navLinkArray, languages, sections}: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const path = useRouter()
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeHash, setActiveHash] = useState("")
    const [intersecting, setIntersecting] = useState<string[]>([])

    const router = useRouter()

    const setSmoothScroll = (isSmooth: boolean) => {
        document.documentElement.style.scrollBehavior = isSmooth ? 'smooth' : 'auto'
      }

    useEffect(() => {
        setSmoothScroll(true)
        const handleStart = () => setSmoothScroll(false)
        const handleStop = () => setSmoothScroll(true)

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleStop)
        router.events.on('routeChangeError', handleStop)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleStop)
            router.events.off('routeChangeError', handleStop)
        }
    }, [router])

    const scrollCallback = useCallback((entry: IntersectionObserverEntry, observer?: IntersectionObserver) => {
        const index = intersecting.indexOf(entry.target.id)
        if(entry.isIntersecting) {
            let isHighest: boolean = true
            if(index === -1 ) {
                setIntersecting(intersecting.concat([entry.target.id]))
            }
            intersecting.forEach((id) => {
                const element = document.getElementById(id)
                if(element && id !== entry.target.id && element.getBoundingClientRect().top < entry.boundingClientRect.top) {
                    isHighest = false
                }
            })
            if(isHighest) {
                console.log(entry.target.id)
                setActiveHash(entry.target.id)
                history.replaceState(null, "", `#${entry.target.id}`)
                path.events.emit("hashChangeComplete")
            }
        } else {
            if(index > -1) {
                setIntersecting(intersecting.filter(value => value !== entry.target.id))
            }
        }
    }, [intersecting])

    return (
        <>
            <IntersectionObserverWrapper
                targetCallbacks={new Map([["navbar-area", (entry) => setIsScrolled(!entry.isIntersecting)]])}
                threshold={0.99}
            >
                
                <IntersectionObserverWrapper
                    targetCallbacks={new Map(sections.map(v => [v, scrollCallback]))}
                    threshold={[0, 1]}
                >
                <div className={`md:hidden fixed inset-0 rounded-2xl m-1 bg-white/5 backdrop-blur-[200px] z-20 transition-transform duration-300  ${isOpen ? `` : `translate-x-[110%]`}`}>
                    <Menu isOpen={isOpen} setIsOpen={setIsOpen} languages={languages} >
                        {menuLinkArray.map((link, index) => {
                            const hash = link.href.split("#")[1]
                            return (
                                <Button7 
                                    key={index} 
                                    link={link.href}
                                    text={link.title} 
                                    onClick={(e) => {setIsOpen(false)}} 
                                    isActive={activeHash.includes(hash)} 
                                    type="next-link"
                                    replace={true}
                                />
                            )
                        })}
                    </Menu>
                </div>
                <div id="navbar" className={`fixed inset-x-0 z-10 rounded-full m-2 md:m-4 ${isScrolled ? `bg-white/5 backdrop-blur-[40px]` : ``}`}>
                    <div className="flex justify-between items-center p-1 md:pr-3">
                        <div className={` ${isScrolled ? `` : `translate-x-[10%] lg:translate-x-1/2 `}`}>
                            <Button3 link="/" replace={true} />
                        </div>
                        <div className={`flex items-center md:hidden mr-1.5 ${isScrolled ? `` : `-translate-x-[10%]`}`}>
                            <Button4 isOpen={isOpen} setIsOpen={setIsOpen} />
                        </div>
                        <div className={`hidden md:flex space-x-4 md:items-center lg:space-x-16 ${isScrolled ? `space-x-2 ` : `-translate-x-[5%] lg:-translate-x-[10%] `}`}>
                            <div className="flex space-x-0 md:space-x-4">
                                {navLinkArray.map((link, index) => {
                                    const hash = link.href.split("#")[1]
                                    return (
                                        <Button5 
                                            key={index} 
                                            type="next-link"
                                            link={link.href} 
                                            text={link.title} 
                                            onClick={(e) => {setIsOpen(false)}} 
                                            isActive={activeHash.includes(hash)} 
                                            isScrolled={isScrolled}
                                            replace={true}
                                        />
                                    )
                                })}
                            </div>
                            <Button5 type="button" text={languages.text} onClick={() => {}} disabled isScrolled={isScrolled} />
                        </div>
                    </div>
                </div>
                <div id="navbar-area" className="bg-transparent w-full h-2"></div>
                </IntersectionObserverWrapper>
            </IntersectionObserverWrapper>     
        </>
    )
}

export default dynamic(() => Promise.resolve(NavBar), {
    ssr: false
})