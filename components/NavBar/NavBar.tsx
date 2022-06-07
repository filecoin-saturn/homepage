import { useCallback, useState, memo } from "react"
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
    backdropBlur: boolean
}

function NavBar({menuLinkArray, navLinkArray, languages, sections, backdropBlur}: Props) {
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

    const scrollCallback = useCallback((entry: IntersectionObserverEntry) => {
        const index = intersecting.indexOf(entry.target.id)
        if(entry.isIntersecting) {
            let isHighest = true
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
                setActiveHash(entry.target.id)
                history.replaceState(null, "", `#${entry.target.id}`)
                path.events.emit("hashChangeComplete")
            }
        } else {
            if(index > -1) {
                setIntersecting(intersecting.filter(value => value !== entry.target.id))
            }
        }
    }, [intersecting, path.events])

    return (
        <>
            <IntersectionObserverWrapper
                targetCallbacks={new Map([["navbar-area", (entry) => setIsScrolled(!entry.isIntersecting)]])}
                threshold={0.99}
            />  
            <IntersectionObserverWrapper
                targetCallbacks={new Map(sections.map(v => [v, scrollCallback]))}
                threshold={[0, 1]}
            />
            <div className={`md:hidden fixed inset-0 rounded-2xl m-2  z-20 transition-transform duration-300 will-change-transform ${backdropBlur ? `supports-blur:backdrop-blur-2xl supports-blur:bg-white/5 bg-sat-fallback-blue-3` : `bg-sat-fallback-blue-3`}  ${isOpen ? `` : `translate-x-[110%]`}`}>
                <Menu isOpen={isOpen} setIsOpen={setIsOpen} languages={languages} backdropBlur={backdropBlur} >
                    {menuLinkArray.map((link, index) => {
                        const hash = link.href.split("#")[1]
                        return (
                            <Button7 
                                key={index} 
                                link={link.href}
                                text={link.title} 
                                onClick={() => {setIsOpen(false)}} 
                                isActive={activeHash.includes(hash)} 
                                type="next-link"
                                replace={true}
                                backdropBlur={backdropBlur}
                            />
                        )
                    })}
                </Menu>
            </div>
            <div id="navbar" className={`fixed inset-x-0 z-10 rounded-full m-2 md:m-4 ${isScrolled && backdropBlur ? `supports-blur:bg-white/5 supports-blur:backdrop-blur-md bg-sat-fallback-blue-5` : isScrolled ?  `bg-sat-fallback-blue-5` : ``}`}>
                <div className="flex justify-between items-center p-1 md:pr-3">
                    <div className={` transition-transform duration-300 ${isScrolled ? `` : `translate-x-[5%] lg:translate-x-1/2 `}`}>
                        <Button3 link="/" replace={true} backdropBlur={backdropBlur} />
                    </div>
                    <div className={`flex items-center md:hidden mr-1.5 transition-transform duration-300 ${isScrolled ? `` : `-translate-x-[10%]`}`}>
                        <Button4 isOpen={isOpen} setIsOpen={setIsOpen} backdropBlur={backdropBlur}/>
                    </div>
                    <div className={`hidden md:flex space-x-4 md:items-center lg:space-x-16 transition-transform duration-300 ${isScrolled ? `space-x-2 ` : `-translate-x-[5%] lg:-translate-x-[10%] `}`}>
                        <div className="flex space-x-0 md:space-x-4">
                            {navLinkArray.map((link, index) => {
                                const hash = link.href.split("#")[1]
                                return (
                                    <Button5 
                                        key={index} 
                                        type="next-link"
                                        link={link.href} 
                                        text={link.title} 
                                        onClick={() => {setIsOpen(false)}} 
                                        isActive={activeHash.includes(hash)} 
                                        isScrolled={isScrolled}
                                        replace={true}
                                        backdropBlur={backdropBlur}
                                    />
                                )
                            })}
                        </div>
                        <Button5 type="button" text={languages.text} disabled isScrolled={isScrolled} backdropBlur={backdropBlur} />
                    </div>
                </div>
            </div>
            <div data-io="navbar-area" id="navbar-area" className="bg-transparent w-full h-0"></div>  
        </>
    )
}

export default dynamic(() => Promise.resolve(memo(NavBar)), {
    ssr: false
})