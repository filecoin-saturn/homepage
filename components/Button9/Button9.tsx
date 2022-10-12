import Link from "next/link";

type Props = {
    link: string
}

export default function Button9({link}: Props) {
    return (
        <Link href={link}>
            <a target="_blank" className="block bg-sat-blue-3 rounded-full p-2.5 md:p-[0.6875rem] hover:-rotate-45 hover:bg-sat-grad-blue-green-3 outline-none hover:shadow-colored group-hover:-rotate-45 transition-transform group-hover:bg-sat-grad-blue-green-3 group-hover:shadow-colored focus-visible:shadow-colored group-focus-visible:shadow-colored active:shadow-colored active:scale-90 ring-transparent ring-2 ring-inset focus-visible:ring-white focus-visible:-rotate-45 group-focus-visible:ring-white group-focus-visible:-rotate-45">
                <div className="bg-arrow-right bg-cover bg-no-repeat bg-center w-4 h-4 md:w-[1.125rem] md:h-[1.125rem]"></div>
            </a>
        </Link>
    )
}