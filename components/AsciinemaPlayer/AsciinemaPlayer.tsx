import React, { useEffect, useRef, useState } from 'react';
import 'asciinema-player/dist/bundle/asciinema-player.css';
import { useWindowContext } from '../../context/windowContext';

type AsciinemaPlayerProps = {
    src: string;
    className?: string;
    // START asciinemaOptions
    cols?: string;
    rows?: string;
    autoPlay?: boolean
    preload?: boolean;
    loop?: boolean | number;
    startAt?: number | string;
    speed?: number;
    idleTimeLimit?: number;
    theme?: string;
    poster?: string;
    fit?: string;
    fontSize?: string;
    // END asciinemaOptions
};

function AsciinemaPlayer ({src, className, ...asciinemaOptions}: AsciinemaPlayerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [player, setPlayer] = useState<typeof import("asciinema-player")>()
    const windowContext = useWindowContext()
    useEffect(() => {
        import("asciinema-player").then(p => {setPlayer(p)})
    }, [])
    useEffect(() => {
        const currentRef = ref.current
        const instance = player?.create(src, currentRef, asciinemaOptions);
        return () => {instance?.dispose()}
    }, [src, player, asciinemaOptions, windowContext.width]);

    return <div className={className} ref={ref} />;
}

export default AsciinemaPlayer