import type { NextPage } from 'next'
import NavBar from '../content/en/components/NavBar'
import Image from 'next/image'
import Footer from '../content/en/components/Footer'
import DownloadCard from '../components/DownloadCard/DownloadCard'
import Intro from '../content/en/index/intro.mdx'
import desktopApp from '../public/desktop-app.png'
import saturn from '../public/saturn.png'
import { SideLinks as IntroSideLinks, imageDescription as introImageDescription } from '../content/en/index/intro'
import CustomProse from '../components/CustomProse/CustomProse'
import HowItWorksIntroHeading from '../content/en/index/howItWorks-intro-heading.mdx'
import HowItWorksIntroText from '../content/en/index/howItWorks-intro-text.mdx'
import HowItWorksDownloadSection from '../content/en/index/howItWorks-download-section.mdx'
import HowItWorksSetupSection from '../content/en/index/howItWorks-setup-section.mdx'
import HowItWorksEarnSection from '../content/en/index/howItWorks-earn-section.mdx'
import ListBigDots from '../components/ListBigDots/ListBigDots'
import { CallToAction as HowItWorksCallToAction, imageDescription as howItWorksImageDescription} from '../content/en/index/howItWorks'
import Download from '../content/en/index/download.mdx'
import DownloadsGatewaySection from '../content/en/index/downloads-gateway-section.mdx'

const Home: NextPage = () => {
  return (
    <>
      <NavBar/>
        <div id='intro' className='w-full relative overflow-visible'>
          <div className=' h-full w-full sticky -top-[14rem] sm:-top-[24rem] md:-top-[24rem] lg:-top-[28rem] xl:-top-[38rem] -z-20 -ml-72 -mt-20 sm:-ml-52 -mb-[26rem] sm:-mb-[90vh] lg:-mb-[100vh] xl:-mb-[110vh]'>
            <div className='relative md:w-[100%] min-w-[42rem] h-[28rem] sm:h-[90vh] lg:h-[100vh] xl:h-[110vh] -ml-16 md:mt-14 lg:mt-20 lg:-ml-28 xl:-ml-60'>
              <Image src={saturn} layout="fill" objectFit="contain" objectPosition="" alt={introImageDescription.alt} />  
            </div>
          </div>
          <div  className=' flex items-end sm:items-center w-full h-[32.5rem] mt-8 sm:h-[90vh] lg:h-[100vh] sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto text-center  '>
            <div className='mx-auto pr-10 pl-8  sm:px-12 text-left max-w-xs lg:max-w-sm sm:right-0 sm:mr-1 sm:-translate-y-1/3 md:-translate-y-1/2 '>
              <CustomProse>
                <Intro />
              </CustomProse>
              <div className='not-prose flex sm:flex-col space-x-4 sm:space-x-0 sm:space-y-4 mt-10 sm:mt-2 sm:absolute sm:right-0 sm:top-0 sm:translate-y-1/2  sm:mr-2 xl:mr-0'>
                <IntroSideLinks />
              </div>
            </div>
          </div>
          <div id="howitworks" className='pt-32 md:pt-36 lg:pt-48 sm:mt-4 '>
            <div className='mx-auto pr-10 pl-8 text-left justify-center max-w-xs sm:flex sm:space-x-4 sm:max-w-xl md:max-w-3xl lg:max-w-4xl md:space-x-16 '>
              <div className='flex-none '>
                <CustomProse>
                  <HowItWorksIntroHeading />
                </CustomProse>
              </div>
              <div className='max-w-md lg:max-w-lg'>
                <CustomProse>
                  <HowItWorksIntroText />
                </CustomProse>
              </div>
            </div>
            <div className='w-full mx-auto mt-4 sm:mt-0 px-2 mb-10 md:mt-20'>
              <div className='mx-auto justify-center sm:items-center max-w-5xl relative sm:flex space-x-2 md:space-x-4 lg:space-x-14 mt-4'>
                  <div className=' mx-auto block flex-grow mt-10 sm:mt-0 '>
                    <div className='overflow-hidden rounded-xl shadow-xl'>
                      <Image src={desktopApp} layout="responsive" objectFit="contain" alt={howItWorksImageDescription.alt}/>
                    </div>
                  </div>
                <div className='mx-auto mt-14 sm:mt-8 max-w-xs md:max-w-md px-4 sm:px-0'>
                  <ListBigDots>
                    <CustomProse>
                      <HowItWorksDownloadSection />
                    </CustomProse>
                    <CustomProse>
                      <HowItWorksSetupSection />
                    </CustomProse>
                    <CustomProse>
                      <HowItWorksEarnSection />
                    </CustomProse>
                  </ListBigDots>
                </div>
              </div>
              <div className='mx-auto max-w-[11rem] mt-14'>
                <div className='mx-auto w-full hidden sm:block relative mt-4 mr-4'>
                  <HowItWorksCallToAction />
                </div>
              </div>
            </div>
          </div>
          <div className='sm:mt-4 pb-24 md:mx-auto md:max-w-3xl overflow-visible mt-32 md:mt-36 lg:mt-48'>
            <div className='md:mx-auto px-4 md:px-4 text-left md:text-center max-w-md  '>
              <CustomProse>
                <Download />
              </CustomProse>
            </div>
            <div className='flex my-10 md:min-w-[30rem] overflow-scroll space-x-10 mx-4 no-scrollbar snap-x snap-mandatory  '>
              <DownloadCard imgUrl="/card-logo-gateway.png" disabled={false} >
                <DownloadsGatewaySection />
              </DownloadCard>
            </div>
          </div>
        </div>
        <Footer/>
    </>
  )
}
export default Home
    