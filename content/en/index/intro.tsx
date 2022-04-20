import Button4 from "../../../components/Button4/Button4"
import Button3 from "../../../components/Button3/Button3"
import Button1 from "../../../components/Button1/Button1"



export function MainLinks() {
    return (
        <>
            <div className="-mt-1 md:mt-0">
                <Button3 link='#howitworks' text="Learn more"/>
            </div>
            <div className="mt-4 hidden sm:block">
                <Button1 text="Download" link="#download"/>
            </div>
        </>
    )
}
export function SideLinks() {
    return (
        <>
            <Button4 imgUrl='/filecoin-logo.svg' link='https://filecoin.io' />
            <Button4 imgUrl='/protocol-labs.svg' link='https://protocol.ai' />
        </>
    )
}

export const imageDescription = {
    alt: "Rendering of Saturn"
}