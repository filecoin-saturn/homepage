import NavBarTemplate from "../../components/NavBar/NavBar";

const navLinkArray = [
    {title: "How it works", href: "/#howitworks" },
    {title: "Download", href: "/#download" }
]

const languages = {
    text: "ENG"
}

const menuLinkArray = [
    {title: "Intro", href: "/#intro" },
    {title: "How it works", href: "/#howitworks" },
    {title: "Download", href: "/#download" }
]

export default function NavBar() {
    return <NavBarTemplate navLinkArray={navLinkArray} languages={languages} menuLinkArray={menuLinkArray} />
}