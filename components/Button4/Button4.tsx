import Link from "next/link"

type Props = {
    imgUrl: string,
    link: string
}

export default function Button4({imgUrl, link}: Props) {
    return (
        <Link href={link}>
            <a className='group outline-none md:w-full md:h-full active:scale-90 disabled:opacity-50 hover:opacity-80'
                    target="_blank" 
                    rel='noreferrer' 
                    href={link}
                  >
                    <div className="group-focus-visible:bg-icon-border bg-contain bg-no-repeat bg-center p-1">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-no-repeat bg-center bg-contain" style={{backgroundImage: `url('${imgUrl}')`}}>
                        </div> 
                    </div> 
                  </a>
        </Link>
    )
}