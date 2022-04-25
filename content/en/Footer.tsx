import FooterTemplate from "../../components/Footer/Footer";

const links = [
    {
        title: "Reach Out",
        links: [
            {text: "Slack", link: ""},
            {text: "WeChat", link: ""},
            {text: "Twitter", link: ""},
            {text: "Forum", link: ""},
            {text: "Matrix", link: ""}
        ]
    },
    {
        title: "Ressources",
        links: [
            {text: "Research", link: ""},
            {text: "Blog", link: ""},
            {text: "ProtoSchool", link: ""},
            {text: "Security", link: ""}
        ]
    },
    {
        title: "Saturn",
        links: [
            {text: "GitHub", link: ""}
        ]
    }
]

const credits = "Made with love by"

export default function Footer() {
    return <FooterTemplate links={links} credits={credits} />
}