import Link from "next/link"

type Props = {
    text: string,
    link: string
}

export default function Button3({text, link}: Props) {
    return (
        <Link href={link}>
            <a className='no-underline -mx-2.5 inline-block outline-none group group-active:scale-90'>
                <div className='group-focus-visible:bg-gradient-background-learn bg-contain bg-no-repeat bg-center active:scale-90  rounded-full p-0.5'>
                    <div className='font-inter bg-white group-focus-visible:bg-transparent py-1.5 focus-visible:outline-none px-2.5 text-xs md:text-sm antialiased underline underline-offset-1 italic hover:text-light-blue disabled:opacity-25 active:scale-90'>
                        {text}
                    </div>
                </div>
            </a>
        </Link>
    )
}