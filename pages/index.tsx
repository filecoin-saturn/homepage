import type { NextPage } from 'next'
import CustomProse from '../components/CustomProse/CustomProse'
import Footer from '../components/Footer/Footer'
import { useEffect } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { backgroundScrollAnimations } from '../animations/scroll'
import ListBigDots from '../components/ListBigDots/ListBigDots'
import { useFeatureContext } from '../context/featureContext'
import Button1 from '../components/Button1/Button1'
import Button2 from '../components/Button2/Button2'
import { RenderMDXContent } from '../content/content'
import NavBar from '../components/NavBar/NavBar'
import Goals from '../components/Goals/Goals'
import Modal3 from '../components/Modal3/Modal3'

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
      <div className='mx-auto text-center w-full overflow-hidden relative'>
        <div data-gsap="bg" className='fixed -z-20 inset-x-0 -top-1 h-[150%] bg-sat-blue-2 inset-0'>
          <div className='absolute inset-0 grid grid-cols-3'>
              {[1,2,3,4,5,6,7,8,9].map(v => {
                return (
                  <div key={v} className={`bg-star-background-plain bg-cover bg-no-repeat bg-center ${v % 3 !== 2 ? "-scale-x-100" : ""} ${(v - 1) % 6 > 2 ? "-scale-y-100" : ""} `}></div>
                )
              })}
          </div>
          <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black'>
            <div className='bg-sat-blue-4 bg-opacity-40 mix-blend-overlay w-full h-full'></div>
          </div>
        </div>
        <NavBar languageSwitcher={false} backdropBlur={features.backdropBlur} sections={["start", "whatissaturn", "goals", "howitworks", "roadmap", "getinvolved", "careers"]} contentId="general.navbar" />
        <div data-io="start" id="start" className='w-full h-0'></div>
        <div className='h-[calc(var(--vh,_1vh)*100)] w-full relative'>
          <div className='mx-auto px-6 md:pb-12 text-left max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-2xl h-full flex flex-col justify-end lg:ml-20'>
            <div data-gsap="animate-children" className=' max-w-sm md:max-w-md lg:max-w-xl mr-auto relative'>
              <CustomProse overrides='prose-h3:!text-6xl prose-h3:!leading-none'>
                <RenderMDXContent contentId='index.start.default' />
              </CustomProse>
              <div data-gsap="animate" className='flex w-full items-stretch space-x-3 lg:space-x-6 -ml-1 lg:mb-32 mb-12 mt-4 md:mt-6'>
                <Button1 contentId='index.start.ctas[0]' />
                <Button2 contentId='index.start.ctas[1]' backdropBlur={features.backdropBlur} />
              </div>
              <div className='absolute -inset-x-[110%] -inset-y-[60%] -z-10 opacity-50 bg-gradient-radial from-black via-transparent to-transparent bg-cover'>

              </div>
            </div> 
          </div>
          <div className='absolute -z-20 inset-0 -bottom-[20%]'>
            <Suspense fallback={null}>
              <DynamicSaturn />
            </Suspense>
          </div>
        </div>
        <div id="whatissaturn" className='w-full h-0'></div>
        <div data-io="whatissaturn" className='w-full h-0 mt-40 md:mt-[24rem]'></div>
        <div className='-mt-20 md:-mt-48 px-6 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[60rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full my-8 lg:flex lg:space-x-24 '>
            <div className=' lg:text-right lg:max-w-xs '>
              <CustomProse>
                <RenderMDXContent contentId='index.what-is-saturn.title.default' />
              </CustomProse>
            </div>
            <CustomProse overrides='lg:my-6' >
                <RenderMDXContent contentId='index.what-is-saturn.description.default' />
            </CustomProse>
          </div>
        </div>
        <div id="goals" className='w-full h-0'></div>
        <div data-io="goals" className='w-full h-0 mt-56 md:mt-[24rem]'></div>
        <div className='-mt-28 md:-mt-48 px-6 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[60rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full lg:my-12'>
            <CustomProse>
              <RenderMDXContent contentId='index.goals.title.default' />
            </CustomProse>
          </div>
          <div className='px-2 w-full lg:px-0'>
            <Goals backdropBlur={features.backdropBlur} contentId="index.goals.content.content"/>
          </div>
        </div>
        <div id="howitworks" className='w-full h-0'></div>
        <div data-io="howitworks" className='w-full h-0 mt-72 md:mt-[30rem]'></div>
        <div className='-mt-36 md:-mt-60 px-6 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[60rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full my-8 lg:flex lg:space-x-24 '>
            <div className=' lg:text-right lg:max-w-xs '>
              <CustomProse >
                <RenderMDXContent contentId='index.how-it-works.intro.default' />
              </CustomProse>
            </div>
            <CustomProse overrides='lg:my-6' >
              <RenderMDXContent contentId='index.how-it-works.main.default' />
            </CustomProse>
          </div>
        </div> 
        <div id="roadmap" className='w-full h-0'></div>
        <div data-io="roadmap" className='w-full h-0 mt-72 md:mt-[30rem]'></div>
        <div className='-mt-36 md:-mt-60 px-6 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[46rem] xl:max-w-[67rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full my-8 lg:flex lg:space-x-24 xl:space-x-24 '>
            <div className=' lg:text-right'>
              <CustomProse overrides='lg:even:prose-h1:my-0 xl:even:prose-h1:my-4 lg:prose-h1:mb-0' >
                <div className="flex lg:flex-col xl:flex-row ">
                  <RenderMDXContent contentId='index.roadmap.title.default' />
                </div>
              </CustomProse>
            </div>
            <CustomProse overrides='prose-p:my-0 ' >
              <div className='my-4 lg:my-10'>
                <ListBigDots backdropBlur={features.backdropBlur}>
                  <RenderMDXContent contentId='index.roadmap.step[0].default' />  
                  <RenderMDXContent contentId='index.roadmap.step[1].default' />  
                  <RenderMDXContent contentId='index.roadmap.step[2].default' />  
                  <RenderMDXContent contentId='index.roadmap.step[3].default' />  
                </ListBigDots>
              </div>
            </CustomProse>
          </div>
        </div>
        <div id="getinvolved" className='w-full h-0'></div>
        <div data-io="getinvolved" className='w-full h-0 mt-72 md:mt-[30rem]'></div>
        <div className='-mt-36 md:-mt-60 px-6 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[60rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full my-8 lg:flex lg:space-x-24 '>
            <div className=' lg:text-right lg:max-w-xs '>
              <CustomProse >
                <RenderMDXContent contentId='index.get-involved.title.default' /> 
              </CustomProse>
            </div>
            <div>
              <CustomProse overrides='lg:my-6' >
                <RenderMDXContent contentId='index.get-involved.description.default' /> 
              </CustomProse>
              <div data-gsap="animate" className='min-w-[10rem] flex w-full items-stretch space-x-3 lg:space-x-6 -ml-1 mt-4 md:mt-6 '>
                <Button1 contentId='index.get-involved.buttons.getInvolved[0]' />
                <Button2 contentId='index.get-involved.buttons.getInvolved[1]' backdropBlur={features.backdropBlur} />
              </div>
            </div>
          </div>
        </div>
        <div id="careers" className='w-full h-0'></div>
        <div data-io="careers" className='w-full h-0 mt-[calc(var(--vh,_1vh)*25+9rem)] md:mt-[calc(var(--vh,_1vh)*25+20rem)]'></div>
        <div className='-mt-36 md:-mt-80 mb-[calc(var(--vh,_1vh)*25)] px-6 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[60rem] mx-auto'>
          <div data-gsap="animate-children" className='text-left w-full my-8 lg:flex lg:space-x-24 '>
            <div className=' lg:text-right lg:max-w-xs '>
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
        <Footer backdropBlur={features.backdropBlur} contentId="general.footer" />
      </div>
    </>
  )
}

export default Home