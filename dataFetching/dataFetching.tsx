export async function getUptoDateMetrics(content : Array<{number: number}>) {
    // use fallback numbers if fetch doesn't receive data after 3 seconds
    const controller = new AbortController();
    const signal = controller.signal;
    const timeOut = setTimeout(() => {
        controller.abort()
        return Error("Aborted fetch due to slow connection")
    }, 10_000)
    const options = {
        method: 'GET',
        signal
    };
    const url = new URL('https://rz3fesbvmsl5diqsqyf26codxu0qnolz.lambda-url.us-west-2.on.aws/?filAddress=all&step=day')

    const pastDay = 1000 * 60 * 60 * 24
    url.searchParams.set("startDate", `${Date.now() - pastDay}`);
    url.searchParams.set("endDate", `${Date.now()}`);

    const response = await fetch(url.href, options)
    const jsonResponse = await response.json()
    if(jsonResponse) {
        clearTimeout(timeOut)

        // Example returned "nodes" value:
        //
        //   "nodes":[
        //      {"count":563,"state":"active"},
        //      {"count":2,"state":"down"},
        //      {"count":8,"state":"inactive"}]
        //
        const { nodes, globalStats } = jsonResponse
        let pops = undefined
        for (const nodeCount of (nodes || [])) {
            if (nodeCount.state === 'active') {
                pops = nodeCount.count
                break
            }
        }

        if (pops === undefined && !nodes) {
            pops = content[0].number
        }
        if (pops === undefined) {
            pops = 0
        }
        const numRequestsServedMillion = globalStats.totalRetrievals / 1_000_000

        return [
            Number(pops.toFixed()),
            Number(numRequestsServedMillion.toFixed()),
            globalStats.medianTTFB
        ]
    }else {
        return [0,0]
    }
}
