import { useRouter } from "next/router";
import Button4 from "../Button4/Button4";
import Button5 from "../Button5/Button5";

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
                <Button4 isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className="flex flex-col space-y-4 mx-auto">
                {linkArray.map((link, index) => {
                    return (
                        <Button5 
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
                <Button5 type="button" text={languages.text} onClick={() => {}} disabled />
            </div>
        </div>
    )
}