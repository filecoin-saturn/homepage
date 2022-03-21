
type DownloadCardProps = {
    "cardContent": {
        bgImage: string
        title: string
        subTitle: string
        requirements: string 
        requirementsContent: string[]
        downloadButton: string
        marginTopButton?: string
        id: string
        idDownloadButton: string
        disabled: boolean
    }
}
       
export default function DownloadCard({cardContent}: DownloadCardProps) {
    const disabled = cardContent.disabled ? "opacity-50 pointer-events-none"  : ""

    return (
        <div id={cardContent.id} className={`${disabled} snap-center bg-gradient-to-r max-w-xs md:max-w-sm min-w-[17rem] from-gradient-turqouise to-gradient-blue mx-auto p-0.5 rounded-xl`}>
            <div className='mx-auto text-center bg-white py-1 rounded-[0.6rem] '>
                <div className='mx-auto my-4 sm:my-8 '>
                    <div className={`${cardContent.bgImage} bg-contain bg-center bg-no-repeat w-8 h-8 sm:w-10 sm:h-10 z-10 mx-auto`}>
                    </div>
                </div>
                <div className='mx-auto text-center font-inter font-semibold text-lg sm:text-2xl antialised'>
                    {cardContent.title}
                </div>
                <div className='mx-auto text-center font-roboto text-sm sm:text-base antialiased'>
                    {cardContent.subTitle} 
                </div>
                <div className='mx-auto text-center font-inter font-semibold text-base sm:text-lg antialiased mt-8'>
                    {cardContent.requirements}
                </div>
                <div className='flex flex-wrap px-8 md:px-12 space-x-4 text-center max-w-sm justify-center text-base font-source-serif-pro antialiased font-normal sm:text-lg '> 
                    {cardContent.requirementsContent.map((cardContent, index)=> {
                        return (
                            <div className='flex items-center space-x-2' key={index}>
                                <div className='w-[0.3rem] h-[0.3rem] bg-regular-blue rounded-full'>
                                </div>
                                <div className=' antialiased'>
                                    {cardContent}
                                </div>
                            </div>
                        )
                    })}  
                </div>
                <div className={`mx-auto py-4 ${cardContent.marginTopButton} `}>
                    <button id={cardContent.idDownloadButton} className='bg-dark-blue rounded-3xl w-3/4 active:scale-90 hover:opacity-80 group '>
                        <div className='font-roboto tracking-widest antialiased text-sm font-normal text-white py-0.5 border-2 group-focus-visible:border-light-blue-2 outline outline-1 outline-transparent border-transparent group-focus-visible:outline-dark-blue rounded-3xl '>
                            {cardContent.downloadButton}
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}