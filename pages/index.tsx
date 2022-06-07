import type { NextPage } from 'next'
import Intro from  '../content/en/index/intro-section.mdx'
import WhatIsIt from '../content/en/index/what-is-it-section.mdx'
import WhySaturn from '../content/en/index/why-saturn-section.mdx'
import GetStarted from '../content/en/index/get-started-section.mdx'
import CustomProse from '../components/CustomProse/CustomProse'
import CallToActionButtons from '../content/en/index/Intro'
import CallToActionButtonDownload from '../content/en/index/GetStarted'
import NavBar from '../content/en/index/NavBar'
import Footer from '../content/en/index/Footer'
import FeaturesIntro from '../content/en/index/features-intro.mdx'
import Features from '../content/en/index/Features'
import Experience from '../threejs/components/Experience/Experience'
import { useEffect, useLayoutEffect, useState } from 'react'
import { getGPUTier } from 'detect-gpu';


import { mainContentScrollAnimations, footerScrollAnimations } from '../animations/scroll'

const Home: NextPage = () => {

  const [tierState , setTierState] = useState(0)
  useEffect(() => {
    (async () => {
      const gpuTier = await getGPUTier();
      setTierState(gpuTier.tier)
    })();
  })
  const backdropBlur = tierState >= 2 ? true : false

  useLayoutEffect(() => {
    const cleanup = mainContentScrollAnimations(`[data-gsap="animate"], [data-gsap="animate-children"] p, [data-gsap="animate-children"] h1, [data-gsap="animate-children"] h2, [data-gsap="animate-children"] h3, [data-gsap="animate-children"] h4`)
    return () => {
      cleanup()
    }
  }, [])
  
  return (
    <div  className='mx-auto text-center w-full overflow-hidden'>
      <div className='fixed -z-10 inset-0 bg-star-background-plain bg-no-repeat bg-cover bg-center'>
        <Experience />
      </div>
      <NavBar backdropBlur={backdropBlur} />
      <div data-io="start" id="start" className='w-full h-0'></div>
      <div className='mx-auto px-6 md:pb-12 text-left max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[60rem] h-[100vh] flex flex-col justify-end lg:ml-20'>
        <div data-gsap="animate-children" className=' max-w-xs md:max-w-sm lg:max-w-[30rem] mr-auto'>
          <CustomProse>
            <Intro />
          </CustomProse>
          <div data-gsap="animate" className='flex w-full items-stretch space-x-3 lg:space-x-6 mb-12'>
            <CallToActionButtons backdropBlur={backdropBlur}/>
          </div>
        </div> 
      </div>
      <div data-io="whatisit" id="whatisit" className='w-full h-0'></div>
      <div className='mx-auto px-6 md:pb-12 text-left max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[60rem]'>
        <div data-gsap="animate-children" className='mt-24 lg:mt-32 max-w-xs md:max-w-sm lg:max-w-[30rem] ml-auto  '>
          <CustomProse>
            <WhatIsIt />
          </CustomProse>
        </div> 
      </div> 
      <div data-io="features" id="features" className='w-full h-0'></div>
      <div className='mt-24 px-6 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[60rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full my-8 '>
            <CustomProse>
              <FeaturesIntro />
            </CustomProse>
          </div>
        <div className='px-2 w-full lg:px-0 mt-8'>
          <Features animation={() => {return mainContentScrollAnimations(`[data-gsap="animate"], [data-gsap="animate-children"] p, [data-gsap="animate-children"] h1, [data-gsap="animate-children"] h2, [data-gsap="animate-children"] h3, [data-gsap="animate-children"] h4`)}} backdropBlur={backdropBlur}/>
        </div>
      </div>
      <div data-io="why" id="why" className='w-full h-0'></div>
      <div data-gsap="animate-children" className='mx-auto px-6 text-left max-w-xs md:max-w-sm lg:max-w-2xl mt-24 md:mt-56 flex flex-col items-end justify-end md:justify-center md:items-center'>
        <CustomProse>
          <WhySaturn />
        </CustomProse>
      </div> 
      <div data-io="getstarted" id="getstarted" className='w-full h-0'></div>
      <div data-gsap="animate-children" className='mx-auto px-6 text-center max-w-[17rem] md:max-w-sm lg:max-w-[34rem] mt-36 md:my-52 flex flex-col justify-center items-center'>
        <CustomProse>
          <GetStarted />
        </CustomProse>
        <div data-gsap="animate" className='flex items-stretch mx-auto mb-8 '>
          <CallToActionButtonDownload/>
        </div>
      </div>
      <Footer backdropBlur={backdropBlur} animation={() => {return footerScrollAnimations(`[data-gsap="animate"], [data-gsap="animate-children"] p, [data-gsap="animate-children"] h1, [data-gsap="animate-children"] h2, [data-gsap="animate-children"] h3, [data-gsap="animate-children"] h4`)}}/>
    </div>
  )
}

export default Home