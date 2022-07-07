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
                setDim({
                    height: h,
                    width: w,
                    scrollBarWidth: w - cw
                })
                if(controlHeight) {
                    const isUrlBarNowHidden = controlHeight === h
                    const newUrlBarHeight = isUrlBarNowHidden ? urlBarHeight : controlHeight - h
                    const heightWithoutUrlBar = controlHeight - newUrlBarHeight
                    setUrlBarHeight(newUrlBarHeight)
                    if(setVh) {
                        const vh = heightWithoutUrlBar * 0.01
                        document.documentElement.style.setProperty('--vh', `${vh}px`);
                    }
                }
                
            }
        }
        const debouncedHandleWindowResize = debounce(handleResize, debounceMs, {trailing:true})
        handleResize()
        window.addEventListener('resize', debouncedHandleWindowResize)
        return () => {
            window.removeEventListener('resize', debouncedHandleWindowResize)
        }
    }, [debounceMs, setVh, urlBarHeight])

    return (
        <WindowContext.Provider value={dim}>
            {children}
        </WindowContext.Provider>
    )
}

export function useWindowContext() {
    return useContext(WindowContext)
}