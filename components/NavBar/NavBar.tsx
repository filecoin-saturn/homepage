import { useCallback, useState, memo, useLayoutEffect, useEffect } from "react"
import { useRouter } from "next/router"
import Menu from "../Menu/Menu"
import Button3 from "../Button3/Button3"
import Button4 from "../Button4/Button4"
import Button5 from "../Button5/Button5"
import Button7 from "../Button7/Button7"
import Button6 from "../Button6/Button6"
import Button10 from "../Button10/Button10"
import Button11 from "../Button11/Button11"
import IntersectionObserverWrapper from "../IntersectionObserverWrapper/IntersectionObserverWrapper"
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { debounce } from 'lodash';

type Props = {
    menuLinkArray: {
        title: string,
        href: string,
        highlight: boolean
    }[],
    navLinkArray: {
        title: string,
        href: string,
        highlight: boolean
    }[],
    languages: {
        text: string
    },
    sections: string[]
    backdropBlur: boolean
    languageSwitcher: boolean
}

function NavBar({menuLinkArray, navLinkArray, languages, sections, backdropBlur, languageSwitcher}: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const path = useRouter()
    const [activeHash, setActiveHash] = useState("")
    const [intersecting, setIntersecting] = useState<string[]>([])
    const [scrollToHash, setScrollToHash] = useState("")

    useEffect(() => {
        path.events.on("hashChangeStart", (e) => {
            setScrollToHash(e.split("#")[1] ?? "")
        })
        path.events.on("routeChangeStart", (e) => {
            setScrollToHash("/")
        })
    }, [path.events])

    useEffect(() => {
        function handleScrollFinish() {
            setScrollToHash("")
        }
        const debouncedHandleScrollFinish = debounce(handleScrollFinish, 100, {trailing:true})
        window.addEventListener('scroll', debouncedHandleScrollFinish)
        return () => {
            window.removeEventListener('scroll', debouncedHandleScrollFinish)
        }
    }, [])

    useLayoutEffect(() => {
        isOpen ? gsap.to("[data-gsap='animate-menu']", {duration: 0.25, x: 0}) : gsap.to("[data-gsap='animate-menu']", {duration: 0.25, x: "110%"});
    },[isOpen])

    const scrollCallback = useCallback((entry: IntersectionObserverEntry) => {
        const index = intersecting.indexOf(entry.target.id)
        if(entry.isIntersecting) {
            let isHighest = true
            // Add entry to intersecting if not there already
            if(index === -1 ) {
                setIntersecting(intersecting.concat([entry.target.id]))
            }
            // set isHighest to false if there are other intersecting elements that are higher
            intersecting.forEach((id) => {
                const element = document.getElementById(id)
                if(element && id !== entry.target.id && element.getBoundingClientRect().top < entry.boundingClientRect.top) {
                    isHighest = false
                }
            })
            // set the hash to the highest element (only when scrollToHash (is "" or equal to entry.target.id))
            if(isHighest && (scrollToHash === "" || scrollToHash === entry.target.id)) {
                setScrollToHash("")
                setActiveHash(entry.target.id)
                history.replaceState(null, "", entry.target.id === "start" ? "/" : `#${entry.target.id}`)
            }
        } else {
            // remove elements from intersecting that are not intersecting
            if(index > -1) {
                setIntersecting(intersecting.filter(value => value !== entry.target.id))
            }
        }
    }, [intersecting, scrollToHash])

    return (
        <>
            <IntersectionObserverWrapper
                targetCallbacks={new Map(sections.map(v => [v, scrollCallback]))}
                threshold={[0, 1]}
                margin="40% 0px 0px 0px"
            />
            <div data-gsap="animate-menu" className={`lg:hidden fixed inset-0 z-20 translate-x-[110%] ${backdropBlur ? `supports-blur:backdrop-blur-2xl supports-blur:bg-white/5 bg-sat-white-5-fallback-1` : `bg-sat-white-5-fallback-1`}  `}>
                <Menu isOpen={isOpen} setIsOpen={setIsOpen} languages={languages} backdropBlur={backdropBlur} languageSwitcher={languageSwitcher} >
                    {menuLinkArray.map((link, index) => {
                        const hash = link.href.split("#")[1]
                        if(link.highlight) {
                            return (
                                <div className="!mt-10 self-center">
                                    <Button11
                                        key={index} 
                                        text={link.title}
                                        link={link.href} 
                                        onClick={() => {
                                            setIsOpen(false)
                                            document.body.style.overflow = "auto"
                                        }}
                                        replace={true}
                                        isActive={activeHash.includes(hash)}
                                        type="next-link"
                                    />
                                </div>
                                
                            )
                        } else {
                            return (
                                <Button7
                                    key={index} 
                                    text={link.title}
                                    link={link.href} 
                                    onClick={() => {
                                        setIsOpen(false)
                                        document.body.style.overflow = "auto"
                                    }}
                                    replace={true}
                                    isActive={activeHash.includes(hash)}
                                    type="next-link"
                                    backdropBlur={backdropBlur}
                                />
                            )
                        }
                    })}
                </Menu>
            </div>
            <div id="navbar" className={`fixed inset-x-0 z-10 rounded-full m-2 md:m-4 ${backdropBlur ? `supports-blur:bg-white/5 supports-blur:backdrop-blur-md bg-sat-white-5-fallback-1` : `bg-sat-white-5-fallback-1`}`}>
                <div className="flex justify-between items-center p-1 md:pr-3">
                        <Button3 link="/" replace={true} backdropBlur={backdropBlur} aria={"Move up"} />
                    <div className={`flex items-center lg:hidden mr-1.5 ` }>
                        <Button4 isOpen={isOpen} onClick={() => {
                            setIsOpen(true)
                            document.body.style.overflow = "hidden"
                        }} aria="Open menu"/>
                    </div>
                    <div className={`hidden lg:flex md:items-center lg:space-x-16 space-x-4`}>
                        <ul className="flex space-x-0 md:space-x-4">
                            {navLinkArray.map((link, index) => {
                                const hash = link.href.split("#")[1]
                                if(link.highlight) {
                                    return (
                                        <li key={index}>
                                            <Button10
                                                key={index} 
                                                link={link.href}
                                                type="next-link"
                                                text={link.title} 
                                                onClick={() => {setIsOpen(false)}} 
                                                replace={true}
                                                isActive={activeHash.includes(hash)}
                                            />
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li key={index}>
                                            <Button5
                                                key={index} 
                                                link={link.href}
                                                type="next-link"
                                                text={link.title} 
                                                onClick={() => {setIsOpen(false)}} 
                                                replace={true}
                                                isActive={activeHash.includes(hash)} 
                                                backdropBlur={backdropBlur}
                                                highlight={link.highlight}
                                            />
                                        </li>
                                    )

                                }
                            })}
                        </ul>
                        <div className={`${languageSwitcher ? `` : `hidden`} `}>
                            <Button6 text={languages.text} disabled={false} backdropBlur={backdropBlur}/>
                        </div>

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