import { useEffect, useState } from 'react'
import { useContent } from '../../content/content'
import EarningsCalculator from '../EarningsCalculator/EarningsCalculator'
import { useSpring, animated } from 'react-spring';


type CalculatorProps = {
    
    contentId?: string
    usdText?: string
    filText?: string
    perMonthText?: string

}
export default function TotalEarnings({contentId, usdText, filText, perMonthText}: CalculatorProps) {
const inputContent = useContent(contentId + ".input.calculatorInformation" ?? "")
const outputContent = useContent(contentId + ".formula.earningsFormula" ?? "")
const usdTxt = usdText ?? inputContent[0]?.usdText
const filTxt = filText ?? inputContent[0]?.filText
const perMonthTxt = perMonthText ?? inputContent[0]?.perMonthText
const contributionTxt = inputContent[0]?.contributionTxt
const minContrib = outputContent(inputContent[1].minUsedValue ?? inputContent[2].minValue, inputContent[2].minUsedValue ?? inputContent[2].minValue)
const maxContrib = outputContent(inputContent[1].maxValue, inputContent[2].maxValue)

// create values per calculator
const [firstValue, setFirstValue] = useState(inputContent[1].startValue)
const [secondValue, setSecondValue] = useState(inputContent[2].startValue)


const [totalFilEarnings, setTotalFILEarnings] = useState<number>(0)
useEffect(() => {
    setTotalFILEarnings(outputContent(firstValue, secondValue))
},[setTotalFILEarnings, firstValue, secondValue, outputContent])

const [currentFilPrice, setCurrentFilPrice] = useState<number>(5)
const [priceInUsd, setPriceInUsd] = useState<number>()

useEffect(() => {
    const earningsInUsd = currentFilPrice * totalFilEarnings
    setPriceInUsd(earningsInUsd)
},[currentFilPrice,totalFilEarnings, setPriceInUsd])


useEffect(() => {
    (async function getCurrenFilRate() {
        const options = {method: 'GET', headers: {accept: ''}};

        const response = await fetch('https://api.binance.com/api/v3/avgPrice?symbol=FILUSDT', options)
        const jsonResponse = await response.json()
        jsonResponse ? setCurrentFilPrice(jsonResponse.price) : setCurrentFilPrice(5)

    })();
  }, []); 

const [startAnimation, setStartAnimation] = useState<boolean>()
const [animFinished, setAnimFinished] = useState<boolean>()

useEffect(() => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1
    }
    const callback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if(entry.target.id === "animateusd") {
                setStartAnimation(entry.isIntersecting)
            }
        });
      };
    const observer = new IntersectionObserver(callback, options);
    const target = document.querySelector('#animateusd');
    if(target) observer.observe(target);
    return () => {
        if(target) observer.unobserve(target)
    }
}, [setStartAnimation])

  const priceInUsdAnimated = useSpring(
    { 
        val: startAnimation ? priceInUsd : animFinished ? priceInUsd : 0, from: { val: 0 },
        config: { duration: 650 },
        onRest: () => setAnimFinished(true)
    });
    

    return (
            <>
                <div className='my-12 md:flex md:flex-row-reverse md:justify-between md:items-center md:space-x-reverse md:space-x-16 text-white w-full'>
                    <div className="w-full">
                        <div className='relative w-full'>
                            <div className="w-4/5 lg:w-3/4 mb-1 text-center font-semibold antialiased text-xs md:text-[0.815rem] lg:text-sm text-sat-green-1">{contributionTxt}</div>
                            <div className="w-full flex items-end flex-col relative mb-28 md:mb-10">
                                <div className='w-4/5 lg:w-3/4 bg-sat-grad-blue-green-1-30 absolute h-full left-0 -z-10 rounded-2xl md:rounded-3xl overflow-hidden'>
                                    <div style={{width: `${(totalFilEarnings - minContrib) * 100 / (maxContrib - minContrib)}%`}} className={`h-full bg-sat-grad-blue-green-1-40`}></div>
                                </div>
                                <div className='translate-y-10 flex space-y-1 self-end flex-col justify-center items-center w-4/5 md:w-3/4 lg:w-full md:rounded-3xl lg:max-w-sm lg:px-16 xl:px-24 md:py-4 lg:py-6 md:h-fit md:space-y-3 lg:space-y-5  bg-sat-blue-3 shadow-black-sm md:shadow-black-md lg:shadow-black-lg rounded-2xl py-4 '>
                                    <div className='font-semibold antialiased text-xs md:text-[0.815rem] lg:text-sm'>
                                        {perMonthTxt}
                                    </div>
                                    <div className='flex items-baseline space-x-1 md:space-x-2 lg:space-x-3'>
                                        <animated.div id="animateusd" className=' text-3xl xs:text-4xl md:text-[2.55rem] lg:text-6xl font-inter font-black antialiased'>{animFinished ? priceInUsd?.toLocaleString(undefined, {maximumFractionDigits: 0}) : priceInUsdAnimated.val.to(val => Math.floor(val))}</animated.div><div className='font-inter antialiased font-bold text-xl md:text-[1.75rem] lg:text-4xl'>{usdTxt}</div>
                                    </div>
                                    <div className='flex space-x-1 md:space-x-2 items-baseline '>
                                        <div className='text-white antialiased text-base md:text-2xl lg:text-4xl font-black'>{" "+ totalFilEarnings.toLocaleString(undefined, {maximumFractionDigits: 0}) + " "}</div><div className='font-inter antialiased font-semibold text-xs md:text-[0.815rem] lg:text-lg '>{filTxt}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-4 w-full '>
                        <EarningsCalculator content={inputContent[1]} setOutputValue={setFirstValue} />
                        <EarningsCalculator content={inputContent[2]} setOutputValue={setSecondValue} />
                    </div>
                </div>
            </>
    )
}

