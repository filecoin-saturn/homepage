import { createContext, useContext, useState, useEffect } from 'react';
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
    useEffect(() => {
        function handleResize() {
            if(typeof window !== undefined) {
                setDim({
                    height: window.innerHeight,
                    width: window.innerWidth,
                    scrollBarWidth: window.innerWidth - document.documentElement.clientWidth
                })
                if(setVh) {
                    const vh = window.innerHeight * 0.01
                    document.documentElement.style.setProperty('--vh', `${vh}px`);
                }
            }
        }
        const debouncedHandleWindowResize = debounce(handleResize, debounceMs)
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