import FeaturesTemplate from "../../../components/Features/Features"

    const content = [{
        image: "url(serve-content-logo.svg)",
        title: "Serve Content",
        text: "Serve content stored on Filecoin with low latency.",
    },
    {
        image: "url(lightning-logo.svg)",
        title: "Accelerate content",
        text: "Accelerate the adoption of Web3 by accelerating Web3 content, from NFTs to the Metaverse.",
    },
    {
        image: "url(deduplication-logo.svg)",
        title: "Everyone can join",
        text: "Provide a new, easier way for anyone to join the Filecoin network by lowering the hardware requirements to participate. Download a Filecoin app on your desktop and earn Filecoin.",
    },
    {
        image: "url(multi-peer-logo.svg)",
        title: "Multi-peer retrievals",
        text: "Unite a heterogeneous network of hardware -- from big servers in datacenters to end user desktops and phones -- into a fast, low-cost CDN.",
    },
  ]



type FeaturesContent = {
    animation?: () => () => void
    backdropBlur: boolean
}

export default function Features({animation, backdropBlur}: FeaturesContent) {
    return <FeaturesTemplate backdropBlur={backdropBlur} content={content} animation={animation}  />
}

