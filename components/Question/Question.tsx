import {useContent} from '../../content/content'
import CustomProse from '../CustomProse/CustomProse'

type Props = {
    contentId?: string
}

export default function Question({contentId}: Props) {
    const content = useContent(contentId ?? "")
    return (
            <CustomProse overrides='prose-h6:my-0 prose-h6:font-bold prose-h6:antialised prose-h6:md:text-lg prose-h6:lg:text-2xl prose-h6:font-black prose-h6:leading-5 prose-h6:lg:leading-6'>
                <h6>
                    {content}
                </h6>
            </CustomProse>
    )
}