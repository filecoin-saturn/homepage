type Props = {
    email?: string,
    additionalClasses: string
}

export default function Button14({email, additionalClasses}: Props) {
  
    return (
        <button onClick={() => {navigator.clipboard.writeText(email??"")}} className={`group group-focus-visible:delay-0 group-focus-visible:transition-none active:scale-90 group-active:scale-90 focus-visible:delay-0 cursor-pointer outline-none ${additionalClasses}`}>
            <div className=" group-focus-visible:delay-0 group-focus-visible:transition-none focus-visible:delay-0 group-active:transition-none duration-0 transition-[opacity, colors] delay-[2500ms] opacity-100 group-active:opacity-0 cursor-pointer block bg-sat-blue-3 rounded-full p-2.5 md:p-[0.6875rem] hover:bg-sat-grad-blue-green-3 outline-none hover:transition-opacity hover:shadow-colored hover:delay-[0] group-hover:transition-opacity group-hover:delay-[0] group-hover:bg-sat-grad-blue-green-3 group-hover:shadow-colored focus-visible:shadow-colored group-focus-visible:shadow-colored active:shadow-colored active:scale-90 focus-visible:outline-white outline-offset-0 group-focus-visible:outline-white ">
                <div className="bg-copy-button group-active:transition-none duration-0 transition-[opacity, colors] delay-[2500ms] opacity-100 group-active:opacity-0 bg-cover bg-no-repeat bg-center w-4 h-4 md:w-[1.125rem] md:h-[1.125rem]"></div>
            </div>
            <div className="group-active:transition-none duration-0 opacity-0 top-0 group-active:opacity-100 transition-[opacity, colors] delay-[2500ms] bg-sat-grad-blue-green-1-30 cursor-pointer absolute rounded-full p-2.5 md:p-[0.6875rem]  ">
                <div className="bg-check-icon bg-cover bg-no-repeat bg-center w-4 h-4 md:w-[1.125rem] md:h-[1.125rem]"></div>            
            </div>
        </button>
        
       
)
}
