import Button1 from "../../../components/Button1/Button1"
import Button2 from "../../../components/Button2/Button2"

type CallToActionButtonsContent ={
    backdropBlur: boolean

}

export default function CallToActionButtons({backdropBlur}: CallToActionButtonsContent) {
    return (
        <>
            <Button1 text="Get Involved" link='#getinvolved' />
            <Button2 text="Learn more" link='#whatissaturn' backdropBlur={backdropBlur} />
        </>
    )
}