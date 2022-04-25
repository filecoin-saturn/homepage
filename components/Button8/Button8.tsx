import Link from "next/link"

type Props = {
    text: string,
    link: string
}

export default function Button8({text, link}: Props) {
    return (
        <Link href={link}>
            <a href="" target="_blank" className="outline-none group " >
                <div className="group-focus-visible:bg-gradient-to-r bg-transparent from-gradient-turqouise to-gradient-blue rounded-full p-0.5 group-active:scale-90">
                    <div className="group-focus-visible:bg-dark-blue-2 bg-transparent rounded-full px-3 py-1.5  ">
                        <div className="group-hover:text-white text-center ">
                            {text}
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}