type Props = {
    planName: string
    bandwidthAmount: string
    price: string
    overagePrice?: string
}

export default function PlanCard({planName, bandwidthAmount, price, overagePrice}: Props) {
    return (
      <div className="min-w-[300px] flex flex-col border-2 border-slate-400 rounded-lg text-white text-center p-6">
        <div className="text-sky-400 font-bold mb-4">{planName}</div>
        <div className="text-6xl mb-2">{bandwidthAmount}</div>
        <div className="mb-6">{price}</div>
        <div className="mb-8">
          {overagePrice && (
            <>
            <div className="text-slate-400">Overage</div>
            <div className="">{overagePrice}</div>
            </>
          )}
        </div>
        <a
          href={process.env.PORTAL_ORIGIN}
          target="_blank"
          rel="noreferrer"
          className="mt-auto rounded-xl bg-slate-100 text-black hover:bg-sat-blue-3 hover:text-white py-1 px-2 cursor-pointer">
          Get Started
        </a>
      </div>
    )
}
