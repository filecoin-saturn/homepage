import FeaturesTemplate from "../../../components/Features/Features"

    const content = [{
        image: "url(permissionless-logo.svg)",
        title: "Permissionless",
        text: "Saturn is an open network.\nAnyone can participate and\nrun a node.",
    },
    {
        image: "url(content-addressed-logo.svg)",
        title: "Content-addressed",
        text: "CIDs only. Saturn is a web3 CDN.",
    },
    {
        image: "url(crypto-logo.svg)",
        title: "Crypto incentivized",
        text: "Contribute resources to the\nnetwork and get paid in FIL.",
    },
    {
        image: "url(multi-peer-logo.svg)",
        title: "Multi-peer retrievals",
        text: "Retrieve files from multiple\npeers at once. The more the\nmerrier!",
    },
    {
        image: "url(deduplication-logo.svg)",
        title: "Deduplication",
        text: "You can’t upload a file twice.\nThe network will always return the\nfirst copy.",
    },
    {
        image: "url(lightning-logo.svg)",
        title: "Big files at lightspeed",
        text: "We built a network for web3\ndata. High speeds for large files.",
    },
    {
        image: "url(data-logo.svg)",
        title: "Data verifiability",
        text: "You get what you ask for -\nnothing else. ",
    }, 
  ]


export default function Features({animation}: {animation?: () => Function}) {
    return <FeaturesTemplate content={content} animation={animation} />
}

