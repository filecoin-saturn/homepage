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
import Button16 from '../components/Button16/Button16'
import BackgroundWrapper from '../components/BackgroundWrapper/BackgroundWrapper'
import Modal8 from '../components/Modal8/Modal8'
import TotalEarnings from '../components/TotalEarnings/TotalEarnings'
import Button17 from '../components/Button17/Button17'
import AsciinemaPlayer from '../components/AsciinemaPlayer/AsciinemaPlayer';

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

  const bigP = "[&_.big-p]:text-base [&_.big-p]:text-base [&_.big-p]:md:text-lg [&_.big-p]:lg:text-xl [&_.big-p]:font-black [&_.big-p]:leading-5 [&_.big-p]:lg:leading-6 [&_.big-p]:lg:mb-2  [&_.big-p]:xl:my-3"
  const smallP = "[&_.small-p]:!my-0 [&_.small-p]:!text-xs [&_.small-p]:!leading-3 [&_.small-p]:md:!text-xs [&_.small-p]:lg:!text-base [&_.small-p]:my-0"

  
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
        <div data-gsap="bg" className='fixed -z-50 inset-x-0 -top-1 h-[150%] bg-sat-blue-4 inset-0 '></div>
        <NavBar languageSwitcher={false} backdropBlur={features.backdropBlur} sections={["start", "estimateyourearnings" ,"whatissaturn", "ourvision", "roadmap", "setupyournode", "faq", "careers", "contact"]} contentId="general.navbar" />
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
        <div id="estimateyourearnings" className='w-full h-0'></div>
        <div data-io="estimateyourearnings" className='w-full h-0 mt-40 md:mt-[24rem]'></div>
        <div className='w-full mx-auto relative max-w-xl md:max-w-4xl lg:max-w-[70rem] '>
          <div className='w-full absolute h-[115%] md:h-[130%] lg:h-[135%] -z-40 mb-8'>
          <div className='bg-filecoin-bg-logo bg-cover xs:bg-contain lg:bg-contain md:max-w-2xl lg:max-w-3xl xl:max-w-4-xl mx-auto bg-center opacity-20 md:bg-cover blur-md bg-no-repeat h-full -mt-16'></div>
          </div>
          <div className='bg-gradient-to-t from-sat-blue-4/10  to-sat-blue-4 opacity-100 w-full h-[120%] -translate-y-[15%] -z-30 mb-4  xs:-translate-y-1/4 md:-translate-y-[15%] md:h-[140%] lg:h-[150%] absolute  '></div>
          <div className='-mt-20 md:-mt-48 px-4 xs:px-10 md:px-12 max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto '>
            <div data-gsap="animate-children" className='text-left w-full px-2 sm:flex sm:space-x-4 md:space-x-8 lg:space-x-44'>
                <div className='grow shrink-0 lg:text-right sm:w-48 md:w-72 lg:max-w-sm md:mt-1'>
                <CustomProse overrides='prose-h1:sm:leading-[2rem] prose-h1:sm:my-0 prose-h1:lg:my-0 prose-h1:xl:my-0 sm:first-line:[&_h1]:text-base sm:first-line:[&_h1]:font-inter sm:first-line:[&_h1]:font-black sm:first-line:[&_h1]:text-white sm:first-line:[&_h1]:my-2 md:first-line:[&_h1]:my-6 sm:first-line:[&_h1]:text-[1.625rem] md:first-line:[&_h1]:text-4xl lg:first-line:[&_h1]:text-6xl sm:first-line:[&_h1]:leading-tight' >
                    <RenderMDXContent contentId='index.estimateyourearnings.title.default' />
                </CustomProse>
                </div>
                <div className='sm:mt-1 md:mt-0'>
                  <CustomProse overrides='prose-p:md:my-2 prose-p:lg:my-4'>
                    <RenderMDXContent contentId='index.estimateyourearnings.description.default' /> 
                  </CustomProse>
                </div>
            </div>
            <TotalEarnings contentId="index.estimateyourearnings.input.calculatorInformation" ></TotalEarnings>
            <div className='px-4'>
              <CustomProse overrides={` prose-p:!my-0 prose-p:!text-xs prose-p:!leading-3 prose-p:md:!text-xs prose-p:lg:!text-sm prose-p:my-0 prose-p:max-w-sm prose-p:md:max-w-4xl prose-p:lg:max-w-[70rem] max-w-sm md:max-w-4xl lg:max-w-[70rem]`} overridesParent='max-w-xl md:max-w-4xl lg:max-w-[70rem]'>
                <RenderMDXContent contentId='index.estimateyourearnings.footnote.default' /> 
              </CustomProse>
            </div>

          </div>
        </div>
        <div id="whatissaturn" className='w-full h-0'></div>
        <div data-io="whatissaturn" className='w-full h-0 mt-40 md:mt-[24rem]'></div>
        <div className='-mt-20 md:-mt-48 px-6 xs:px-10 md:px-12 w-full max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full my-8 sm:flex sm:space-x-4 md:space-x-8 lg:space-x-24 '>
            <div className='grow shrink-0 lg:text-right sm:w-48 md:w-72 lg:max-w-sm '>
              <CustomProse overrides='prose-h1:sm:my-0 '>
                <RenderMDXContent contentId='index.what-is-saturn.title.default' />
              </CustomProse>
            </div>
            <CustomProse overrides='lg:mt-6 prose-h6:text-base prose-h6:md:text-2xl prose-h6:lg:text-3xl ' >
              <RenderMDXContent contentId='index.what-is-saturn.description.default' />
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
          <div data-gsap="animate-children" className='text-left w-full my-8 sm:flex sm:justify-between sm:space-x-12 md:space-x-12 lg:space-x-32 '>
            <div className='grow shrink-0 lg:text-right sm:w-28 md:w-72 lg:max-w-sm '>
              <CustomProse overrides='md:w-full md:max-w-none flex sm:flex-col md:flex-row lg:flex-col xl:flex-row prose-h1:sm:my-0 sm:even:prose-h1:my-0 sm:even:prose-h1:text-2xl md:even:prose-h1:text-6xl sm:odd:prose-h1:mb-0 sm:odd:prose-h1:mt-2 md:even:prose-h1:my-4 md:odd:prose-h1:my-4 lg:even:prose-h1:my-0 xl:even:prose-h1:my-4'>
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
        <div className='-mt-20 md:-mt-48 px-6 xs:px-10 md:px-12 w-full max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto relative'>
        <img src="/saturn-node.png" alt="" className='hidden opacity-70 -z-10 md:block h-60 lg:h-[22rem] xl:h-[27rem] absolute top-0 right-0 translate-x-[40%] lg:translate-x-[45%] lg:-translate-y-[10%] xl:-translate-y-1/4 xl:translate-x-1/2' />
          <div data-gsap="animate-children" className='text-left w-full my-8  '>
            <div className=' lg:text-left underline-offset-2  '>
              <CustomProse overrides='prose-h1:my-3.5 prose-p:mt-3.5 prose-h1:sm:my-0 prose-h1:lg:max-w-[60rem] prose-h5:md:my-0 lg:max-w-[60rem] prose-p:md:mb-4 prose-p:lg:mb-8  prose-p:sm:mt-1.5 prose-p:md:mt-3' overridesParent='max-w-[60rem]'>
                <RenderMDXContent contentId='index.set-up-your-node.title.default' />
                <RenderMDXContent contentId='index.set-up-your-node.subtitle.default' />
                <RenderMDXContent contentId='index.set-up-your-node.requirements.title.default' />
              </CustomProse>
              <CustomProse  overrides={`${bigP} ${smallP}
              prose-p:my-2 prose-p:md:text-lg prose-p:lg:text-2xl prose-ul:!px-[0.8rem] prose-li:px-0 prose-li:leading-5 prose-li:lg:leading-6 prose-li:lg:my-3 prose-strong:antialiased max-w-xl md:max-w-4xl lg:max-w-[70rem] prose-a:underline-offset-2 prose-strong:sm:text-xs`} 
              overridesParent='max-w-xl md:max-w-4xl lg:max-w-[70rem]' >
                <div className='md:flex md:space-x-16 lg:space-x-16 md:justify-between md:items-start space-y-4 sm:space-y-4 md:space-y-0'>
                  <div className='grow'>
                    <RenderMDXContent contentId='index.set-up-your-node.requirements.description.title[0].default' />
                    <BackgroundWrapper color='10' backdropBlur={features.backdropBlur}>
                      <RenderMDXContent contentId='index.set-up-your-node.requirements.description[0].default' />
                    </BackgroundWrapper>
                  </div>
                  <div className='grow'>
                    <RenderMDXContent contentId='index.set-up-your-node.requirements.description.title[1].default' />
                    <BackgroundWrapper color='10' backdropBlur={features.backdropBlur}>
                      <RenderMDXContent contentId='index.set-up-your-node.requirements.description[1].default' />
                    </BackgroundWrapper>
                      <div className='sm:flex sm:space-x-7 prose-p:md:!leading-none md:mt-4 md:ml-4 lg:flex lg:space-x-10 items-end justify-start my-4 sm:mt-4 md:my-1 lg:my-6'>
                        <CustomProse overrides='prose-p:my-1 sm:prose-p:my-0 prose-p:lg:!my-0'>
                          <RenderMDXContent contentId='index.set-up-your-node.requirements.legal.title.default' />
                        </CustomProse>
                        <CustomProse overrides='prose-p:!my-0 prose-p:!text-xs prose-p:md:!text-xs prose-p:lg:!text-sm prose-p:my-0 '>
                          <RenderMDXContent contentId='index.set-up-your-node.requirements.legal.description.default' />
                        </CustomProse>
                      </div>
                  </div>
                </div>
              </CustomProse>
              <div className={`my-8 md:my-14 lg:my-16 xl:my-16 -mx-3 xs:-mx-6 xs:px-8 md:-mx-8 px-3 sm:px-8 py-2 md:px-14 md:py-0 lg:px-[3.225rem] lg:-mx-[3.315rem] xl:-mx-20 xl:px-[3.315rem] rounded-2xl md:rounded-3xl ${features.backdropBlur ? ` supports-blur:bg-sat-grad-blue-green-1-10 supports-blur:backdrop-blur-md bg-sat-grad-blue-green-1-10-fallback-1 ` : `bg-sat-grad-blue-green-1-10-fallback-1`}`}>
                <CustomProse overrides={`max-w-xl md:max-w-4xl lg:max-w-[70rem] prose-h1:lg:my-5 prose-h3:lg:!mt-0 prose-h3:xl:!my-0 prose-h3:xl:!mb-6 prose-h3:xl:!mb-7  prose-h3:px-2 prose-h3:sm:px-0 prose-h3:md:mb-6 prose-h6:md:font-black prose-h6:md:leading-none prose-p:mt-0 prose-p:mb-6 prose-p:md:mb-5 prose-p:md:text-base prose-p:lg:mb-6 prose-p:xl:mb-8 py-6 pt-3 sm:pt-2 sm:pb-3 `} overridesParent=' max-w-xl md:max-w-4xl lg:max-w-[70rem]'>
                  <div className='sm:hidden '>
                    <RenderMDXContent contentId='index.set-up-your-node.description.title.default' />
                  </div>
                  <div className='flex flex-col relative sm:flex-row-reverse sm:space-x-reverse sm:space-x-8 md:space-x-reverse md:space-x-14  sm:justify-between w-full'>
                    <AsciinemaPlayer className='rounded-2xl my-4 md:my-8 lg:my-12 md:rounded-3xl h-80 sm:h-auto w-full sm:w-1/2 [&_.control-bar]:hidden' src="/filecoin-saturn-setup-1.cast" rows="30" idleTimeLimit={3} preload={true} fit="height" speed={4} autoPlay loop />
                    <div className='sm:w-1/2 sm:py-3 px-2 md:px-2 md:py-5 md:pb-7 md:pl-3 lg:py-12 xl:py-[3.225rem] xl:pl-5'>
                      <div className='hidden sm:block'>
                        <RenderMDXContent contentId='index.set-up-your-node.description.title.default' />
                      </div>
                      <RenderMDXContent contentId='index.set-up-your-node.description.subtitle.default' />
                      <RenderMDXContent contentId='index.set-up-your-node.description.text.default' />
                      <Button16 target='_blank' contentId='index.set-up-your-node.description.button.cta[0]' />
                      <CustomProse overrides='prose-p:!my-4 prose-p:!text-xs prose-p:md:!text-xs prose-p:lg:!text-sm'>
                        <RenderMDXContent contentId='index.set-up-your-node.description.join.default' />
                      </CustomProse>
                    </div>
                  </div>
                </CustomProse>
              </div>
            </div>
          </div>
        </div>
        <div id="faq" className='w-full h-0'></div>
        <div data-io="faq" className='w-full h-0 mt-40 md:mt-[24rem]'></div>
        <div className='-mt-20 md:-mt-48 px-6 xs:px-10 md:px-12 w-full max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full my-8 sm:flex sm:space-x-12 md:space-x-16 lg:space-x-44  '>
              <div className='grow shrink-0 lg:text-right sm:w-28 md:w-72 lg:max-w-sm '>
              <CustomProse >
                  <RenderMDXContent contentId='index.faq.title.default' /> 
              </CustomProse>
              </div>
              <div>
              <div className='flex -mx-1 flex-col space-y-4 md:my-5'>
                  <Modal8 backdropBlur={features.backdropBlur} contentId="faq.questions" />
              </div>
              </div>
          </div>
        </div>
        <div id="careers" className='w-full h-0'></div>
        <div data-io="careers" className='w-full h-0 mt-40 md:mt-[24rem]'></div>
        <div className='-mt-12 md:-mt-48 px-6 xs:px-10 md:px-12 w-full max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full my-8 sm:flex sm:space-x-4 md:space-x-8 lg:space-x-24  '>
              <div className='grow shrink-0 lg:text-right sm:w-48 md:w-72 lg:max-w-sm '>
              <CustomProse overrides='prose-h1:my-3.5 prose-h1:sm:my-3 prose-h1:md:my-1'>
                  <RenderMDXContent contentId='index.careers.intro.default' /> 
              </CustomProse>
              </div>
              <div>
              <CustomProse overrides='prose-p:my-6 prose-p:mt-3.5 prose-p:mb-[1.125rem] prose-p:sm:mr-1 prose-p:md:mr-0 prose-p:md:mb-[1.4375rem] prose-p:lg:mt-[1.375rem] prose-p:lg:mb-8' >
                  <RenderMDXContent contentId='index.careers.description.default' /> 
              </CustomProse>
              <div className='flex -mx-1 flex-col space-y-3 md:space-y-[0.9375rem] lg:space-y-[1.1875rem]'>
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
        <div className='-mt-12 md:-mt-48 px-6 xs:px-10 md:px-12 w-full max-w-xl md:max-w-4xl lg:max-w-[70rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full my-8 sm:flex sm:space-x-4 md:space-x-8 lg:space-x-24 '>
            <div className='grow shrink-0 lg:text-right sm:w-48 md:w-72 lg:max-w-sm '>
              <CustomProse overrides='prose-h1:my-3.5'>
                <RenderMDXContent contentId='index.contact.title.default' />
              </CustomProse>
            </div>
            <div className='relative'>
              <CustomProse overrides='mt-1 mb-4 sm:mt-4 lg:mt-6 lg:mb-6 prose-h6:text-base prose-h6:md:text-2xl prose-h6:lg:text-3xl prose-p:sm:leading-tight' >
                <RenderMDXContent contentId='index.contact.description.default' />
              </CustomProse>
              <CustomProse overrides='mt-4 mb-1 md:mb-3 lg:mb-4 prose-p:!font-black prose-h6:sm:text-xl' >
                <RenderMDXContent contentId='index.contact.email.title.default' />
              </CustomProse>
              <div className='flex space-x-3 md:space-x-5 lg:space-x-5 -mx-1'>
                <Button17 backdropBlur={features.backdropBlur} contentId={'index.contact.join[0].button'} />
                <Button17 backdropBlur={features.backdropBlur} contentId={"index.contact.join[1].button"} />
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