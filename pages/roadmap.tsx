import type { NextPage } from 'next'
import { useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import dynamic from 'next/dynamic'
import { useFeatureContext } from '../context/featureContext'
import { backgroundScrollAnimations } from '../animations/scroll'
import { RenderMDXContent } from '../content/content'
import CustomProse from '../components/CustomProse/CustomProse'
import ListBigDots from '../components/ListBigDots/ListBigDots'



const Roadmap: NextPage = () => {

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
                <div id="roadmap" className='w-full h-0'></div>
                <div data-io="roadmap" className='w-full h-0 '></div>
                <div className=' px-6 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-[46rem] xl:max-w-[67rem] mx-auto'>
                    <div data-gsap="animate-children" className='text-left w-full my-8 lg:flex lg:space-x-24 xl:space-x-24 '>
                        <div className=' lg:text-right'>
                        <CustomProse overrides='lg:even:prose-h1:my-0 xl:even:prose-h1:my-4 lg:prose-h1:mb-0' >
                            <div className="flex lg:flex-col xl:flex-row ">
                            <RenderMDXContent contentId='title.default' />
                            </div>
                        </CustomProse>
                        </div>
                        <CustomProse overrides='prose-p:my-0 ' >
                        <div className='my-4 lg:my-10'>
                            <ListBigDots backdropBlur={features.backdropBlur}>
                            <RenderMDXContent contentId='step[0].default' />  
                            <RenderMDXContent contentId='step[1].default' />  
                            <RenderMDXContent contentId='step[2].default' />  
                            <RenderMDXContent contentId='step[3].default' />  
                            </ListBigDots>
                        </div>
                        </CustomProse>
                    </div>
                </div>
                <Footer backdropBlur={features.backdropBlur} contentId="general.footer" />
            </div>
        </>
    )  
}

export default dynamic(() => Promise.resolve(Roadmap), {
    ssr: false
})

