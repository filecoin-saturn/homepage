import Link from "next/link"

type Props = {
    link: string,
}

export default function Button3({link}: Props) {
    return  (
        <Link href={link}>
            <a className="group outline-none" >
                <div className="group-focus-visible:bg-gradient-to-r bg-transparent from-gradient-turqouise to-gradient-blue rounded-full group-active:scale-90 ">
                    <div className="group-focus-visible:bg-dark-blue-2 bg-transparent rounded-full px-3 ">
                        <div className="bg-saturn-logo w-24 h-8 md:w-40 md:h-12 bg-no-repeat bg-contain bg-center group-hover:opacity-70">
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}