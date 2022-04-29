import type { NextPage } from 'next'
import NavBar from '../content/en/NavBar'
import Image from 'next/image'
import Footer from '../content/en/Footer'
import DownloadCard from '../components/DownloadCard/DownloadCard'
import Intro from '../content/en/index/intro.mdx'
import desktopApp from '../public/desktop-app.png'
import saturn from '../public/saturn.png'
import { SideLinks as IntroSideLinks, imageDescription as introImageDescription, MainLinks as IntroMainLinks } from '../content/en/index/intro'
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
import EarnIntroSection from "../content/en/index/earn-intro-section.mdx"
import coinStacks from "../public/coinStacks.png"
import { imageDescription as earnImageDescription } from "../content/en/index/earn"
import EarnCalculatorSection from '../content/en/index/earn-calculator-section.mdx'
import { TotalEarningsButtonLanguage } from '../content/en/index/earn'
import { InputCalculatorLanguage } from '../content/en/index/earn'

const Home: NextPage = () => {

  return (
    <>
      <NavBar/>
        <div id='start' className='w-full relative overflow-visible'>
          <div className=' w-full overflow-hidden sticky -top-[13rem] sm:-top-[32rem] md:-top-[34rem] lg:-top-[36rem] xl:-top-[38rem] -z-20 -mt-10 sm:mt-16 md:mt-10 sm:-ml-52 -mb-[25.5rem] sm:-mb-[90vh] md:-mb-[90vh] lg:-mb-[100vh] xl:-mb-[110vh]'>
            <div className=' relative w-[22.5rem] h-[25rem] sm:w-full sm:h-[90vh] md:h-[100vh] lg:h-[100vh] xl:h-[110vh] sm:ml-28 md:ml-20 lg:-ml-32 xl:-ml-40'>
              <Image src={saturn} layout="fill" objectFit="cover" objectPosition="right" alt={introImageDescription.alt} />  
            </div>
          </div>
          <div  className=' flex items-end sm:items-center w-full h-[32.5rem] mt-12 sm:h-[90vh] lg:h-[100vh] sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto text-center  '>
            <div className='mx-auto px-8 sm:px-14 sm:mr-8 text-left max-w-xs lg:max-w-[26rem] sm:right-0 sm:-translate-y-1/3 md:-translate-y-1/2 lg:-translate-y-1/2 xl:translate-x-1/4 '>
              <CustomProse>
                <Intro />
              </CustomProse>
              <IntroMainLinks />
              <div className='not-prose -ml-3 sm:ml-0 flex sm:flex-col mt-5 space-x-2 sm:space-x-0 sm:-space-y-1 my-5 sm:mt-3 lg:mt-5 sm:absolute sm:right-0 sm:top-0 sm:translate-y-1/3 sm:translate-x-1/3  sm:mr-2 xl:mr-0'>
                <IntroSideLinks />
              </div>
            </div>
          </div>
          <div className=' sm:mt-4 mx-auto md:max-w-3xl lg:max-w-5xl overflow-visible pt-20 md:pt-40 lg:pt-52'>
            <div className='mx-auto px-8 max-w-sm md:px-4 text-left md:text-center md:max-w-md lg:max-w-5xl  '>
              <div className='lg:flex lg:space-y-12 md:max-w-xl md:mx-auto'>
                <CustomProse>
                  <EarnIntroSection />
                </CustomProse>
              </div>
              <div className='lg:flex lg:space-x-16 items-center md:text-left justify-center'>
                <div>
                  <div className='mt-12'>
                    <CustomProse>
                      <EarnCalculatorSection/>
                    </CustomProse>
                  </div>
                  <div className='mt-12'>
                    <InputCalculatorLanguage />
                  </div>
                </div>
                  <TotalEarningsButtonLanguage />
                <div className=' md:min-w-[30rem] hidden lg:block space-x-10 mx-4 overflow-hidden'>
                  <div className='overflow-hidden my-2 md:my-0 max-w-md lg:max-w-2xl mx-auto'>
                    <Image src={coinStacks} layout="responsive" objectFit="contain" alt={earnImageDescription.alt}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="howitworks" className='pt-24 md:pt-32 lg:pt-44 xl:pt-56 sm:mt-4 '>
            <div className='mx-auto px-8 text-left justify-center max-w-xs sm:flex sm:space-x-4 sm:max-w-xl md:max-w-3xl lg:max-w-4xl md:space-x-16 '>
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
            <div className='w-full mx-auto px-2 my-10'>
              <div className='mx-auto justify-center sm:items-center max-w-5xl relative lg:flex space-x-2 md:space-x-0 lg:space-x-12 xl:space-x-16'>
                  <div className=' mx-auto block flex-grow my-16 sm:my-0 px-6 md:px-0 lg:px-4 xl:px-0'>
                    <div className='overflow-hidden rounded-lg shadow-xl max-w-md lg:max-w-2xl mx-auto'>
                      <Image src={desktopApp} layout="responsive" objectFit="contain" alt={howItWorksImageDescription.alt}/>
                    </div>
                  </div>
                <div className='flex flex-col items-center'>
                  <div className=' w-full sm:mt-12 max-w-xs md:max-w-md px-4 sm:px-0 '>
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
              </div>
              <div className='mx-auto max-w-[11rem] mt-14'>
                <div className='mx-auto w-full hidden sm:block relative mt-4 mr-4'>
                  <HowItWorksCallToAction />
                </div>
              </div>
            </div>
          </div>
          <div id='download' className='sm:mt-4 pb-24 mx-auto md:max-w-3xl overflow-visible pt-20 md:pt-40 lg:pt-52'>
            <div className='mx-auto px-8 max-w-sm md:px-4 text-left md:text-center md:max-w-md  '>
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
    