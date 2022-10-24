import React, { useEffect, useRef, useState } from 'react';
import 'asciinema-player/dist/bundle/asciinema-player.css';
import { useWindowContext } from '../../context/windowContext';
import {cloneDeep} from 'lodash'

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
    play?: boolean;
    // END asciinemaOptions
};

function AsciinemaPlayer ({src, className, play, ...asciinemaOptions}: AsciinemaPlayerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [player, setPlayer] = useState<typeof import("asciinema-player")>()
    const [instance, setInstance] = useState<Record<string, unknown> & {dispose: () => void, play: () => void, pause: () => void, seek: (number: number) => void}>()
    const windowContext = useWindowContext()
    useEffect(() => {
        import("asciinema-player").then(p => {setPlayer(p)})
        return () => {setPlayer(undefined)}
    }, [])
    useEffect(() => {
        const currentRef = ref.current
        const i = play ? player?.create(src, currentRef, asciinemaOptions) : undefined
        return () => {
            i?.dispose()
        }
    }, [src, player, asciinemaOptions, windowContext.width, play]);

    return <div className={className} ref={ref} />;
}

export default AsciinemaPlayer