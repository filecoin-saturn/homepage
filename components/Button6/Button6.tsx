type props = {
    text: string
    disabled: boolean
    backdropBlur: boolean

}

export default function Button6({text, disabled, backdropBlur}: props) {
    return (
        <button disabled={disabled} className={`disabled:opacity-30 disabled:pointer-events-none group outline-none`}>
            <div className={`justify-center relative text-sat-gray-1 flex group-active:scale-90 items-center p-1 border-2 border-transparent group-focus-visible:border-white group-focus-visible:text-white rounded-full group-hover:text-white will-change-transform ${backdropBlur ? `supports-blur:group-hover:bg-white/10 supports-blur:group-active:bg-white/20 supports-blur:group-hover:backdrop-blur-md supports-blur:group-active:backdrop-blur-md supports-blur:group-focus-visible:bg-white/10 group-hover:bg-sat-white-10-fallback-1 group-active:bg-sat-white-20-fallback-1 group-focus-visible:bg-sat-white-10-fallback-1` : `group-hover:bg-sat-white-10-fallback-1 group-active:bg-sat-white-20-fallback-1 group-focus-visible:bg-sat-white-10-fallback-1`}`}>
                <div className="font-inter font-regular antialiased inset-0 tracking-wide">
                    {text}
                </div>
            </div>
        </button>
    )
}
