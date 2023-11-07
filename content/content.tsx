import { set as _set, get as _get } from "lodash";
import path from "path";
import * as runtime from 'react/jsx-runtime'
import { useRouter } from 'next/router'

function importAll(webpackContext: __WebpackModuleApi.RequireContext) {
    const content = {}
    webpackContext.keys().forEach((fileUrl) => {
        const body = webpackContext(fileUrl);
        const file = body.default
        const contentPath = path.relative('./', fileUrl).replace(".mdx", "").replace("/", ".")
        for (const key in file) {
            if (Object.prototype.hasOwnProperty.call(file, key)) {
                const element = file[key](runtime);
                _set(content, contentPath + "." + key, element)
            }
        }
    })
    return content
}

const contentFiles = importAll(require.context('./', true, /\.mdx$/));

export function useContent(contentId: string) {
    const router = useRouter()
    const locale = router.locale ?? "en"
    const p = `${locale}.${contentId}`.replace(/\.+/, ".")
    const value = _get(contentFiles, p)
    return value
}

type RenderMDXContentProps = {
    contentId: string
}

export default function RenderMDXContent({contentId}: RenderMDXContentProps) {
    const Component = useContent(contentId)
    if(!Component) throw Error("There might be something off with your content. Please double check contentId " + contentId + ".")
    return <Component/>
}
