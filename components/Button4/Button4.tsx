import Link from "next/link"

type Props = {
    imgUrl: string,
    link: string
}

export default function Button4({imgUrl, link}: Props) {
    return (
        <Link href={link}>
            <a className='group outline-none md:w-full md:h-full active:scale-90 disabled:opacity-50 hover:opacity-80 p-1'
                    target="_blank" 
                    rel='noreferrer' 
                    href={link}
                  >
                    <div className="group-focus-visible:bg-gradient-to-r bg-transparent from-gradient-turqouise to-gradient-blue rounded-full p-0.5 group-active:scale-90 ">
                        <div className="group-focus-visible:bg-light-blue-2 bg-transparent rounded-full p-1.5 ">
                            <div className=" w-[1.5rem] h-[1.5rem] sm:w-8 sm:h-8 bg-no-repeat bg-center bg-contain group-hover:opacity-70" style={{backgroundImage: `url('${imgUrl}')`}}>
                            </div> 
                        </div>
                    </div> 
                  </a>
        </Link>
    )
}



