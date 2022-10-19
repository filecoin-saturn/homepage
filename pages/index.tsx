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
import { RenderMDXContent } from '../content/content'
import NavBar from '../components/NavBar/NavBar'
import Goals from '../components/Goals/Goals'
import Metrics from '../components/Metrics/Metrics'
import ListBigDots from '../components/ListBigDots/ListBigDots'
import Modal3 from '../components/Modal3/Modal3'
import Button15 from '../components/Button15/Button15'
import Button16 from '../components/Button16/Button16'
import BackgroundWrapper from '../components/BackgroundWrapper/BackgroundWrapper'

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

  const bigP = "[&_.big-p]:text-base [&_.big-p]:text-base [&_.big-p]:md:text-lg [&_.big-p]:lg:text-2xl [&_.big-p]:font-black [&_.big-p]:leading-5 [&_.big-p]:lg:leading-6"
  const smallP = "[&_.small-p]:!my-0 [&_.small-p]:!text-xs [&_.small-p]:md:!text-sm [&_.small-p]:lg:!text-sm [&_.small-p]:my-0"

  
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
        <NavBar languageSwitcher={false} backdropBlur={features.backdropBlur} sections={["start", "howsaturnworks", "ourvision", "roadmap", "setupyournode", "careers", "contact"]} contentId="general.navbar" />
        <div data-io="start" id="start" className='w-full h-0'></div>
        <div className=' w-full relative'>
          <div className='mx-auto  max-w-xl xs:px-10 md:max-w-4xl lg:max-w-[70rem] sm:mx-auto px-6 md:px-12 mt-8 sm:mt-0 md:pb-12 text-left h-full flex flex-col justify-end '>
            <div className='max-h-[16.5rem] h-[90vh] min-h-[14rem] md:h-[90vh] md:min-h-[10rem] md:max-h-[20rem] lg:h-[55vh] lg:min-h-[5rem] lg:max-h-[14rem] '></div>
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
        <div id="setupyournode" className='w-full h-0'></div>
        <div data-io="setupyournode" className='w-full h-0 mt-40 md:mt-[24rem]'></div>
        <div className='-mt-20 md:-mt-48 px-6 xs:px-10 md:px-12 w-full max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full my-8  '>
            <div className=' lg:text-left underline-offset-2  '>
              <CustomProse overrides='prose-h1:sm:my-0   prose-h1:lg:max-w-[60rem] lg:max-w-[60rem] ' overridesParent='max-w-[60rem]'>
                <RenderMDXContent contentId='index.set-up-your-node.title.default' />
                <RenderMDXContent contentId='index.set-up-your-node.subtitle.default' />
                <RenderMDXContent contentId='index.set-up-your-node.requirements.title.default' />
              </CustomProse>
              <CustomProse  overrides={`${bigP} ${smallP}
              prose-p:md:text-lg prose-p:lg:text-2xl prose-ul:!px-[0.6rem] prose-li:px-0 prose-li:leading-5 prose-li:lg:leading-6  max-w-xl md:max-w-4xl lg:max-w-[70rem]`} 
              overridesParent='max-w-xl md:max-w-4xl lg:max-w-[70rem]' >
                <div className='md:flex md:space-x-16 md:justify-between '>
                  <div className='grow'>
                    <RenderMDXContent contentId='index.set-up-your-node.requirements.description.title[0].default' />
                    <BackgroundWrapper backdropBlur={features.backdropBlur}>
                      <RenderMDXContent contentId='index.set-up-your-node.requirements.description[0].default' />
                    </BackgroundWrapper>
                  </div>
                  <div className='grow'>
                    <RenderMDXContent contentId='index.set-up-your-node.requirements.description.title[1].default' />
                    <BackgroundWrapper backdropBlur={features.backdropBlur}>
                      <RenderMDXContent contentId='index.set-up-your-node.requirements.description[1].default' />
                    </BackgroundWrapper>
                      <div className='lg:flex lg:space-x-6 items-end justify-start my-4 md:my-1 lg:my-2'>
                        <CustomProse overrides='prose-p:my-1 lg:prose-p:my-0'>
                          <RenderMDXContent contentId='index.set-up-your-node.requirements.legal.title.default' />
                        </CustomProse>
                        <CustomProse overrides='prose-p:!my-0 prose-p:!text-xs prose-p:md:!text-sm prose-p:lg:!text-sm prose-p:my-0'>
                          <RenderMDXContent contentId='index.set-up-your-node.requirements.legal.description.default' />
                        </CustomProse>
                      </div>
                  </div>
                </div>
              </CustomProse>
              <div className={`my-8 lg:my-10 xl:my-12 -mx-3 xs:-mx-6 xs:px-8 md:-mx-8 px-3 sm:px-6 py-2 md:px-20 md:py-4 lg:px-12 lg:-mx-8 xl:-mx-20 xl:px-20  rounded-2xl md:rounded-3xl ${features.backdropBlur ? ` supports-blur:bg-sat-grad-blue-green-1-10 supports-blur:backdrop-blur-md bg-sat-grad-blue-green-1-10-fallback-1 ` : `bg-sat-grad-blue-green-1-10-fallback-1`}`}>
                <CustomProse overrides={`max-w-xl md:max-w-4xl lg:max-w-[70rem]`} overridesParent=' max-w-xl md:max-w-4xl lg:max-w-[70rem]'>
                  <div className='sm:hidden '>
                    <RenderMDXContent contentId='index.set-up-your-node.description.title.default' />
                  </div>
                  <div className=' sm:flex-row-reverse sm:space-x-reverse sm:space-x-8 md:space-x-reverse md:space-x-12 sm:items-center sm:justify-between sm:flex w-full'>
                      <img src="/dummy-image.png" alt=""  className='sm:w-1/2 h-full rounded-2xl object-cover max-h-[18rem] sm:max-h-[22rem] mx-auto'/>
                    <div className='sm:w-1/2 sm:py-2 '>
                      <div className='hidden sm:block'>
                        <RenderMDXContent contentId='index.set-up-your-node.description.title.default' />
                      </div>
                      <RenderMDXContent contentId='index.set-up-your-node.description.subtitle.default' />
                      <RenderMDXContent contentId='index.set-up-your-node.description.text.default' />
                      <Button16 contentId='index.set-up-your-node.description.button.cta[0]' />
                      <CustomProse overrides='prose-p:my-4 prose-p:!text-xs prose-p:md:!text-xs prose-p:lg:!text-sm'>
                        <RenderMDXContent contentId='index.set-up-your-node.description.join.default' />
                      </CustomProse>
                    </div>
                  </div>
                </CustomProse>
              </div>
            </div>
          </div>
        </div>
        <div id="careers" className='w-full h-0'></div>
        <div data-io="careers" className='w-full h-0 mt-40 md:mt-[24rem]'></div>
        <div className='-mt-20 md:-mt-48 px-6 xs:px-10 md:px-12 w-full max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full my-8 sm:flex sm:space-x-8 md:space-x-12 lg:space-x-24  '>
              <div className=' lg:text-right lg:max-w-sm '>
              <CustomProse overrides='' >
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
              <CustomProse overrides=''>
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