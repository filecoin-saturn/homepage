import Link from "next/link"

type Props = {
    link: string,
    colorMode: "light" | "dark"
}

export default function Button5({link, colorMode}: Props) {
    return colorMode === "light" ? (
        <Link href={link}>
            <a className="group outline-none" >
                <div className="group-focus-visible:bg-gradient-to-r bg-transparent from-gradient-turqouise to-gradient-blue rounded-full p-0.5 group-active:scale-90 ">
                    <div className="group-focus-visible:bg-light-blue-2 bg-transparent rounded-full px-3 py-1.5 ">
                        <div className="bg-nav-logo w-16 h-6 md:w-20 md:h-7 bg-no-repeat bg-contain bg-center group-hover:opacity-70">
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    ) : (
        <Link href={link}>
            <a className="group outline-none" >
                <div className="group-focus-visible:bg-gradient-to-r bg-transparent from-gradient-turqouise to-gradient-blue rounded-full p-0.5 group-active:scale-90 ">
                    <div className="group-focus-visible:bg-dark-blue-2 bg-transparent rounded-full px-3 py-1.5 ">
                        <div className="bg-filecoin-saturn-footer w-16 h-6 md:w-20 md:h-7 bg-no-repeat bg-contain bg-center group-hover:opacity-70">
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}