import CustomProse from "../CustomProse/CustomProse"

type DownloadCardProps = {
    children: React.ReactNode,
    disabled: boolean,
    imgUrl: string
}
       
export default function DownloadCard({children, disabled, imgUrl}: DownloadCardProps) {
    return (
        <div className={`${disabled ? "opacity-50 pointer-events-none"  : ""} snap-center bg-gradient-to-r max-w-xs md:max-w-sm min-w-[17rem] lg:min-w-[25rem] from-gradient-turqouise to-gradient-blue mx-auto p-0.5 rounded-xl`}>
            <div className='mx-auto text-center bg-white py-4 rounded-[0.6rem] '>
                <div className='mx-auto my-4 sm:mb-8 sm:mt-6 '>
                    <div className={`bg-contain bg-center bg-no-repeat w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 z-10 mx-auto`} style={{backgroundImage: `url('${imgUrl}')`}}>
                    </div>
                </div>
                <CustomProse overrides="prose-ul:flex prose-ul:flex-wrap prose-li:mr-4 prose-ul:justify-center prose-li:my-0 prose-h4:mb-0 prose-h2:mb-0 prose-ul:px-8 prose-ul:md:px-4">
                    {children}
                </CustomProse>
            </div>
        </div>
    )
}