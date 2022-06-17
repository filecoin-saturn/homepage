import NavBarTemplate from "../../../components/NavBar/NavBar"

const navLinkArray = [
    {title: "What is Saturn?", href: "/#whatissaturn" },
    {title: "Goals", href: "/#goals" },
    {title: "How it works?", href: "/#howitworks" },
    {title: "Roadmap", href: "/#roadmap" },
    {title: "Get Started", href: "/#getstarted" }
]

const languages = {
    text: "EN"
}

const menuLinkArray = [
    {title: "What is Saturn?", href: "/#whatissaturn" },
    {title: "Goals", href: "/#goals" },
    {title: "How it works?", href: "/#howitworks" },
    {title: "Roadmap", href: "/#roadmap" },
    {title: "Get Started", href: "/#getstarted" }
]

type NavBarContent ={
    backdropBlur : boolean
}

export default function NavBar({backdropBlur}: NavBarContent) {
    return <NavBarTemplate languageSwitcher={false} backdropBlur={backdropBlur} navLinkArray={navLinkArray} languages={languages} menuLinkArray={menuLinkArray} sections={["start", "whatissaturn", "goals", "howitworks", "roadmap", "getstarted"]} />
}

