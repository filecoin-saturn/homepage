export async function getUptoDateMetrics(content : Array<{number: number}>) {
    // use fallback numbers if fetch doesn't receive data after 3 seconds
    const controller = new AbortController();
    const signal = controller.signal;
    const timeOut = setTimeout(() => {
        controller.abort()
        return Error("Aborted fetch due to slow connection")
    }, 3000)
    const options = {
        method: 'GET',
        signal
    };
    const url = new URL('https://uc2x7t32m6qmbscsljxoauwoae0yeipw.lambda-url.us-west-2.on.aws/?filAddress=all&step=day')

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
        const numRequestsServed = numRequestsServedMillion > 100
            ? numRequestsServedMillion
            : content[1].number

        return [Number(pops.toFixed()), Number(numRequestsServed.toFixed())]
    }else {
        return [0,0]
    }
}
