import Link from "next/link"

type Props = {
    link: string
}

export default function Button9({link}: Props) {
    return (
        <Link href={link}>
            <a rel="noreferrer" target="_blank" className="active:scale-90 group outline-none">
                <div className="group-focus-visible:bg-gradient-to-r bg-transparent from-gradient-turqouise to-gradient-blue rounded-full p-0.5 group-active:scale-90">
                    <div className="group-focus-visible:bg-dark-blue-2 bg-transparent rounded-full px-3 py-1.5  ">
                        <div className="bg-protocol-labs-footer bg-center bg-contain bg-no-repeat h-4 w-24 sm:mt-0 lg:ml-0 group-hover:opacity-70">
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}