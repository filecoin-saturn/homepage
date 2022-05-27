import type { NextPage } from 'next'
import Intro from  '../content/en/index/intro-section.mdx'
import WhatIsIt from '../content/en/index/what-is-it-section.mdx'
import WhySaturn from '../content/en/index/why-saturn-section.mdx'
import GetStarted from '../content/en/index/get-started-section.mdx'
import CustomProse from '../components/CustomProse/CustomProse'
import CallToActionButtons from '../content/en/index/intro'
import CallToActionButtonDownload from '../content/en/index/get-started'
import NavBar from '../content/en/index/NavBar'
import Footer from '../content/en/index/Footer'
import FeaturesIntro from '../content/en/index/features-intro.mdx'
import Features from '../content/en/index/Features'


const Home: NextPage = () => {
  return (
    <div className='mx-auto text-center w-full min-h-[200rem] overflow-hidden'>
      <div className='fixed inset-0 lg:bg-desktop-background bg-mobile-background bg-no-repeat bg-cover bg-center -z-10'></div>
      <NavBar />
        <div id='start' className='mx-auto px-9 text-left max-w-xs md:max-w-sm lg:max-w-[30rem] flex flex-col h-[100vh] justify-end lg:py-24 lg:mx-20 '>
          <CustomProse>
            <Intro />
          </CustomProse>
          <div className='flex w-full items-stretch space-x-3 lg:space-x-6 mb-8 '>
            <CallToActionButtons/>
          </div>
        </div> 
        <div id='whatisit' className='mx-auto pl-9 pr-7 text-left max-w-md md:max-w-sm lg:max-w-[40rem] h-[100vh] py-24 flex flex-col items-end justify-end lg:bottom-0 lg:my-20 lg:translate-x-1/4 '>
          <CustomProse>
            <WhatIsIt />
          </CustomProse>
        </div> 
        <div id="features" className='py-32 md:py-20 w-full mx-auto flex flex-col justify-center items-center lg:max-w-5xl'>
          <div className='max-w-xl w-full flex justify-center sm:justify-start md:justify-center md:px-0 sm:px-14 md:mr-32 lg:mr-0 md:max-w-6xl lg:justify-start lg:mx-6 lg:max-w-4xl'>
            <div className='flex justify-center px-9 sm:px-0  max-w-[20rem] sm:max-w-[16rem] md:max-w-xs lg:max-w-sm text-left '>
              <CustomProse>
                <FeaturesIntro />
              </CustomProse>
            </div>
          </div>
          <div className='px-9 lg:px-0 mt-8 flex justify-center'>
            <Features/>
          </div>
        </div>
        <div id='why' className='mx-auto px-9 text-left max-w-xs md:max-w-sm lg:max-w-2xl h-[100vh] py-24 flex flex-col items-end justify-end md:justify-center md:items-center'>
          <CustomProse>
            <WhySaturn />
          </CustomProse>
        </div> 
        <div id='getstarted' className='mx-auto px-9 text-center max-w-[17rem] md:max-w-sm lg:max-w-[34rem] h-[100vh] py-24 flex flex-col justify-center items-center'>
          <CustomProse>
            <GetStarted />
          </CustomProse>
          <div className='flex items-stretch mx-auto mb-8 '>
            <CallToActionButtonDownload/>
          </div>
        </div>  
        <Footer/>
    </div>
  )
}

export default Home
