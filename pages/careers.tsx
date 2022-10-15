import type { NextPage } from 'next'
import { useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import dynamic from 'next/dynamic'
import { useFeatureContext } from '../context/featureContext'
import { backgroundScrollAnimations } from '../animations/scroll'
import { RenderMDXContent } from '../content/content'
import CustomProse from '../components/CustomProse/CustomProse'
import Modal3 from '../components/Modal3/Modal3'



const Careers: NextPage = () => {

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
                <div id="careers" className='w-full h-0'></div>
                <div data-io="careers" className='w-full h-0 '></div>
                    <div className=' px-6 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[60rem] mx-auto'>
                    <div data-gsap="animate-children" className='text-left w-full my-8 lg:flex lg:space-x-24 '>
                        <div className=' lg:text-right lg:max-w-sm '>
                        <CustomProse >
                            <RenderMDXContent contentId='intro.default' /> 
                        </CustomProse>
                        </div>
                        <div>
                        <CustomProse overrides='prose-p:my-6' >
                            <RenderMDXContent contentId='description.default' /> 
                        </CustomProse>
                        <div className='flex -mx-1 flex-col space-y-4'>
                            <Modal3 backdropBlur={features.backdropBlur} contentId="jobs[0]" >
                            <RenderMDXContent contentId='jobs[0].default' />
                            </Modal3>
                            <Modal3 backdropBlur={features.backdropBlur} contentId="jobs[1]" >
                            <RenderMDXContent contentId='jobs[1].default' />
                            </Modal3>
                            <Modal3 backdropBlur={features.backdropBlur} contentId="jobs[2]" >
                            <RenderMDXContent contentId='jobs[2].default' />
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

export default dynamic(() => Promise.resolve(Careers), {
    ssr: false
})

