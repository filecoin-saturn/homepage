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
    const response = await fetch('https://uc2x7t32m6qmbscsljxoauwoae0yeipw.lambda-url.us-west-2.on.aws/?filAddress=all&startDate=1662596100000&endDate=1663200900000&step=day', options, )
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
        // TODO: replace the "nodes" array of objects with a simple
        // "nodeCounts" object with "state" keys and "count" values,
        // like:
        //
        //   "nodeCounts": {
        //      "inactive": 563,
        //      "down": 2,
        //      "inactive": 8,}
        //  
        let pops = undefined
        for (const nodeCount of (jsonResponse.nodes || [])) {
            if (nodeCount.state === 'active') {
                pops = nodeCount.count
                break
            }
        }
        if (pops === undefined && !jsonResponse.nodes) {
            pops = content[0].number
        }
        if (pops === undefined) {
            pops = 0
        }

        const numRequestsServed = (jsonResponse.metrics[0].numRequests / 1000000) > 100 ? jsonResponse.metrics[0].numRequests / 1000000 : content[1].number
        return [Number(pops.toFixed()), Number(numRequestsServed.toFixed())]
    }else {
        return [0,0]
    }
}
