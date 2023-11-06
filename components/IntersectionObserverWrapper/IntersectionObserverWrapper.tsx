import { useEffect } from "react";

type ComponentProps = {
    targetCallbacks: Map<string, (entry: IntersectionObserverEntry, observer?: IntersectionObserver) => void>,
    threshold: number | number[],
    margin?: string
}

export default function IntersectionObserverWrapper({targetCallbacks, threshold, margin}: ComponentProps) {
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: margin ??'0px',
            threshold: threshold
        }
        const callback = (entries: IntersectionObserverEntry[], observer?: IntersectionObserver) => {
            entries.forEach((entry) => {
                const attribute = entry.target.getAttribute("id")
                const f = attribute ? targetCallbacks.get(attribute) : undefined
                if(f) f(entry, observer)
            });
          };
        const observer = new IntersectionObserver(callback, options);
        targetCallbacks.forEach((value, key) => {
            const targets = document.querySelectorAll(`[id="${key}"]`)
            targets.forEach((target) => {
                observer.observe(target);
            })
        });
        return () => {
            targetCallbacks.forEach((value, key) => {
                const targets = document.querySelectorAll(`[id="${key}"]`)
                targets.forEach((target) => {
                    observer.unobserve(target);
                })
            });
        }
    }, [targetCallbacks, threshold])
    return null
}
