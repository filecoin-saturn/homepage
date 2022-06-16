type props = {
    text: string
    disabled: boolean
    backdropBlur: boolean

}

export default function Button9({text, disabled, backdropBlur}: props) {
    return (
        <button disabled={disabled} className={`disabled:opacity-30 disabled:pointer-events-none group outline-none`}>
            <div className={`justify-center relative text-sat-grey-1 flex group-active:scale-90 items-center p-1 border-2 border-transparent group-focus-visible:border-white group-focus-visible:text-white rounded-full group-hover:text-white will-change-transform ${backdropBlur ? `supports-blur:group-hover:bg-white/10 supports-blur:group-active:bg-white/25 supports-blur:group-hover:backdrop-blur-md supports-blur:group-active:backdrop-blur-md supports-blur:group-focus-visible:bg-white/10 group-hover:bg-sat-fallback-grey-1/70 group-active:bg-sat-fallback-grey-2/70 group-focus-visible:bg-sat-fallback-grey-1/90` : `group-hover:bg-sat-fallback-grey-1/70 group-active:bg-sat-fallback-grey-2/70 group-focus-visible:bg-sat-fallback-grey-1/90`}`}>
                <div className="font-inter font-regular antialiased inset-0 tracking-wide">
                    {text}
                </div>
            </div>
        </button>
    )
}
