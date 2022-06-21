import Link from "next/link"

type Props = {
    link: string,
    replace?: boolean
    backdropBlur: boolean
}

export default function Button3({link, replace, backdropBlur}: Props) {
    return  (
        <Link href={link} replace={replace}>
            <a className="group outline-none relative" aria-label="Move up" >
                <div className={` rounded-full group-active:scale-90 will-change-transform ${backdropBlur ? `supports-blur:group-hover:bg-white/10 supports-blur:group-focus-visible:bg-white/10 supports-blur:hover:backdrop-blur-md supports-blur:group-focus-visible:backdrop-blur-md group-hover:bg-sat-fallback-blue-2 group-focus-visible:bg-sat-fallback-blue-2` : `group-hover:bg-sat-fallback-blue-2 group-focus-visible:bg-sat-fallback-blue-2`}`}>
                    <div className=" bg-transparent rounded-full ">
                        <div className="relative bg-saturn-logo w-32 h-10 md:w-40 md:h-12 bg-no-repeat bg-contain bg-center">
                        <div className="absolute w-full h-full border-2 border-transparent bg-transparent top-0 group-focus-visible:border-white rounded-full"></div>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}