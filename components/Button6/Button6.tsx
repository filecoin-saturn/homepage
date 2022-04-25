type Props = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Button6({isOpen, setIsOpen}: Props) {
    return (
        <button className={`mx-1 relative active:scale-90 outline-none group md:hidden h-7 w-7 ${isOpen ? "rotate-45" : ""}`} onClick={() => {setIsOpen(!isOpen)}}>
            <div className="invisible group-focus-visible:visible bg-focus-menu-button w-full h-full bg-center bg-no-repeat bg-contain">
            </div>
            <div className="absolute hover:opacity-80 top-0 group-focus-visible:hidden group-focus-visible:bg-opacity-0 bg-nav-menu bg-contain w-full h-full  bg-center bg-no-repeat outline-none disabled:opacity-50">
            </div>
        </button>
    )
}