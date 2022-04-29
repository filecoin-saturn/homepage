type TotalEarningsButtonProps = {
    equalSign: string
    totalCoinsEarned: string
    fileCoin: string


}

export default function TotalEarningsButton({equalSign, totalCoinsEarned, fileCoin}: TotalEarningsButtonProps){

    return (
        <div className="mt-12 antialiased lg:hidden mx-auto font-inter font-semibold px-4 py-2 text-center rounded-3xl bg-gradient-blue text-white space-x-6 w-full flex items-center justify-between">
            <div className="text-base">
                {equalSign}
            </div>
            <div className="font-black text-2xl">
                {totalCoinsEarned}        
            </div>
            <div className="text-base">
                {fileCoin}
            </div>
        </div>
    )

}