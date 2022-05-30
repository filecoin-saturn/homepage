import { useEffect } from "react";

type ComponentProps = {
    targetCallbacks: Map<string, (entry: IntersectionObserverEntry, observer?: IntersectionObserver) => void>,
    threshold: number | number[],
    children: React.ReactNode
}

export default function IntersectionObserverWrapper({targetCallbacks, threshold, children}: ComponentProps) {
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: threshold
        }
        const callback = (entries: IntersectionObserverEntry[], observer?: IntersectionObserver) => {
            entries.forEach((entry) => {
                const f = targetCallbacks.get(entry.target.id)
                if(f) f(entry, observer)
            });
          };
        const observer = new IntersectionObserver(callback, options);
        targetCallbacks.forEach((value, key) => {
            const target = document.querySelector(`#${key}`);
            if(target) observer.observe(target);
        });
        return () => {
            targetCallbacks.forEach((value, key) => {
                const target = document.querySelector(`#${key}`);
                if(target) observer.unobserve(target);
            });
        }
    }, [targetCallbacks])
    return (
        <>
            {children}
        </>
    )
}