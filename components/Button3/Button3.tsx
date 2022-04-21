import Link from "next/link"

type Props = {
    text: string,
    link: string
}

export default function Button3({text, link}: Props) {
    return (
        <Link href={link}>
            <a className='no-underline -mx-2.5 inline-block outline-none group group-active:scale-90'>
                <div className='group-focus-visible:bg-gradient-to-r bg-transparent from-gradient-turqouise to-gradient-blue rounded-full p-0.5 group-active:scale-90 '>
                    <div className='font-inter bg-white rounded-3xl group-focus-visible:bg-light-blue-2 py-1.5 md:py-1 focus-visible:outline-none px-2.5 text-sm xl:text-base antialiased underline underline-offset-1 italic group-hover:text-light-blue disabled:opacity-25 active:scale-90'>
                        {text}
                    </div>
                </div>
            </a>
        </Link>
    )
}