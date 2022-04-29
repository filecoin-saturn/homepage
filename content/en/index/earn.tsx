import TotalEarningsButton from '../../../components/TotalEarningsButton/TotalEarningsButton'
import InputCalculator from '../../../components/InputCalculator/InputCalculator'


export const imageDescription = {
    alt: "A stack of Filecoin"
}


export function TotalEarningsButtonLanguage(){

    return <TotalEarningsButton equalSign='=' fileCoin='FIL' totalCoinsEarned='1000' />
}

export function InputCalculatorLanguage() {

    return (
        <>
            <InputCalculator label='Internet Upload Speed (Gb/s)' minValue={1} maxValue={100} id="earningsId1" startValue={1} >
            </InputCalculator>
            <InputCalculator label='Storage Capacity (GB)' minValue={1} maxValue={100} id="earningsId2" startValue={50}>
            </InputCalculator>
        </>
    
        )

}






