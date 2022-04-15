import Link from "next/link"

type Props = {
    text: string,
    link: string
}

export default function Button1({text, link}: Props) {
    return (
        <Link href={link}>
            <a className='outline-none w-full group rounded-full inline-block no-underline text-center'>
                <div className='bg-gradient-to-r from-gradient-turqouise to-gradient-blue p-0.5 py-0.5 px-0.5 rounded-full active:scale-90'>
                    <div className='w-full text-sm rounded-full py-1 font-roboto font-normal bg-white md:py-1.5 tracking-widest antialiased group-hover:bg-transparent group-hover:text-white disabled:opacity-30 group-focus-visible:bg-transparent outline-none border-2 border-transparent group-focus-visible:border-[#D1ECFC] group-focus-visible:rounded-full group-focus-visible:text-white  '>
                        {text}
                    </div>
                </div>
            </a>
        </Link>
    )
}