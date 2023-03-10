import { useEffect, useState } from 'react'
import { useContent } from '../../content/content'
import EarningsCalculator from '../EarningsCalculator/EarningsCalculator'
import { useSpring, animated } from 'react-spring';
import { browserName, isMobile } from "react-device-detect";

type CalculatorProps = {
    contentId?: string
    usdText?: string
    filText?: string
    perMonthText?: string
    superscriptText?: string
    superscriptLink?: string
}

export default function TotalEarnings({contentId, usdText, filText, perMonthText, superscriptText, superscriptLink}: CalculatorProps) {

// FIL's price in USD. see https://coinmarketcap.com/currencies/filecoin/.
// this default, fallback price is used when FIL's price can't be
// dynamically fetched on page load, for whatever reason, and thus should be
// updated periodically here
const defaultFilToUsdPrice = 5.4 // updated on 2023-03-10

const inputContent = useContent(contentId + ".input.calculatorInformation" ?? "")
const outputContent = useContent(contentId + ".formula.earningsFormula" ?? "")
const usdTxt = usdText ?? inputContent[0]?.usdText
const filTxt = filText ?? inputContent[0]?.filText
const perMonthTxt = perMonthText ?? inputContent[0]?.perMonthText
const contributionTxt = inputContent[0]?.contributionTxt
const minContrib = outputContent(inputContent[1].minUsedValue ?? inputContent[2].minValue, inputContent[2].minUsedValue ?? inputContent[2].minValue)
const maxContrib = outputContent(inputContent[1].maxValue, inputContent[2].maxValue)
const superscriptTxt = superscriptText ?? inputContent[0].superscriptText
const superscriptLnk = superscriptLink ?? inputContent[0].superscriptLink

// create values per calculator
const [firstValue, setFirstValue] = useState(inputContent[1].startValue)
const [secondValue, setSecondValue] = useState(inputContent[2].startValue)

const [totalFilEarnings, setTotalFILEarnings] = useState<number>(0)
useEffect(() => {
    setTotalFILEarnings(outputContent(firstValue, secondValue))
},[setTotalFILEarnings, firstValue, secondValue, outputContent])

const [currentFilPrice, setCurrentFilPrice] = useState<number>(defaultFilToUsdPrice)
const [priceInUsd, setPriceInUsd] = useState<number>(0)

useEffect(() => {
    const earningsInUsd = currentFilPrice * totalFilEarnings
    setPriceInUsd(earningsInUsd)
},[currentFilPrice,totalFilEarnings, setPriceInUsd])


useEffect(() => {
    (async function getCurrenFilRate() {
        let jsonResponse = undefined

        const url = 'https://api.binance.com/api/v3/avgPrice?symbol=FILUSDT'
        const options = {method: 'GET', headers: {accept: ''}}
        try {
            const response = await fetch(url, options)
            jsonResponse = await response.json()
        } catch (err) {
            jsonResponse = undefined
            console.error(err)
            setCurrentFilPrice(defaultFilToUsdPrice)
        }

        if (jsonResponse !== undefined) {
            setCurrentFilPrice(jsonResponse.price)
        }
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

  const totalFilEarningsAnimated = useSpring(
    { 
        val: startAnimation ? totalFilEarnings : animFinished ? totalFilEarnings : 0, from: { val: 0 },
        config: { duration: 650 },
        onRest: () => setAnimFinished(true)
    });
    
    const [browserAndMobile, setBrowserAndMobile ] = useState<boolean>()

    useEffect(() => {
        if(browserName === "Safari" || isMobile){
            setBrowserAndMobile(true)
        }else {
            setBrowserAndMobile(false)
        }
    },[setBrowserAndMobile])

    return (
            <>
                <div className='my-12 md:flex md:flex-row-reverse md:justify-between md:items-center md:space-x-reverse md:space-x-16 text-white w-full'>
                    <div className="w-full">
                        <div className='relative w-full'>
                            <div className="w-4/5 lg:w-3/4 mb-1 text-center font-semibold antialiased text-xs md:text-[0.815rem] lg:text-sm text-sat-green-1">{contributionTxt}</div>
                            <div className="w-full flex items-end flex-col relative mb-28 md:mb-10">
                                <div className='w-4/5 lg:w-3/4 bg-sat-grad-blue-green-1-30 absolute h-full left-0 -z-10 rounded-2xl md:rounded-3xl overflow-hidden'>
                                    <div style={{width: `${(totalFilEarnings - (minContrib - 200)) * 100 / (maxContrib - minContrib + 200)}%`}} className={`h-full bg-sat-grad-blue-green-1-40`}></div>
                                </div>
                                <div className='translate-y-10 flex space-y-1 self-end flex-col justify-center items-center w-4/5 md:w-3/4 lg:w-full md:rounded-3xl lg:max-w-sm lg:px-16 xl:px-24 md:py-4 lg:py-6 md:h-fit md:space-y-3 lg:space-y-5  bg-sat-blue-3 shadow-black-sm md:shadow-black-md lg:shadow-black-lg rounded-2xl py-4'>
                                    <div className='font-semibold antialiased text-xs md:text-[0.815rem] lg:text-sm'>
                                        {perMonthTxt}
                                    </div>
                                    <div className='flex items-baseline space-x-1 md:space-x-2 lg:space-x-3'>
                                        {browserAndMobile ?
                                            <>
                                              <div className='text-4xl xs:text-4xl md:text-5xl lg:text-[5rem] mt-2 md:mt-1 font-inter font-black antialiased'>{totalFilEarnings?.toLocaleString(undefined, {maximumFractionDigits: 0})}</div><div className='font-inter antialiased font-bold text-xl md:text-[1.75rem] lg:text-4xl'>{filTxt}</div>
                                            </>
                                        :   <>
                                                <animated.div id="animateusd" className='text-4xl xs:text-4xl md:text-5xl lg:text-[5rem] mt-2 md:mt-1 font-inter font-black antialiased'>{animFinished ? totalFilEarnings?.toLocaleString(undefined, {maximumFractionDigits: 0}) : totalFilEarningsAnimated.val.to(val => Math.floor(val))}</animated.div><div className='font-inter antialiased font-bold text-xl md:text-[1.75rem] lg:text-4xl'>{filTxt}</div>
                                            </>
                                        }
                                    </div>
                                    <div className='flex space-x-1 md:space-x-2 items-baseline relative px-1 py-1 '>
                                        <div className='text-white antialiased text-base md:text-2xl lg:text-4xl font-black'>{" "+ priceInUsd?.toLocaleString(undefined, {maximumFractionDigits: 0}) + " "}</div><div className='font-inter antialiased font-semibold text-xs md:text-[0.815rem] lg:text-lg lg:px-0.5 '>{usdTxt}</div><a target="_blank" rel="noreferrer" href={superscriptLnk} className='absolute outline-none active:scale-90 rounded-full block focus-visible:outline-white outline outline-1 outline-transparent font-inter font-thin antialiased text-[0.55rem] mt-1.5 md:mt-3 lg:mt-3 md:text-[0.55rem] lg:text-sm top-0 right-0' >{superscriptTxt}</a>
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

