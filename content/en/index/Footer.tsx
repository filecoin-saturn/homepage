import FooterTemplate from "../../../components/Footer/Footer";

const links = [
    {
        title: "Learn More",
        links: [
            {text: "GitHub", link: "", backgroundImage: "url(github-logo.svg)"},
            {text: "Notion", link: "", backgroundImage: "url(notion-logo.svg)"},
        ]
    },
    {
        title: "Reach Out",
        links: [
            {text: "Slack", link: "", backgroundImage: "url(slack-logo.svg)"}
        ]
    }
]

const credits = {text: "Made with ", logo: "url(heart-logo.svg)", text2: "by protocol labs"}

export default function Footer({animation}: {animation?: () => () => void}) {
    return <FooterTemplate links={links} credits={credits} animation={animation} />
}