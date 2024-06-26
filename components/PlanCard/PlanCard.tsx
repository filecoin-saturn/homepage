import { SIGN_UP_URL } from "../../lib/constants";

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
      </div>
    )
}
