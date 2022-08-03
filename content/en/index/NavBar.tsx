import NavBarTemplate from "../../../components/NavBar/NavBar"

const navLinkArray = [
    {title: "What is Saturn", href: "/#whatissaturn", highlight: false },
    {title: "Goals", href: "/#goals", highlight: false },
    {title: "How it works", href: "/#howitworks", highlight: false },
    {title: "Roadmap", href: "/#roadmap", highlight: false },
    {title: "Get involved", href: "/#getinvolved", highlight: false },
    {title: "Careers", href: "/#careers", highlight: true}
]

const languages = {
    text: "EN"
}

const menuLinkArray = [
    {title: "What is Saturn", href: "/#whatissaturn", highlight: false },
    {title: "Goals", href: "/#goals", highlight: false },
    {title: "How it works", href: "/#howitworks", highlight: false },
    {title: "Roadmap", href: "/#roadmap", highlight: false },
    {title: "Get involved", href: "/#getinvolved", highlight: false },
    {title: "Careers", href: "/#careers", highlight: true}
]

type NavBarContent ={
    backdropBlur : boolean
}

export default function NavBar({backdropBlur}: NavBarContent) {
    return <NavBarTemplate languageSwitcher={false} backdropBlur={backdropBlur} navLinkArray={navLinkArray} languages={languages} menuLinkArray={menuLinkArray} sections={["start", "whatissaturn", "goals", "howitworks", "roadmap", "getinvolved", "careers"]} />
}

