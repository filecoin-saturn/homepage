import { createContext, useContext, useState, useEffect } from 'react';
import { debounce } from 'lodash';

const dimDefault = {
    height: 0,
    width: 0,
    scrollBarWidth: 0,
    urlBarHeight: 0
}

const WindowContext = createContext(dimDefault)

type WindowContextWrapperProps = {
    children: React.ReactNode;
    debounceMs: number;
    setVh?: boolean;
}

export function WindowContextWrapper({children, debounceMs, setVh}: WindowContextWrapperProps) {
    const [dim, setDim] = useState(dimDefault)
    useEffect(() => {
        function handleResize() {
            if(typeof window !== undefined) {
                setDim({
                    height: window.innerHeight,
                    width: window.innerWidth,
                    scrollBarWidth: window.innerWidth - document.documentElement.clientWidth,
                    urlBarHeight: dim.urlBarHeight
                })

            }
        }
        const debouncedHandleWindowResize = debounce(handleResize, debounceMs)
        handleResize()
        window.addEventListener('resize', debouncedHandleWindowResize)
        return () => {
            window.removeEventListener('resize', debouncedHandleWindowResize)
        }
    }, [debounceMs])

    useEffect(() => {
        // measure url bar height
        // on page load quickly scroll down and up again
        if(typeof window !== undefined) {
            // Save current scroll position
            const oldScrollX = window.scrollX
            const oldScrollY = window.scrollY
            // Hide url bar
            window.scrollTo(0, document.body.scrollHeight)
            // Measure max viewport height
            const maxH = window.innerHeight
            // Scroll back
            window.scrollTo(oldScrollX, oldScrollY)
            // Calculate url bar height
            alert(maxH - window.innerHeight)
            setDim({
                height: dim.height,
                width: dim.width,
                scrollBarWidth: dim.scrollBarWidth,
                urlBarHeight: maxH - window.innerHeight
            })
        }
        // scenario: viewport size changes. Directly after that we can measure the scroll position. When the scroll position changed we know that the addres bar hid / showed. 
    }, [])

    return (
        <WindowContext.Provider value={dim}>
            {children}
        </WindowContext.Provider>
    )
}

export function useWindowContext() {
    return useContext(WindowContext)
}