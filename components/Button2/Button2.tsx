import Link from "next/link"

type Props = {
    text: string,
    link: string
}

export default function Button2({text, link}: Props) {
    return (
        <Link href={link}>
            <a className='no-underline bg-dark-blue rounded-full w-3/4 active:scale-90 hover:opacity-80 group outline-none inline-block'>
                <div className='font-roboto tracking-widest antialiased text-sm font-normal text-white py-0.5 border-2 group-focus-visible:border-light-blue-2 outline outline-1 outline-transparent border-transparent group-focus-visible:outline-dark-blue rounded-full '>
                    {text}
                </div>
            </a>
        </Link>
    )
}