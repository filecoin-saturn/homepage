import Modal3ListTemplate from "../../../components/Modal3List/Modal3List";
import CareersJobTitle1 from './careers-job-title-1.mdx'
import CareersJobTitle2 from './careers-job-title-2.mdx'
import CareersJobTitle3 from './careers-job-title-3.mdx'

type Props = {
    backdropBlur: boolean
}

const links = [
    "https://docs.google.com/document/d/1YD5nm2Xl_Ou4H0andiUuEAtR9Dkyebg7WHiMKOoJBjw/edit#heading=h.m8cb1y5cszh7",
    "https://docs.google.com/document/d/1XVCz1uiI5vKdKRNugwsHp9U5f2L6Zk6A2q-57eAmLno/edit#heading=h.noe02bov1nc3",
    "https://docs.google.com/document/d/1_HTxZqBLZVNLzXjCx55ZekIO7SWv1gwtigcCe38qQDE/edit#heading=h.m8cb1y5cszh7"
]

export default function Modal3List({backdropBlur}: Props) {
    return (
        <Modal3ListTemplate backdropBlur={backdropBlur} links={links}>
            <CareersJobTitle1/>
            <CareersJobTitle2/>
            <CareersJobTitle3/>
        </Modal3ListTemplate>
    )
}