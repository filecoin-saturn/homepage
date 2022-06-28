import FooterTemplate from "../../../components/Footer/Footer";

const links = [
    {
        title: "Learn More",
        links: [
            {text: "GitHub", link: "https://github.com/filecoin-project/saturn-node ", backgroundImage: "url('github-logo.svg')"},
            {text: "Notion", link: "https://www.notion.so/pl-strflt/Filecoin-Saturn-efc122f123f344ff8ff0de6071954dba", backgroundImage: "url('notion-logo.svg')"},
        ]
    },
    {
        title: "Reach Out",
        links: [
            {text: "Slack", link: "https://filecoin.io/slack", backgroundImage: "url('slack-logo.svg')"}
        ]
    }
]

const credits = {text: "Made with ", logo: "url(heart-logo.svg)", text2: "by protocol labs"}

type FooterContent = {
    animation?: () => () => void
    backdropBlur: boolean
}


export default function Footer({animation, backdropBlur}: FooterContent) {
    return <FooterTemplate backdropBlur={backdropBlur} links={links} credits={credits} animation={animation} />
}