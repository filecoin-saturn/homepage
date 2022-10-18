import type { NextPage } from 'next'
import CustomProse from '../components/CustomProse/CustomProse'
import Footer from '../components/Footer/Footer'
import { useEffect } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { backgroundScrollAnimations } from '../animations/scroll'
import { useFeatureContext } from '../context/featureContext'
import Button12 from '../components/Button12/Button12'
import Button13 from '../components/Button13/Button13'
import { RenderMDXContent } from '../content/content'
import NavBar from '../components/NavBar/NavBar'
import Goals from '../components/Goals/Goals'
import Button2 from '../components/Button2/Button2'
import CaseStudies from '../components/CaseStudies/CaseStudies'
import Metrics from '../components/Metrics/Metrics'
import ListBigDots from '../components/ListBigDots/ListBigDots'
import Modal3 from '../components/Modal3/Modal3'
import Modal5 from '../components/Modal5/Modal5'
import Button15 from '../components/Button15/Button15'

const DynamicSaturn = dynamic(() => import('../threejs/components/Saturn/Saturn'), {
  suspense: false,
  ssr: false
})

const Home: NextPage = () => {
  const features = useFeatureContext()
  useEffect(() => {
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
        <meta name="description" content="Join the Saturn Network and start earning Filecoin!"/>
      </Head>
      <div className='mx-auto w-full overflow-hidden relative'>
        <div data-gsap="bg" className='fixed -z-20 inset-x-0 -top-1 h-[150%] bg-sat-blue-4 inset-0'></div>
        <NavBar languageSwitcher={false} backdropBlur={features.backdropBlur} sections={["start", "didyouknow", "accelerateyoursite", "howsaturnworks", "ourvision", "roadmap", "careers", "contact"]} contentId="general.navbar" />
        <div data-io="start" id="start" className='w-full h-0'></div>
        <div className=' w-full relative'>
          <div className='mx-auto  max-w-xl xs:px-10 md:max-w-4xl lg:max-w-[70rem] sm:mx-auto px-6 md:px-12 mt-8 sm:mt-0 md:pb-12 text-left h-full flex flex-col justify-end '>
            <div className='max-h-[11.5rem] h-[100vh] min-h-[10rem] md:h-[90vh] md:min-h-[10rem] md:max-h-[20rem] lg:h-[55vh] lg:min-h-[5rem] lg:max-h-[14rem] '></div>
            <div data-gsap="animate-children" className=' max-w-sm xs:max-w-md sm:max-w-md md:max-w-4xl lg:max-w-7xl  mr-auto relative'>
              <CustomProse overrides='prose-p:md:!text-xl prose-p:leading-[1.25rem] prose-p:lg:!text-2xl prose-p:lg:w-[50rem] prose-h1:lg:w-[45rem] prose-h1:!my-0 prose-h1:lg:!my-4 prose-p:my-1 '>
                <RenderMDXContent contentId='index.start.default' />
              </CustomProse>
              <div data-gsap="animate" className='w-full flex flex-col xs:flex-row space-y-4 xs:space-y-0 xs:space-x-3 sm:space-x-3 md:space-x-5  lg:space-x-10  mb-12 my-4 md:mt-6 lg:mt-10'>
                <Button12 contentId='index.start.ctas[0]' />
              </div>
              <div className='absolute -inset-x-[110%] -inset-y-[60%] -z-10 opacity-50 bg-gradient-radial from-black via-transparent to-transparent bg-cover'>
              </div>
            </div> 
            <Metrics contentId='index.metrics.metrics' />
          </div>
          <div className='absolute -z-20 inset-0 bottom-[30%] md:bottom-[25%] lg:bottom-[25%]'>
            <Suspense fallback={null}>
              <DynamicSaturn />
            </Suspense>
          </div>
        </div>
        <div id="howsaturnworks" className='w-full h-0'></div>
        <div data-io="howsaturnworks" className='w-full h-0 mt-40 md:mt-[24rem]'></div>
        <div className='-mt-20 md:-mt-48 px-6 xs:px-10 md:px-12 w-full max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full my-8 sm:flex sm:space-x-8 md:space-x-12 lg:space-x-24 '>
            <div className=' lg:text-left lg:max-w-sm '>
              <CustomProse overrides='prose-h1:sm:my-0'>
                <RenderMDXContent contentId='index.how-saturn-works.title.default' />
              </CustomProse>
            </div>
            <CustomProse overrides='lg:mt-6 prose-h6:text-base prose-h6:md:text-2xl prose-h6:lg:text-3xl ' >
              <RenderMDXContent contentId='index.how-saturn-works.description.default' />
            </CustomProse>
          </div>
        </div>
        <div id="ourvision" className='w-full h-0'></div>
        <div data-io="ourvision" className='w-full h-0 mt-56 md:mt-[24rem]'></div>
        <div className='-mt-20 md:-mt-48 px-6 xs:px-10 md:px-12 w-full max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full lg:my-12'>
            <CustomProse>
              <RenderMDXContent contentId='index.our-vision.title.default' />
            </CustomProse>
          </div>
          <div className='px-2 w-full lg:px-0'>
            <Goals backdropBlur={features.backdropBlur} contentId="index.our-vision.content.content"/>
          </div>
        </div>
        <div id="roadmap" className='w-full h-0'></div>
        <div data-io="roadmap" className='w-full h-0 mt-40 md:mt-[24rem]'></div>
        <div className='-mt-20 md:-mt-48 px-6 xs:px-10 md:px-12 w-full max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full my-8 sm:flex sm:justify-between sm:space-x-20 md:space-x-12 lg:space-x-32 '>
            <div className=' lg:text-left lg:max-w-sm '>
              <CustomProse overrides='flex sm:flex-col md:flex-row lg:flex-col xl:flex-row prose-h1:sm:my-0 sm:even:prose-h1:my-0 sm:even:prose-h1:text-2xl md:even:prose-h1:text-6xl sm:odd:prose-h1:mb-0 sm:odd:prose-h1:mt-2 md:even:prose-h1:my-4 md:odd:prose-h1:my-4 lg:even:prose-h1:my-0 xl:even:prose-h1:my-4'>
                <RenderMDXContent contentId='index.roadmap.title.default' />
              </CustomProse>
            </div>
            <CustomProse overrides='my-4 md:my-8 lg:my-10 prose-p:my-0 prose-p:md:max-w-xs prose-p:lg:max-w-none   ' >
                    <ListBigDots backdropBlur={features.backdropBlur}>
                      <RenderMDXContent contentId='index.roadmap.step[0].default' />  
                      <RenderMDXContent contentId='index.roadmap.step[1].default' />  
                      <RenderMDXContent contentId='index.roadmap.step[2].default' />  
                      <RenderMDXContent contentId='index.roadmap.step[3].default' />  
                    </ListBigDots>
              </CustomProse>
          </div>
        </div>
        <div id="careers" className='w-full h-0'></div>
        <div data-io="careers" className='w-full h-0 mt-40 md:mt-[24rem]'></div>
        <div className='-mt-20 md:-mt-48 px-6 xs:px-10 md:px-12 w-full max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full my-8 sm:flex sm:space-x-8 md:space-x-12 lg:space-x-24  '>
              <div className=' lg:text-right lg:max-w-sm '>
              <CustomProse >
                  <RenderMDXContent contentId='index.careers.intro.default' /> 
              </CustomProse>
              </div>
              <div>
              <CustomProse overrides='prose-p:my-6' >
                  <RenderMDXContent contentId='index.careers.description.default' /> 
              </CustomProse>
              <div className='flex -mx-1 flex-col space-y-4'>
                  <Modal3 backdropBlur={features.backdropBlur} contentId="index.careers.jobs[0]" >
                    <RenderMDXContent contentId='index.careers.jobs[0].default' />
                  </Modal3>
                  <Modal3 backdropBlur={features.backdropBlur} contentId="index.careers.jobs[1]" >
                    <RenderMDXContent contentId='index.careers.jobs[1].default' />
                  </Modal3>
                  <Modal3 backdropBlur={features.backdropBlur} contentId="index.careers.jobs[2]" >
                    <RenderMDXContent contentId='index.careers.jobs[2].default' />
                  </Modal3>
              </div>
              </div>
          </div>
        </div>
        <div id="contact" className='w-full h-0'></div>
        <div data-io="contact" className='w-full h-0 mt-40 md:mt-[24rem]'></div>
        <div className='-mt-20 md:-mt-48 px-6 xs:px-10 md:px-12 w-full max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full my-8 sm:flex sm:space-x-8 md:space-x-12 lg:space-x-24 '>
            <div className=' lg:text-left lg:max-w-sm '>
              <CustomProse overrides='prose-h1:sm:my-0'>
                <RenderMDXContent contentId='index.contact.title.default' />
              </CustomProse>
            </div>
            <div className='relative'>
              <CustomProse overrides='my-4 lg:mt-6 prose-h6:text-base prose-h6:md:text-2xl prose-h6:lg:text-3xl ' >
                <RenderMDXContent contentId='index.contact.description.default' />
              </CustomProse>
              <CustomProse overrides='my-4 prose-p:!font-black ' >
                <RenderMDXContent contentId='index.contact.email.title.default' />
              </CustomProse>
              <div className='flex space-x-2 sm:space-x-2 -mx-1'>
                <Button15 backdropBlur={features.backdropBlur} contentId={'index.contact.join[0].button'} />
                <Button15 backdropBlur={features.backdropBlur} contentId={"index.contact.join[1].button"} />
              </div>
            </div>
          </div>
        </div>
        <Footer backdropBlur={features.backdropBlur} contentId="general.footer" />
      </div>
    </>
  )
}
export default Home