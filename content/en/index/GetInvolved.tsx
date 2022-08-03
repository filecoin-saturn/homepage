import Button1 from "../../../components/Button1/Button1"
import Button2 from "../../../components/Button2/Button2"

type CallToActionButtonContent ={
    backdropBlur: boolean

}

export default function CallToActionButton({backdropBlur}: CallToActionButtonContent) {
    return (
        <>
            <Button1 text="Join the team" link='#careers' />
            <Button2 text="Get in touch" link='mailto:ansgar@protocol.ai' backdropBlur={backdropBlur} />
        </>
    )
}