import type { NextPage } from 'next'
import NavBar from '../components/NavBar/NavBar'
import Image from 'next/image'
import Link from 'next/link'
import saturn from "../public/saturn.png"
import desktopApp from "../public/desktop-app.png"
import { useState } from 'react'
import { useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import DownloadCard from '../components/DownloadCard/DownloadCard'

const Home: NextPage = () => {
    const title = "Filecoin Saturn"
    const titleDescription = "Download the Filecoin station to participate in the Saturn Network and start earning Filecoin!"
    const learnMore = "Learn more"
    const download = "Download"
    const titleHIW = "How it works"
    const descriptionHIW ="Explanation about Saturn Network,  what problem does it solve? Very short explanation around this size eventually it could be a tiny bit of text in which the Saturn Network is briefly explained."
    const downloadDescription ="Participate in the Saturn network by running a Filecoin Gateway or Station app."
    const setup = "Setup / Installation"
    const setupDescription = "Install the App, connect the wallet and specify the available system resources."
    const earn = "Earn filecoin"
    const getStarted ="Get Started"
    const earnDescription = "Serve content to the network and earn filecoin."
    const titleDownload = "Download"
    const descriptionDownload = "You can either be a gateway operator or a station operator, depending on your resources."
    const downloadHere = "Download the app here"



    const card1 = {
      bgImage: "bg-card-logo-gateway",
      title: "Gateway Operator",
      subTitle: "VPS / DC / Office Server",
      requirements: "Requirements",
      requirementsContent: ["Static IP", "Docker", "Very good bandwidth", "TLS Cert"],
      downloadButton: "Instructions",
      marginTopDownloadButton: "mt-8 sm:mt-9",
      id: "first-item",
      disabled: false,
      idDownloadButton: "1"

    }
  return (
    <>
      <NavBar/>
        <div id='intro' className='w-full relative overflow-visible'>
          <div className=' h-full w-full sticky -top-[14rem] sm:-top-[24rem] md:-top-[24rem] lg:-top-[28rem] xl:-top-[38rem] -z-20 -ml-72 -mt-20 sm:-ml-52 -mb-[26rem] sm:-mb-[90vh] lg:-mb-[100vh] xl:-mb-[110vh]'>
            <div className='relative md:w-[100%] min-w-[42rem] h-[28rem] sm:h-[90vh] lg:h-[100vh] xl:h-[110vh] -ml-16 md:mt-14 lg:mt-20 lg:-ml-28 xl:-ml-60      '>
                  <Image src={saturn} layout="fill" objectFit="contain" objectPosition="" alt="Saturn Network" />        
            </div>
          </div>
          <div  className=' flex items-end sm:items-center w-full h-[32.5rem] mt-8 sm:h-[90vh] lg:h-[100vh] sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto text-center  '>
            <div className='mx-auto pr-10 pl-8  sm:px-12 text-left max-w-xs lg:max-w-sm sm:right-0 sm:mr-1 sm:-translate-y-1/3 md:-translate-y-1/2 '>
              <div className='font-inter font-semibold text-[1.7rem] antialiased md:text-3xl lg:text-4xl'>
                {title}
              </div>
              <div className='font-source-serif-pro font-normal antialiased leading-tight text-lg md:mt-2 md:leading-tight'>
                {titleDescription}
              </div>
              <div className='mt-2 md:mt-0 -ml-2 w-fit'>
                <Link href="#howitworks">
                    <a className='outline-none group group-active:scale-90 '>
                      <div className='group-focus-visible:bg-gradient-background-learn bg-contain bg-no-repeat bg-center active:scale-90  rounded-3xl p-0.5'>
                        <div className='font-inter bg-white group-focus-visible:bg-transparent py-1.5 focus-visible:outline-none px-2.5 text-xs md:text-sm antialiased underline underline-offset-1 italic hover:text-light-blue disabled:opacity-25 active:scale-90'>
                          {learnMore}
                        </div>
                      </div>
                    </a>
                  </Link>
              </div>
              <div className='hidden sm:flex text-center relative mt-4 '>
                <Link href="/#download">
                  <a className='outline-none w-full group rounded-3xl'>
                    <div className='bg-gradient-to-r from-gradient-turqouise to-gradient-blue p-0.5 py-0.5 px-0.5 rounded-3xl active:scale-90'>
                      <div className='w-full text-sm rounded-full py-1 font-roboto font-normal bg-white md:py-1.5 tracking-widest antialiased group-hover:bg-transparent group-hover:text-white disabled:opacity-30 group-focus-visible:bg-transparent outline-none border-2 border-transparent group-focus-visible:border-[#D1ECFC] group-focus-visible:rounded-3xl group-focus-visible:text-white  '>
                        {download}
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <div className='flex sm:flex-col space-x-4 sm:space-x-0 sm:space-y-4 mt-10 sm:mt-2 sm:absolute sm:right-0 sm:top-0 sm:translate-y-1/2  sm:mr-2 xl:mr-0'>
                  <a className='group outline-none md:w-full md:h-full active:scale-90 disabled:opacity-50 hover:opacity-80'
                    target="_blank" 
                    rel='noreferrer' 
                    href="https://filecoin.io" 
                  >
                    <div className="group-focus-visible:bg-icon-border bg-contain bg-no-repeat bg-center p-1">
                        <div className="bg-filecoin-logo w-5 h-5 sm:w-6 sm:h-6 bg-no-repeat bg-center bg-contain ">
                        </div> 
                    </div> 
                  </a>
                  <a className='group md:w-full md:h-full outline-none active:scale-90 disabled:opacity-50 hover:opacity-80'
                    target="_blank" 
                    rel='noreferrer' 
                    href="https://protocol.ai/" 
                  >
                    <div className="group-focus-visible:bg-icon-border bg-contain bg-no-repeat bg-center p-1">
                        <div className="bg-protocol-labs-logo mt-0.5 w-5 h-5 sm:w-6 sm:h-6 bg-no-repeat bg-center bg-contain ">
                        </div> 
                    </div> 
                  </a>
              </div>
            </div>
          </div>
          <div id="howitworks" className='pt-32 md:pt-36 lg:pt-48 sm:mt-4 '>
            <div className='mx-auto pr-10 pl-8 text-left justify-center max-w-xs sm:flex sm:space-x-4 sm:max-w-xl md:max-w-3xl lg:max-w-4xl md:space-x-16 '>
              <div className='flex-none font-inter font-semibold text-[1.7rem] antialiased md:text-3xl lg:text-4xl'>
                {titleHIW}
              </div>
              <div className='font-source-serif-pro font-normal antialiased max-w-md lg:max-w-lg sm:mt-2 leading-tight text-lg md:mt-2 md:leading-tight'>
                {descriptionHIW}
              </div>
            </div>
            <div className=' w-full mx-auto mt-4 sm:mt-0 px-2 mb-10 md:mt-20'>
              <div className='mx-auto text-center justify-center sm:items-center max-w-5xl relative sm:flex space-x-2 md:space-x-4 lg:space-x-14 mt-4'>
                  <div className=' mx-auto block flex-grow mt-10 sm:mt-0 '>
                    <div className='overflow-hidden rounded-xl shadow-xl'>
                      <Image src={desktopApp} layout="responsive" objectFit="contain" alt="Filecoin Station desktop application"/>
                    </div>
                  </div>
                <div className='mx-auto mt-14 sm:mt-8 max-w-xs md:max-w-md px-4 sm:px-0 '>
                  <div className='flex space-x-4 text-left '>
                    <div className='flex flex-col  '>
                        <div className='bg-regular-blue outline-2 outline outline-regular-blue/30 rounded-full min-w-[0.75rem] min-h-[0.75rem] '>
                        </div>
                        <div className='flex-grow my-1 w-1 border-r-regular-blue opacity-30 border-r-[2px] pl-[0.3rem]'>
                        </div>
                    </div>
                    <div className='px-4 mb-8 -mt-2'>
                      <div className='font-inter font-medium text-xl'>
                        {download}
                      </div>
                      <div className='font-source-serif-pro font-normal antialiased max-w-md lg:max-w-lg sm:mt-2 leading-tight text-lg md:mt-2 md:leading-tight'>
                        {downloadDescription}
                      </div>
                      <div className='w-fit -ml-3'>
                        <Link href="/#download">
                          <a className="group outline-none active:scale-90 disabled:opacity-50 hover:text-light-blue group-focus-visible:bg-filecoin-saturn-border bg-contain bg-no-repeat bg-center">
                            <div className="group-focus-visible:bg-gradient-to-r bg-transparent from-gradient-turqouise to-gradient-blue rounded-3xl p-0.5 group-active:scale-90">
                                <div className="group-focus-visible:bg-light-blue-2 bg-transparent rounded-3xl px-3 py-1.5  ">
                                    <div className="underline font-inter italic underline-offset-[0.18rem] text-sm antialiased ">
                                      {downloadHere}
                                    </div>
                                </div>
                            </div>
                          </a>  
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='flex space-x-4 text-left '>
                    <div className='flex flex-col '>
                        <div className='bg-regular-blue outline-2 outline outline-regular-blue/30 rounded-full min-w-[0.75rem] min-h-[0.75rem] '>
                        </div>
                        <div className='flex-grow my-1 w-1 border-r-regular-blue opacity-30 border-r-[2px] pl-[0.3rem]'>
                        </div>
                    </div>
                    <div className='px-4 mb-8 -mt-2'>
                      <div className='font-inter font-medium text-xl'>
                        {setup}
                      </div>
                      <div className='font-source-serif-pro font-normal antialiased max-w-md lg:max-w-lg sm:mt-2 leading-tight text-lg md:mt-2 md:leading-tight'>
                        {setupDescription}
                      </div>
                    </div>
                  </div>
                  <div className='flex space-x-4 text-left '>
                    <div className='w-3'>
                      <div className='bg-regular-blue outline-2 outline outline-regular-blue/30 rounded-full w-3 h-3 '>
                      </div>
                    </div>
                    <div className='px-4 -mt-2'>
                      <div className='font-inter font-medium text-xl'>
                        {earn}
                      </div>
                      <div className='font-source-serif-pro font-normal antialiased max-w-md lg:max-w-lg sm:mt-2 leading-tight text-lg md:mt-2 md:leading-tight'>
                        {earnDescription}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mx-auto max-w-[11rem] mt-14'>
                <div className=' mx-auto w-full hidden sm:block text-center relative mt-4 mr-4'>
                  <Link href="/#download">
                    <a className='outline-none w-full group'>
                      <div className='w-full bg-gradient-to-r from-gradient-turqouise to-gradient-blue p-0.5 py-0.5 px-0.5 rounded-3xl mr-4 active:scale-90'>
                        <div className='w-full text-sm rounded-full py-1 font-roboto font-normal bg-white md:py-1.5 tracking-widest antialiased group-hover:bg-transparent group-hover:text-white disabled:opacity-30 group-focus-visible:bg-transparent outline-none border-2 border-transparent group-focus-visible:border-[#D1ECFC] group-focus-visible:rounded-3xl group-focus-visible:text-white  '>
                          {getStarted}
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='sm:mt-4 mt-10 pb-24 md:mx-auto md:max-w-3xl overflow-visible  '>
            <div className='md:mx-auto px-4 md:px-4 text-left md:text-center max-w-md  '>
              <div id="download" className='pt-32 md:pt-36 lg:pt-48  flex-none font-inter font-semibold text-[1.7rem] antialiased md:text-3xl lg:text-4xl'>
                {titleDownload}
              </div>
              <div className='font-source-serif-pro lg:text-center lg:mx-auto font-normal antialiased max-w-md lg:max-w-lg sm:mt-4 leading-tight text-lg md:leading-tight'>
                {descriptionDownload}
              </div>
            </div>
            <div className='flex my-10 md:min-w-[30rem] overflow-scroll space-x-10 mx-4 no-scrollbar snap-x snap-mandatory  '>
              <DownloadCard cardContent={card1} />
            </div>
          </div>
        </div>
        <Footer/>
    </>
  )
}
export default Home
    