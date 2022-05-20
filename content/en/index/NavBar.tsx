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

export default function NavBar() {
    return <NavBarTemplate navLinkArray={navLinkArray} languages={languages} menuLinkArray={menuLinkArray} />
}