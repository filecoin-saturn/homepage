import type { NextPage } from 'next'
import NavBar from '../components/NavBar/NavBar'
import Image from 'next/image'
import Link from 'next/link'
import saturn from "../public/saturn.png"

const Home: NextPage = () => {
    const title = "Filecoin Saturn"
    const titleDescription = "Download the Filecoin station to participate in the Saturn Network and start earning Filecoin!"
    const learnMore = "Learn more"
    const download = "Download"

  return (
    <>
      <NavBar/>
        <div className='h-full w-full -z-50 relative'>
          <div className=' h-full w-full sticky -top-[17rem] sm:-top-[26rem] md:-top-[26rem] lg:-top-[30rem] xl:-top-[40rem] -z-20 -ml-72 -mt-20 sm:-ml-52 -mb-[28rem] sm:-mb-[90vh] lg:-mb-[100vh] xl:-mb-[110vh]'>
            <div className='relative md:w-[100%] min-w-[42rem] h-[28rem] sm:h-[90vh] lg:h-[100vh] xl:h-[110vh] -ml-16 md:mt-14 lg:mt-20 lg:-ml-28 xl:-ml-60      '>
                  <Image src={saturn} width={10} height={10} layout={"fill"} objectFit={"contain"} objectPosition="" alt={"Saturn Network"} />        
            </div>
          </div>
          <div className=' flex items-end sm:items-center w-full h-[32.5rem] mt-8 sm:h-[90vh] lg:h-[100vh] sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto text-center  '>
            <div className='mx-auto pr-10 pl-8  sm:px-12 text-left max-w-xs lg:max-w-sm z-50 sm:right-0 sm:mr-1 sm:-translate-y-1/3 md:-translate-y-1/2 '>
              <div className='font-inter font-semibold text-[1.7rem] antialiased md:text-3xl lg:text-4xl'>
                {title}
              </div>
              <div className='font-source-serif-pro font-normal antialiased leading-tight text-lg md:mt-2 md:leading-tight'>
                {titleDescription}
              </div>
              <div className='mt-2 md:mt-0'>
                <Link href={"#howitworks"}>
                  <a className='font-inter text-sm md:text-xs antialiased underline underline-offset-1 italic'>
                    {learnMore}
                  </a>
                </Link>
              </div>
              <div className='hidden sm:flex text-center relative mt-4 bg-gradient-to-r from-[#39C0CC] to-[#078FFF] p-0.5 py-0.5 px-0.5 rounded-3xl mr-4'>
                <button className='w-full text-sm rounded-2xl py-1 font-roboto font-normal bg-white md:py-1.5 tracking-widest  '>
                  {download}
                </button>
              </div>
              <div className='flex sm:flex-col space-x-8 sm:space-x-0 sm:space-y-4 mt-10 sm:mt-0 sm:absolute sm:right-0 sm:top-0 sm:translate-y-full sm:mr-2 xl:mr-0'>
                <div className='bg-filecoin-logo w-6 h-6 bg-no-repeat bg-center bg-contain'>
                </div>
                <div className='bg-protocol-labs-logo w-6 h-6 bg-no-repeat bg-center bg-contain'>
                </div>
              </div>
            </div>
          </div>
          <div className='h-[150rem]'>
          </div>
        </div>
    </>
  )
}

export default Home

