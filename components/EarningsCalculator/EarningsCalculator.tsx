import { useEffect, useRef, useState } from 'react'

type CalculatorProps = {
    label?: string,
    minValue?: number,
    maxValue?: number
    startValue?: number
    step?: number
    setOutputValue: React.Dispatch<React.SetStateAction<number>>,
    average?: boolean
    percentage?: boolean
    maxLabel?: string
    minLabel?: string
    averageText?: string
    usdText?: string
    filText?: string
    perMonthText?: string
    content?: {
        label: string,
        minValue: number,
        maxValue: number
        startValue: number
        step?: number
        average?: boolean
        percentage?: boolean
        maxLabel?: string
        minLabel?: string
        averageText?: string
        usdText?: string
        filText?: string
        perMonthText?: string
    }

}
export default function EarningsCalculator({content ,label, minValue, maxValue, startValue, step, setOutputValue, average, percentage, maxLabel, minLabel , averageText}: CalculatorProps) {
    const lab = label ?? content?.label
    const minVal = minValue ?? content?.minValue ?? 1
    const maxVal = maxValue ?? content?.maxValue ?? 100
    const startVal = startValue ?? content?.startValue ?? 1
    const st = step ?? content?.step
    const aver = average ?? content?.average
    const perc = percentage ?? content?.percentage
    const maxLab = maxLabel ?? content?.maxLabel
    const minLab = minLabel ?? content?.minLabel
    const averageTxt = averageText ?? content?.averageText ?? "Average"

    const minP = minVal?? 1
    const maxP = maxVal?? 100
    const minV = Math.log(10)
    const maxV = Math.log(100)
    const scale = (maxV-minV) / (maxP-minP);


    // create the currentValue by grabbing the output 
    const [currentValue, setCurrentValue] = useState(startVal)
    const grabOutputNumber = useRef<HTMLOutputElement>(null)
    const outputNumber = grabOutputNumber.current
    const x = (currentValue-minVal) / (maxVal-minVal)


    // pass currentValue to the total earnings
    useEffect(() => {
        setOutputValue(currentValue)

    },[setCurrentValue, currentValue, setOutputValue])

   

    useEffect(() => {
        function setOutputNumber(outputNumber: HTMLOutputElement) {
            outputNumber.innerHTML = (currentValue > 25 && currentValue < 35 && aver) ? averageTxt : perc ? currentValue.toString() + "%" : (Math.exp(minV + scale*(currentValue-minP))) < 10.09 || (Math.exp(minV + scale*(currentValue-minP))) >= 100 ? (Math.exp(minV + scale*(currentValue-minP))).toFixed(0).toString() : (Math.exp(minV + scale*(currentValue-minP))).toFixed(1).toString();
            outputNumber.style.left = `calc(${x} * (100% - 2 * var(--mobile-slider-extension)) + var(--mobile-slider-extension))`;
        }
        if(outputNumber) setOutputNumber(outputNumber);
    },[currentValue, outputNumber, x, aver, perc, averageTxt, minP, minV, scale])


    function calculateCurrentPercentage() {
        const numericValue = currentValue
        const actualValue = ((numericValue  - minVal) / (maxVal-minVal) * 100).toString()
        const endValue = actualValue.concat("%")
        return endValue   
    }     
           
    return (
        <>
            <style jsx >{`
                input[type=range] {
                    margin: none;
                    outline: none
                    padding: 4px;
                    width: full;
                    height: 1rem;
                    background-color: rgba(255, 255, 255, 0.1);
                    background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(100%, #0E67FF), color-stop(100%, #000000));
                    background-size: ${calculateCurrentPercentage()};
                    background-repeat: no-repeat;
                    border-radius: 25px;
                    cursor: pointer;
                    -webkit-appearance: none;

                }
                @media (min-width: 768px) {
                    input[type=range] {
                        height: 1rem;
                    }
                }
                
                input[type="range"]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    border-radius: 10px;
                    background-color: #fff;
                    transition: background-color 0.5s ease-in-out;
                    position: relative;
                    height: 1rem;
                    width: 1.5rem;
                    box-shadow: 6px 0 0 #fff,
                                -6px 0 0 #fff;;
                    
                }
                @media (min-width: 768px) {
                    input[type="range"]::-webkit-slider-thumb {
                        height: 1rem;
                        width: 1.5rem;
                        border-width: 2px;   
                    }
                }
                output {
                    --mobile-slider-extension: 0.625rem; 
                } 
                @media (min-width: 768px) {
                    output {
                        --mobile-slider-extension: 0.625rem;
                    }
                } 
            `}
            </style>
            <div className="relative my-12 text-white ">
                <input type="range" value={currentValue}  onChange={(event) => {setCurrentValue(Number(event.target.value))}} step={st} min={minVal} max={maxVal} className="relative appearance-none w-full  bg-gradient-blue bg-with rounded outline-none "   />
                <output ref={grabOutputNumber} className='absolute text-sm md:text-base lg:text-lg font-inter font-black antialiased -translate-x-1/2 -translate-y-[150%]  text-gradient-blue md:-translate-y-[120%]' 
                    style={ {
                        left: !outputNumber ? `calc(${x} * (100% - 2 * var(--mobile-slider-extension)) + var(--mobile-slider-extension))` : undefined
                    } } 
                >{startVal}</output>
                <div className='flex justify-between mt-1.5 -mx-2  '>
                    <label className={`font-inter antialiased font-normal text-xs md:text-[0.815rem] lg:text-sm   ${minVal.toString().length >= 2 ? `` : `ml-1.5`}`}>{minLab?? minVal/10}</label>
                    <label className='font-inter antialiased font-semibold text-xs md:text-[0.815rem] lg:text-sm '>{lab}</label>
                    <label className='font-inter antialiased font-normal text-xs md:text-[0.815rem] lg:text-sm  '>{maxLab?? maxVal/10}</label>
                </div> 
            </div>
        </>
    )
}