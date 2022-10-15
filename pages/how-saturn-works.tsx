import type { NextPage } from 'next'
import { useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import dynamic from 'next/dynamic'
import { useFeatureContext } from '../context/featureContext'
import { backgroundScrollAnimations } from '../animations/scroll'
import { RenderMDXContent } from '../content/content'
import CustomProse from '../components/CustomProse/CustomProse'



const HowSaturnWorks: NextPage = () => {

    const features = useFeatureContext()
    useEffect(() => {
      const cleanup2 = backgroundScrollAnimations(`[data-gsap="bg"]`)
      return () => {
        cleanup2()
      }
    }, [])

    
    return (
        <>
            <div className='mx-auto w-full overflow-hidden text-center relative'>
                <div data-gsap="bg" className='fixed -z-20 inset-x-0 -top-1 h-[150%] bg-sat-blue-4 inset-0'></div>
                <NavBar languageSwitcher={false} backdropBlur={features.backdropBlur} sections={["start", "whatissaturn", "goals", "howitworks", "roadmap", "getinvolved", "careers"]} contentId="general.navbar" />
                <div className='max-h-[7rem] h-[10vh] min-h-[5rem] md:h-[20vh] md:min-h-[5rem] md:max-h-[10rem] '></div>
                    <div className='text-left lg:!my-auto px-6 xs:px-10 md:px-12 w-full max-w-xl md:max-w-3xl lg:text-center lg:max-w-[59rem] xl:max-w-[59rem] mx-auto'>
                        <CustomProse overridesParent='lg:max-w-[59rem] xl:max-w-[65rem]' overrides='lg:max-w-[59rem] xl:max-w-[65rem]  '>
                            <RenderMDXContent contentId='title.default' />
                        </CustomProse>
                        <div className='h-[10rem] xs:h-[18rem] sm:h-[20rem] md:h-[24rem] lg:h-[30rem] my-10'>
                            <iframe  width="100%" height="100%"
                                src="https://www.youtube.com/embed/acqTSORhdoE">
                            </iframe>
                        </div>
                        <div className='text-left mx-auto'>
                            <CustomProse overridesParent='lg:mx-auto lg:max-w-[35rem]' overrides='lg:max-w-[35rem]  '>
                                <RenderMDXContent contentId='description.default' />
                            </CustomProse>
                        </div>
                    </div>
                <Footer backdropBlur={features.backdropBlur} contentId="general.footer" />
            </div>
        </>
    )  
}

export default dynamic(() => Promise.resolve(HowSaturnWorks), {
    ssr: false
})

