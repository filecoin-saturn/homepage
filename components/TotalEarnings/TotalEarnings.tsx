import { first } from 'lodash'
import { useEffect, useState } from 'react'
import { useContent } from '../../content/content'
import EarningsCalculator from '../EarningsCalculator/EarningsCalculator'

type CalculatorProps = {
    
    contentId?: string
    usdText?: string
    filText?: string
    perMonthText?: string
    or?: string

}
export default function TotalEarnings({contentId, usdText, filText, perMonthText, or}: CalculatorProps) {
const content = useContent(contentId ?? "")
const usdTxt = usdText ?? content[0]?.usdText
const filTxt = filText ?? content[0]?.filText
const perMonthTxt = perMonthText ?? content[0]?.perMonthText
const o = or ?? content[0]?.or

// create values per calculator
const [firstValue, setFirstValue] = useState(content[1].startValue)
const [secondValue, setSecondValue] = useState(content[2].startValue)


const [totalFilEarnings, setTotalFILEarnings] = useState<number>(0)
useEffect(() => {
    const minP = content[1].minValue 
    const maxP = content[1].maxValue
    const minV = Math.log(1)
    const maxV = Math.log(100)
    const scale = (maxV-minV) / (maxP-minP);

    const a = 800000/54150 * Math.min(45, secondValue / 100 * Math.exp(minV + scale*(firstValue-minP)) * 60 * 60 * 24 * 3 / 1000)
    setTotalFILEarnings(a)
},[setTotalFILEarnings, firstValue, secondValue, content])

const [currentFilPrice, setCurrentFilPrice] = useState<number>(0)
const [priceInUsd, setPriceInUsd] = useState<number>()

useEffect(() => {
    const earningsInUsd = currentFilPrice * totalFilEarnings
    setPriceInUsd(earningsInUsd)
},[currentFilPrice,totalFilEarnings, setPriceInUsd])



useEffect(() => {
    (async function getCurrenFilRate() {
        const options = {method: 'GET', headers: {accept: ''}};

        await fetch('https://api.coingecko.com/api/v3/coins/binance-peg-filecoin', options)
        .then(response => response.json())
        .then(response => setCurrentFilPrice(response.market_data.current_price.usd))
        .catch(err => console.error(err));


    })();
  }, []); 

    
    return (
            <div className='my-12 md:flex md:flex-row-reverse md:justify-between md:items-center md:space-x-reverse md:space-x-16 text-white w-full'>
                <div className='flex flex-col justify-center items-center w-full md:w-2/3 lg:w-full md:max-w-xs md:rounded-3xl lg:max-w-sm lg:px-16 xl:px-24 md:py-4 lg:py-6 md:h-fit md:space-y-3 lg:space-y-5  bg-sat-blue-3 rounded-2xl py-4 '>
                    <div className='font-semibold antialiased text-xs md:text-[0.815rem] lg:text-sm'>
                        {perMonthTxt}
                    </div>
                    <div className='flex items-baseline space-x-1 md:space-x-2 lg:space-x-3'>
                        <div className=' text-3xl xs:text-4xl md:text-[2.55rem] lg:text-6xl font-inter font-black antialiased'>{priceInUsd?.toFixed(0) + " "}</div><div className='font-inter antialiased font-bold text-xl md:text-[1.75rem] lg:text-4xl'>{usdTxt}</div>
                    </div>
                    <div className='flex space-x-1 md:space-x-2 items-baseline '>
                        <div className='font-inter antialiased font-regular text-xs md:text-[0.815rem] lg:text-lg '>...</div><div className='font-inter antialiased font-regular text-xs md:text-[0.815rem] lg:text-lg '>{o}</div> <div className='text-white antialiased text-base md:text-2xl lg:text-4xl font-black'>{" "+ totalFilEarnings.toFixed(2) + " "}</div><div className='font-inter antialiased font-semibold text-xs md:text-[0.815rem] lg:text-lg '>{filTxt}</div>
                    </div>
                </div>
                <div className='px-4 w-full '>
                    <EarningsCalculator content={content[1]} setOutputValue={setFirstValue} />
                    <EarningsCalculator content={content[2]} setOutputValue={setSecondValue} />
                </div>
            </div>
    )
}