import { useEffect, useRef, useState } from 'react'

type CalculatorProps = {
    children: React.ReactNode,
    label: string,
    minValue: number,
    maxValue: number
    id: string
    startValue: number
    step?: number

}
export default function InputCalculator({label, minValue, maxValue, id, startValue, step}: CalculatorProps) {
    
    const [currentValue, setCurrentValue] = useState(startValue)
    const grabOutputNumber = useRef<HTMLOutputElement>(null)
    const outputNumber = grabOutputNumber.current
    const x = (currentValue-minValue) / (maxValue-minValue)

    useEffect(() => {
        function setOutputNumber(outputNumber: HTMLOutputElement) {
            outputNumber.innerHTML = currentValue.toString();
            outputNumber.style.left = `calc(${x} * (100% - 2 * var(--mobile-slider-extension)) + var(--mobile-slider-extension))`;
        }
        if(outputNumber) setOutputNumber(outputNumber);
    },[currentValue, outputNumber, x])

    function calculateCurrentPercentage() {
        let numericValue = currentValue
        let actualValue = ((numericValue  - minValue) / (maxValue-minValue) * 100).toString()
        let endValue = actualValue.concat("%")
        return endValue   
    }     
           
    return (
        <>
            <style jsx>{`
                input[type=range] {
                    margin: none;
                    outline: none
                    padding: 0;
                    width: full;
                    height: 0.20rem;
                    background-color: #B7D1FF;
                    background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(100%, #408DF7), color-stop(100%, #000000));
                    background-size: ${calculateCurrentPercentage()};
                    background-repeat: no-repeat;
                    border-radius: 4px;
                    cursor: pointer;
                    -webkit-appearance: none;

                }
                @media (min-width: 768px) {
                    input[type=range] {
                        height: 0.25rem;
                    }
                }
                
                input[type="range"]::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    border-radius: 100%;
                    background-color: white;
                    transition: background-color 0.5s ease-in-out;
                    border-style: solid;
                    border-color: #408DF7;
                    position: relative;
                    height: 1.25rem;
                    width: 1.25rem;
                    z-index:20;
                    border-width: 1.5px; 
                }
                @media (min-width: 768px) {
                    input[type="range"]::-webkit-slider-thumb {
                        height: 1.55rem;
                        width: 1.55rem;
                        border-width: 2px;   
                    }
                }
                output {
                    --mobile-slider-extension: 0.625rem; 
                } 
                @media (min-width: 768px) {
                    output {
                        --mobile-slider-extension: 0.825rem;
                    }
                } 
            `}
            </style>
            <div className="relative my-8 ">
                <input type="range" value={currentValue}  onChange={(event) => {setCurrentValue(Number(event.target.value))}} step={step} name="earningsName" id={id} min={minValue} max={maxValue} className="relative appearance-none w-full  bg-gradient-blue bg-with rounded outline-none "   />
                <output ref={grabOutputNumber} className='out absolute text-sm md:text-base font-inter font-semibold -translate-x-1/2 -translate-y-3/4 text-gradient-blue md:-translate-y-[70%]' 
                    style={ {
                        left: !outputNumber ? `calc(${x} * (100% - 2 * var(--mobile-slider-extension)) + var(--mobile-slider-extension))` : undefined
                    } } 
                >{startValue}</output>
                  <div className='absolute flex top-1/4 right-0 items-center md:-translate-y-[31.5%] '>
                    <div onClick={() => {setCurrentValue(maxValue)}} className={`cursor-pointer w-[0.10rem] h-[0.6rem] md:w-[0.125rem] md:h-[0.8rem] z-10 bg-gradient-blue  z-5  `}>
                    </div>
                    <div onClick={() => {setCurrentValue(maxValue)}}  className='cursor-pointer rounded-r-lg w-[0.625rem] h-[0.2rem] md:w-[0.75rem] md:h-[0.25rem] bg-light-blue-3'>
                    </div>
                </div>
                <div className='absolute flex top-1/4 left-0 items-center md:-translate-y-[31.5%] '>
                    <div onClick={() => {setCurrentValue(minValue)}}  className='cursor-pointer rounded-l-lg w-[0.625rem] h-[0.2rem] md:w-[0.75rem] md:h-[0.25rem] bg-light-blue-3'>
                    </div>
                    <div onClick={() => {setCurrentValue(minValue)}}  className={`cursor-pointer w-[0.10rem] h-[0.6rem] md:w-[0.125rem] md:h-[0.8rem] z-10 bg-gradient-blue z-5  `}>
                    </div>
                </div>
                <div className='flex justify-between mt-1.5  '>
                    <label className={`font-inter font-normal text-black opacity-60 text-xs md:text-base ml-1 ${minValue.toString().length >= 2 ? `` : `ml-1.5`}`}>{minValue}</label>
                    <label className='font-inter font-medium text-xs md:text-base text-black'>{label}</label>
                    <label className='font-inter font-normal text-black opacity-60 text-xs md:text-base '>{maxValue}</label>
                </div> 
            </div>
        </>
    )
}