import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function mainContentScrollAnimations(selectors: string) {
    const elements = document.querySelectorAll(selectors)
    const animations = Array.from(elements).map(e => {
        return [
            gsap.fromTo(e,
                {
                    opacity: 0,
                    y: -20
                },{
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: e,
                        start: "top bottom",
                        end: "bottom 80%",
                        scrub: 1,
                        toggleActions: "play reverse none none"
                    }
                }
            ), gsap.fromTo(e, 
                {
                    opacity: 1,
                    y: 0
                },{
                    opacity: 0,
                    y: -20,
                    scrollTrigger: {
                        trigger: e,
                        start: "top 20%",
                        end: "bottom top",
                        scrub: 1,
                        toggleActions: "play reverse none none"
                    }
                }
            )
        ]
    })
    return () => {
        animations.forEach(e => {
            e.forEach(a => {
                a.kill()
                a.scrollTrigger?.kill()
            })
        })
    }
}

export function footerScrollAnimations(selectors: string) {
    const elements = document.querySelectorAll(selectors)
    const animations = Array.from(elements).map(e => {
        return [gsap.fromTo(
            e,
            {
                opacity: 0,
                y: -20
            },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: e,
                    start: "bottom 120%",
                    end: "bottom bottom",
                    scrub: 1,
                    toggleActions: "play reverse none none"
                }
            }
        )]
    })
    return () => {
        animations.forEach(e => {
            e.forEach(a => {
                a.kill()
                a.scrollTrigger?.kill()
            })
        })
    }
}