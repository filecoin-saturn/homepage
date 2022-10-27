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
import { useContent } from "../../content/content"

type Link = {
    title: string,
    href: string,
    highlight: boolean
}

type ContentType = {
    menuLinkArray?: Link[],
    navLinkArray?: Link[],
    languages?: {
        text: string
    },
}

type Props = {
    sections: string[]
    backdropBlur: boolean
    languageSwitcher: boolean,
    contentId: string
} & ContentType

function NavBar({menuLinkArray, navLinkArray, languages, sections, backdropBlur, languageSwitcher, contentId}: Props) {
    const content: ContentType = useContent(contentId)
    const menuLinks = menuLinkArray ?? content.menuLinkArray
    const navLinks = navLinkArray ?? content.navLinkArray
    const langs = languages ?? content.languages
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
        const entryDataIo = entry.target.getAttribute("data-io") ?? ""
        const index = intersecting.indexOf(entryDataIo)
        if(entry.isIntersecting) {
            let isHighest = true
            // Add entry to intersecting if not there already
            if(index === -1 ) {
                setIntersecting(intersecting.concat([entryDataIo]))
            }
            // set isHighest to false if there are other intersecting elements that are higher
            intersecting.forEach((dataIo) => {
                const element = document.getElementById(dataIo)
                if(element && dataIo !== entryDataIo && element.getBoundingClientRect().top < entry.boundingClientRect.top) {
                    isHighest = false
                }
            })
            // set the hash to the highest element (only when scrollToHash (is "" or equal to entryDataIo))
            if(isHighest && (scrollToHash === "" || scrollToHash === entryDataIo)) {
                setScrollToHash("")
                setActiveHash(entryDataIo)
                history.replaceState(null, "", entryDataIo === "start" ? "/" : `#${entryDataIo}`)
            }
        } else {
            // remove elements from intersecting that are not intersecting
            if(index > -1) {
                setIntersecting(intersecting.filter(value => value !== entryDataIo))
            }
        }
    }, [intersecting, scrollToHash])


    return (
        <>
            <IntersectionObserverWrapper
                targetCallbacks={new Map(sections.map(v => [v, scrollCallback]))}
                threshold={[0, 1]}
                margin="0px 0px 0px 0px"
            />
            <div data-gsap="animate-menu" className={`lg:hidden fixed inset-0 z-20 translate-x-[110%] ${backdropBlur ? `supports-blur:bg-white/5 supports-blur:backdrop-blur-2xl  bg-sat-grad-blue-green-1-10-fallback-2 ` : `bg-sat-grad-blue-green-1-10-fallback-2`}  `}>
                <Menu isOpen={isOpen} setIsOpen={setIsOpen} languages={langs ?? {text: "en"}} backdropBlur={backdropBlur} languageSwitcher={languageSwitcher} >
                    {menuLinks?.map((link, index) => {
                        const cId = `${contentId}.menuLinkArray[${index}]`
                        const hash = link.href.split("#")[1]
                        if(link.highlight) {
                            return (
                                <div key={index} className="!mt-10 self-center">
                                    <Button11
                                        onClick={() => {
                                            setIsOpen(false)
                                            document.body.style.overflow = "auto"
                                        }}
                                        replace={true}
                                        isActive={activeHash.includes(hash)}
                                        type="next-link"
                                        contentId={cId}
                                    />
                                </div>
                                
                            )
                        } else {
                            return (
                                <Button7
                                    key={index} 
                                    onClick={() => {
                                        setIsOpen(false)
                                        document.body.style.overflow = "auto"
                                    }}
                                    replace={true}
                                    isActive={activeHash.includes(hash)}
                                    type="next-link"
                                    backdropBlur={backdropBlur}
                                    contentId={cId}
                                />
                            )
                        }
                    })}
                </Menu>
            </div>
            <div id="navbar" className={`fixed inset-x-0 z-10 rounded-full m-2 md:m-4 ${backdropBlur ? `supports-blur:bg-white/5 supports-blur:backdrop-blur-md  bg-sat-grad-blue-green-1-10-fallback-2 ` : `bg-sat-grad-blue-green-1-10-fallback-2`}  `}>
                <div className="flex justify-between items-center p-1 md:pr-3">
                        <Button3 link="/" replace={true} backdropBlur={backdropBlur} aria={"Move up"} />
                    <div className={`flex items-center lg:hidden mr-1.5 ` }>
                        <Button4 isOpen={isOpen} onClick={() => {
                            setIsOpen(true)
                            document.body.style.overflow = "hidden"
                        }} aria="Open menu"/>
                    </div>
                    <div className={`hidden lg:flex md:items-center lg:space-x-16 space-x-4`}>
                        <ul className="flex lg:-space-x-1.5 xl:space-x-4">
                            {navLinks?.map((link, index) => {
                                const cId = `${contentId}.navLinkArray[${index}]`
                                const hash = link.href.split("#")[1]
                                if(link.highlight) {
                                    return (
                                        <li key={index}>
                                            <Button10
                                                key={index} 
                                                type="next-link"
                                                onClick={() => {setIsOpen(false)}} 
                                                replace={true}
                                                isActive={activeHash.includes(hash)}
                                                contentId={cId}
                                            />
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li key={index}>
                                            <Button5
                                                key={index} 
                                                type="next-link"
                                                onClick={() => {setIsOpen(false)}} 
                                                replace={true}
                                                isActive={activeHash.includes(hash)} 
                                                backdropBlur={backdropBlur}
                                                highlight={link.highlight}
                                                contentId={cId}
                                            />
                                        </li>
                                    )

                                }
                            })}
                        </ul>
                        <div className={`${languageSwitcher ? `` : `hidden`} `}>
                            <Button6 text={languages?.text ?? "en"} disabled={false} backdropBlur={backdropBlur}/>
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
