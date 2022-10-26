import Button4 from "../Button4/Button4";
import Button3 from "../Button3/Button3";
import Button6 from "../Button6/Button6";
import {memo} from "react"

type Props = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    languages: {
        text: string
    },
    children: React.ReactNode
    backdropBlur: boolean
    languageSwitcher: boolean

}
export default memo(function Menu({isOpen, setIsOpen, languages, children, backdropBlur, languageSwitcher}: Props){
    return (
        <div className="flex flex-col justify-between h-full text-center py-8 sm:py-10 z-100">
            <div className="relative flex justify-center items-center">
                <Button4 isOpen={isOpen} onClick={() => {
                    setIsOpen(false)
                    document.body.style.overflow = "auto"
                }} aria="Close menu"/>
            </div>
            <div className="flex flex-col space-y-12 sm:space-y-14 mt-4">
                <div className="flex flex-col space-y-2 sm:space-y-4 mx-auto text-center">
                    {children}
                </div>  
                <div className={`${languageSwitcher ? `` : `hidden`}`}>
                    <Button6 text={languages.text} disabled={!languageSwitcher} backdropBlur={backdropBlur}  />
                </div>
            </div>
            <div className="mx-auto">
                <Button3 onClick={() => {
                    setIsOpen(false)
                    document.body.style.overflow = "auto"
                }} link="/" replace={true} backdropBlur={backdropBlur} aria={"Move up and close menu"} />
            </div>
        </div>
    )
})