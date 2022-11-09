import { useEffect, useRef, useState } from 'react'


function calcRatio(cV:number, minV: number, maxV:number) {
    return (cV  - minV) / (maxV-minV)
}


type CalculatorProps = {
    label?: string,
    minValue?: number,
    minUsedValue?: number
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
        minUsedValue: number
        maxValue: number
        startValue: number
        step?: number
        usdText?: string
        filText?: string
        perMonthText?: string,
        outputGen?: (val: number, minP: number, maxP: number, minV: number, maxV: number, ) => number,
        outputGenString?: (val: number) => string
    }

}
export default function EarningsCalculator({content ,label, minValue, minUsedValue, maxValue, startValue, step, setOutputValue}: CalculatorProps) {
    const lab = label ?? content?.label
    const minVal = minValue ?? content?.minValue ?? 1
    const minUsedVal = minUsedValue ?? content?.minUsedValue ?? minVal
    const maxVal = maxValue ?? content?.maxValue ?? 100
    const startVal = startValue ?? content?.startValue ?? 1
    const st = step ?? content?.step

    const minP = minUsedVal
    const maxP = maxVal
    const minV = minUsedVal
    const maxV = maxVal


    // create the currentValue by grabbing the output 
    const [currentValue, setCurrentValue] = useState(startVal)
    const grabOutputNumber = useRef<HTMLOutputElement>(null)
    const outputNumber = grabOutputNumber.current


    // pass currentValue to the total earnings
    useEffect(() => {
        setOutputValue(content && content.outputGen ? content.outputGen(currentValue, minP, maxP, minV, maxV) : 0)

    },[setCurrentValue, currentValue, setOutputValue, content, maxP, maxV, minP, minV])

   

    useEffect(() => {
        function setOutputNumber(outputNumber: HTMLOutputElement) {
            outputNumber.innerHTML = content && content.outputGenString && content.outputGen ? content.outputGenString(content.outputGen(currentValue, minP, maxP, minV, maxV)) : ""
        }
        if(outputNumber) setOutputNumber(outputNumber);
    },[currentValue, outputNumber, minP, minV, content, maxP, maxV])
           
    return (
        <>
            <div className="relative my-12 text-white ">
                <div className='relative w-full h-4 overflow-hidden'>
                    <svg className='h-full w-full'>
                        <rect className='fill-white opacity-10' rx={8} x={0} y={0} width="100%" height={16}></rect>
                    </svg>
                    <svg className='absolute inset-y-0 left-0' style={{width: `calc(${calcRatio(minUsedVal, minVal, maxVal)} * (100% - 2rem) + 2rem)`}} >
                        <defs>
                            <pattern id="pattern" width="16" height="16" patternContentUnits="objectBoundingBox">
                                <line x1={0} y1={0} x2={16} y2={16} strokeWidth={0.1} className="stroke-sat-blue-3"></line>
                            </pattern>
                            <pattern id="pattern-stripe" 
                                width="4" height="4" 
                                patternUnits="userSpaceOnUse"
                                patternTransform="rotate(45)"
                            >
                                <rect width="1" height="4" transform="translate(0,0)" fill="white"></rect>
                            </pattern>
                            <mask id="mask-stripe">
                                <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe)" />
                            </mask>  
                        </defs>
                        <rect mask="url(#mask-stripe)" className='fill-sat-blue-3' rx={8} x={0} y={0} width="100%" height={16}></rect>
                        <rect className='fill-sat-blue-3 opacity-30' rx={8} x={0} y={0} width="100%" height={16}></rect>
                    </svg>
                    <div className='absolute inset-y-0 right-0' style={{left: `calc(${calcRatio(minUsedVal, minVal, maxVal)} * (100% - 2rem))`, width: `calc(${calcRatio(currentValue, minUsedVal, maxVal)} * (100% - 2rem) * (1 - ${calcRatio(minUsedVal, minVal, maxVal)}) + 2rem)`}}>
                        <svg className='w-full h-full'>
                            <rect className='fill-sat-blue-3' rx={8} x={0} y={0} width="100%" height={16}></rect>
                        </svg>
                    </div>
                    <div className='absolute inset-y-0 right-0' style={{left: `calc(${calcRatio(minUsedVal, minVal, maxVal)} * (100% - 2rem))`}}>
                        <input type="range" value={currentValue}  onChange={(event) => {
                            setCurrentValue(Number(event.target.value))
                        }} step={st} min={minUsedVal} max={maxVal} className="block w-full h-full cursor-pointer rounded outline-none m-0 [&[type='range']]:appearance-none bg-transparent [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-8 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:rounded-full [&::-ms-thumb]:h-4 [&::-ms-thumb]:w-8 [&::-ms-thumb]:border-0 [&::-ms-thumb]:appearance-none [&::-ms-thumb]:bg-white [&::-ms-thumb]:rounded-full" />
                    </div>
                    
                </div>
                <output ref={grabOutputNumber} className='top-0 left-0 -translate-y-[120%] absolute text-sm md:text-base lg:text-lg font-inter font-black antialiased text-gradient-blue -translate-x-1/2' 
                    style={{left: `calc(${calcRatio(currentValue, minVal, maxVal)} * (100% - 2rem) + 1rem)`}}
                >{startVal}</output>
                <div className='flex justify-center mt-2 -mx-2  '>
                    <label className='absolute left-0 font-inter antialiased font-normal text-xs leading-4 md:text-xs lg:text-sm -translate-x-1/2'>{minVal}</label>
                    <label className='font-inter antialiased [&_strong]:font-semibold font-normal text-xs leading-4 md:text-xs lg:text-sm max-w-[70%] text-center' dangerouslySetInnerHTML={{__html: lab ?? ""}}></label>
                    <label className='absolute right-0 font-inter antialiased font-normal text-xs leading-4 md:text-xs lg:text-sm translate-x-1/2'>{maxVal}</label>
                </div> 
            </div>
        </>
    )
}