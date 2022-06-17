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
import Saturn from '../threejs/components/Saturn/Saturn'
import { useEffect, useLayoutEffect, useState } from 'react'
import { getGPUTier } from 'detect-gpu';
import Head from 'next/head'
import Roadmap from '../content/en/index/roadmap-section.mdx'
import RoadmapFirstStep from "../content/en/index/roadmap-first-step.mdx"
import RoadmapSecondStep from "../content/en/index/roadmap-second-step.mdx"
import RoadmapThirdStep from "../content/en/index/roadmap-third-step.mdx"
import RoadmapFourthStep from "../content/en/index/roadmap-fourth-step.mdx"
import WhySaturnIntroSection from "../content/en/index/why-saturn-intro-section.mdx"


import { backgroundScrollAnimations } from '../animations/scroll'
import Network from '../threejs/components/Network/Network'
import ListBigDots from '../components/ListBigDots/ListBigDots'
import { useFeatureContext } from '../context/featureContext'

const Home: NextPage = () => {
  const features = useFeatureContext()
  const [tierState , setTierState] = useState(0)
  useEffect(() => {
    (async () => {
      const gpuTier = await getGPUTier();
      setTierState(gpuTier.tier)
    })();
  })

  useLayoutEffect(() => {
    const cleanup2 = backgroundScrollAnimations(`[data-gsap="bg"]`)
    return () => {
      cleanup2()
    }
  }, [])
  
  return (
<>
    <Head>
      <title>Filecoin Saturn</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="theme-color" content="#ffffff"/>
    </Head>
    <div className='mx-auto text-center w-full overflow-hidden'>
      <div data-gsap="bg" className='fixed -z-20 inset-x-0 top-0 h-[150%] bg-sat-blue-2 inset-0 bg-star-background-plain bg-cover bg-no-repeat bg-center'>
        <div className='bg-gradient-to-b from-transparent to-black w-full h-full'>
          <div className='bg-sat-blue-4 bg-opacity-40 mix-blend-overlay w-full h-full'></div>
        </div>
        </div>
        <NavBar backdropBlur={features.backdropBlur} />
        <div data-io="start" id="start" className='w-full h-0'></div>
        <div className='h-[calc(var(--vh,_1vh)*100)] w-full relative'>
          <div className='mx-auto px-6 md:pb-12 text-left max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[60rem] h-full flex flex-col justify-end lg:ml-20'>
            <div data-gsap="animate-children" className=' max-w-xs md:max-w-sm lg:max-w-xl mr-auto '>
              <CustomProse overrides=''>
                <Intro />
              </CustomProse>
              <div data-gsap="animate" className='flex w-full items-stretch space-x-3 lg:space-x-6 mb-12'>
                <CallToActionButtons backdropBlur={features.backdropBlur} />
              </div>
            </div> 
          </div>
          <div className='absolute -z-10 inset-0 -bottom-[10%]'>
            <Saturn />
          </div>
        </div>
        <div data-io="whatissaturn" id="whatissaturn" className='w-full h-0'></div>
        <div className='w-full relative flex items-center'>
          <div className='w-full mx-auto px-6 md:pb-12 text-left max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[70rem] '>
            <div data-gsap="animate-children" className='mt-24 lg:mt-32 max-w-xs md:max-w-sm lg:max-w-[30rem] ml-auto  '>
              <CustomProse>
                <WhatIsIt />
              </CustomProse>
            </div> 
          </div> 
          <div className='absolute -z-10 inset-0 -bottom-[10%]'>
            <Network />
          </div>
        </div>
        <div data-io="goals" id="goals" className='w-full h-0'></div>
        <div className='mt-24 px-6 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[60rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full my-8 '>
            <CustomProse>
              <FeaturesIntro />
            </CustomProse>
          </div>
          <div className='px-2 w-full lg:px-0 mt-8'>
            <Features backdropBlur={features.backdropBlur} />
          </div>
        </div>
        <div data-io="howitworks" id="howitworks" className='w-full h-0'></div>
        <div className='mt-24 px-6 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[60rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full my-8'>
            <CustomProse >
              <WhySaturnIntroSection />
              <div className='flex flex-wrap'>
                <div className='max-w-1/2'>
                  <WhySaturn />
                </div>
                <WhySaturn />
              </div>
            </CustomProse>
          </div>
        </div> 
        <div data-io="roadmap" id="roadmap" className='w-full h-0'></div>
        <div className='mt-24 px-6 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[60rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full my-8 '>
            <CustomProse overrides='prose-h3:mt-0 prose-h1:my-8 prose-h4:text-white prose-h3:text-white'>
              <Roadmap/>
              <div className='my-10'>
                <ListBigDots>
                  <RoadmapFirstStep />  
                  <RoadmapSecondStep />
                  <RoadmapThirdStep />
                  <RoadmapFourthStep />
                </ListBigDots>
              </div>

            </CustomProse>
          </div>
        </div> 
        <div data-io="getstarted" id="getstarted" className='w-full h-0'></div>
        <div data-gsap="animate-children" className='mx-auto px-6 text-center max-w-xs md:max-w-sm lg:max-w-[34rem] mt-36 md:my-52 flex flex-col justify-center items-center'>
          <CustomProse>
            <GetStarted />
          </CustomProse>
          <div data-gsap="animate" className='flex items-stretch mx-auto mb-8 '>
            <CallToActionButtonDownload/>
          </div>
        </div>
        <Footer backdropBlur={features.backdropBlur}/>
      </div>
    </>
  )
}

export default Home