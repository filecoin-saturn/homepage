import FeaturesTemplate from "../../../components/Features/Features"

    const content = [{
        image: "url(permissionless-logo.svg);",
        title: "Permissionless",
        side: "left",
        justify: "start",
        text: "Saturn is an open network. Anyone can participate and run a node.",
    },
    {
        image: "url(content-addressed-logo.svg);",
        title: "Content-addressed",
        side: "right",
        justify: "end",
        text: "CIDs only. Saturn is a web3 CDN.",
    },
    {
        image: "url(crypto-logo.svg);",
        title: "Crypto incentivized",
        side: "left",
        justify: "start",
        text: "Contribute resources to the network and get paid in FIL.",
    },
    {
        image: "url(multi-peer-logo.svg);",
        title: "Multi-peer retrievals",
        side: "right",
        justify: "end",
        text: "Retrieve files from multiple peers at once. The more the merrier!",
    },
    {
        image: "url(deduplication-logo.svg);",
        title: "Deduplication",
        side: "left",
        justify: "start",
        text: "You can’t upload a file twice. The network will always return the first copy.",
    },
    {
        image: "url(lightning-logo.svg);",
        title: "Big files at lightspeed",
        side: "right",
        justify: "end",
        text: "We built a network for web3 data. High speeds for large files.",
    },
    {
        image: "url(data-logo.svg);",
        title: "Data verifiability",
        side: "left",
        justify: "start",
        text: "You get what you ask for - nothing else. ",
    },
    {
        image: "",
        title: "",
        side: "",
        justify: "",
        text: "",
    }
  ]


export default function Features() {
    return <FeaturesTemplate content={content} />
}

