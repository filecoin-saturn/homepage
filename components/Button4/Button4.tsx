type Props = {
    isOpen: boolean,
    aria: string
    onClick: () => void

}

export default function Button4({isOpen, onClick, aria}: Props) {
    return (
        <button 
            onClick={onClick}
            className={`flex items-center justify-center outline-none group relative ${isOpen ? `rotate-45` : ``} `}
            aria-label={aria}
        >
            <div className="relative group-active:scale-125 scale-110 bg-outer-menu-button group-hover:bg-outer-menu-button-hover group-active:bg-outer-menu-button group-focus-visible:bg-outer-menu-button-focus bg-contain bg-no-repeat bg-center h-8 w-8">              
            </div>
            <div className="absolute bg-inner-menu-button group-hover:bg-inner-menu-button-hover group-active:bg-inner-menu-button bg-contain bg-no-repeat bg-center w-8 h-8 scale-75">
            </div>
            <div className={`shadow-colored absolute group-active:scale-[120%] w-full h-full group-active:p-4 rounded-full -z-20 group-focus-visible:bg-sat-white-30-fallback-1 group-hover:bg-sat-white-20-fallback-1 group-active:bg-sat-white-20-fallback-1 bg-sat-white-5-fallback-1 `}>
            </div>
        </button>
    )
}