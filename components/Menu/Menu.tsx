import { useRouter } from "next/router";
import Button4 from "../Button4/Button4";
import Button5 from "../Button5/Button5";
import Button6 from "../Button6/Button6";
import Button7 from "../Button7/Button7";

type Props = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    linkArray: {
        title: string,
        href: string
    }[],
    languages: {
        text: string
    }
}
export default function Menu({isOpen, setIsOpen, linkArray, languages}: Props){
    const path = useRouter()
    return (
        <div className="flex flex-col justify-between h-full text-center py-8 sm:py-10">
            <div className="relative flex justify-center items-center">
                <Button4 isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className="flex flex-col space-y-12 sm:space-y-14 mt-4">
                <div className="flex flex-col space-y-2 sm:space-y-4 mx-auto text-center">
                    {linkArray.map((link, index) => {
                        return (
                            <Button7 
                                key={index} 
                                link={link.href} 
                                text={link.title} 
                                onClick={(e) => {setIsOpen(false)}} 
                                isActive={path.asPath === link.href} 
                                type="next-link"
                            />
                        )
                    })}
                </div>  
                <div className="">
                    <Button7 type="button" text={languages.text} onClick={() => {}} disabled={true} />
                </div>
            </div>
            <div className="mx-auto">
                <Button6 isOpen={isOpen} setIsOpen={setIsOpen} link="/" />
            </div>
        </div>
    )
}