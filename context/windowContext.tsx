import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';

const dimDefault = {
    height: 0,
    width: 0,
    scrollBarWidth: 0
}

const WindowContext = createContext(dimDefault)

type WindowContextWrapperProps = {
    children: React.ReactNode;
    debounceMs: number;
    setVh?: boolean;
}

// Assumptions:
// 1. Resize handler is debounced in such a way, that the url bar hide/show in mobile browsers only AFTER each action is complete
// 2. Scroll event is not triggered by orientation change or resize event (i.e. scroll position is maintained when the user resizes the window).
// 3. Url bar height does not change after the page is loaded, e.g. during orientation changes

export function WindowContextWrapper({children, debounceMs, setVh}: WindowContextWrapperProps) {
    const [dim, setDim] = useState(dimDefault)
    const [urlBarHeight, setUrlBarHeight] = useState(0)

    useEffect(() => {
        const controlDiv = document.createElement("div")
        const appendedDiv = document.body.appendChild(controlDiv);
        appendedDiv.style.position = "absolute"
        appendedDiv.style.height = "100vh"
        appendedDiv.style.width = "0"
        appendedDiv.id = "vh-control-height"
        return () => {
            appendedDiv.remove()
        }
    }, [])


    useEffect(() => {
        function handleResize() {
            if(typeof window !== undefined) {
                const controlElement = document.getElementById("vh-control-height")
                const controlHeight = controlElement?.clientHeight
                const h = window.innerHeight
                const w = window.innerWidth
                const cw = document.documentElement.clientWidth
                const isUrlBarNowHidden = controlHeight && controlHeight === h ? true : false
                const newUrlBarHeight = controlHeight && isUrlBarNowHidden ? controlHeight - h : urlBarHeight
                const heightWithoutUrlBar = controlHeight && isUrlBarNowHidden ? h - urlBarHeight : h
                setDim({
                    height: h,
                    width: w,
                    scrollBarWidth: w - cw
                })
                setUrlBarHeight(newUrlBarHeight)
                if(setVh) {
                    console.log("setting vh to " + heightWithoutUrlBar * 0.01)
                    const vh = heightWithoutUrlBar * 0.01
                    document.documentElement.style.setProperty('--vh', `${vh}px`);
                }
            }
        }
        const debouncedHandleWindowResize = debounce(handleResize, debounceMs, {trailing:true})
        handleResize()
        window.addEventListener('resize', debouncedHandleWindowResize)
        return () => {
            window.removeEventListener('resize', debouncedHandleWindowResize)
        }
    }, [debounceMs])

    return (
        <WindowContext.Provider value={dim}>
            {children}
        </WindowContext.Provider>
    )
}

export function useWindowContext() {
    return useContext(WindowContext)
}