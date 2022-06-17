import GoalsTemplate from "../../../components/Goals/Goals"

    const content = [{
        image: "serve-content-logo.svg",
        title: "Fast retrievals",
        text: "Serve content stored on Filecoin with low latency.",
    },
    {
        image: "lightning-logo.svg",
        title: "Engender Web3",
        text: "Accelerate the adoption of Web3 by accelerating Web3 content, from NFTs to the Metaverse.",
    },
    {
        image: "deduplication-logo.svg",
        title: "Grow the Filecoin network",
        text: "Provide a new, easier way for anyone to join the Filecoin network by lowering the hardware requirements to participate. Download the Saturn app on your desktop and earn Filecoin.",
    },
    {
        image: "multi-peer-logo.svg",
        title: "Include everyone",
        text: "Unite a network of heterogeneous hardware into a fast, low-cost CDN -- from big servers in datacenters to end user desktops and phones.",
    },
  ]



type GoalsContent = {
    animation?: () => () => void
    backdropBlur: boolean
}

export default function Goals({animation, backdropBlur}: GoalsContent) {
    return <GoalsTemplate backdropBlur={backdropBlur} content={content} animation={animation}  />
}

