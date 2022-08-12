import Modal3 from "../Modal3/Modal3"

type Props = {
    children: React.ReactNode[]
    backdropBlur: boolean
    links: string[]
}

export default function Modal3List({children, backdropBlur, links}: Props) {
    return (
        <div className='flex -mx-1 flex-col space-y-4'>
            {children.map((child, i) => {
                return (
                    <Modal3 key={i} backdropBlur={backdropBlur} link={links[i]}>
                        {child}
                    </Modal3>
                )
            })}
        </div>
    )
}