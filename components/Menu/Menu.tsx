import { useRouter } from "next/router";
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
        <div className="flex flex-col justify-between h-full text-center py-10">
            <div className="relative flex justify-center items-center">
                <Button6 isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className="flex flex-col space-y-4 mx-auto">
                {linkArray.map((link, index) => {
                    return (
                        <Button7 
                            key={index} 
                            type="next-link"
                            link={link.href} 
                            text={link.title} 
                            onClick={(e) => {setIsOpen(false)}} 
                            isActive={path.asPath === link.href} 
                        />
                    )
                })}
            </div>  
            <div className="">
                <Button7 type="button" text={languages.text} onClick={() => {}} disabled />
            </div>
        </div>
    )
}