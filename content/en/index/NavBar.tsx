import NavBarTemplate from "../../../components/NavBar/NavBar"

const navLinkArray = [
    {title: "What is it?", href: "/#whatisit" },
    {title: "Features", href: "/#features" },
    {title: "Why?", href: "/#why" },
    {title: "Get Started", href: "/#getstarted" }
]

const languages = {
    text: "EN"
}

const menuLinkArray = [
    {title: "What is it?", href: "/#whatisit" },
    {title: "Features", href: "/#features" },
    {title: "Why?", href: "/#why" },
    {title: "Get Started", href: "/#getstarted" }
]

type NavBarContent ={
    backdropBlur : boolean
}

export default function NavBar({backdropBlur}: NavBarContent) {
    return <NavBarTemplate languageSwitcher={false} backdropBlur={backdropBlur} navLinkArray={navLinkArray} languages={languages} menuLinkArray={menuLinkArray} sections={["start", "whatisit", "features", "why", "getstarted"]} />
}