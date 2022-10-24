

export async function getUptoDateMetrics(content : Array<{number: number}>) {
    const options = {method: 'GET'};
    const response = await fetch('https://uc2x7t32m6qmbscsljxoauwoae0yeipw.lambda-url.us-west-2.on.aws/?filAddress=all&startDate=1662596100000&endDate=1663200900000&step=day', options)
    const jsonResponse = await response.json()
    if(jsonResponse) {
        const pops = jsonResponse.nodes ? jsonResponse.nodes[0].count + jsonResponse.nodes[1].count : content[0].number
        const numRequestsServed = (jsonResponse.metrics[0].numRequests / 1000000) > 100 ? jsonResponse.metrics[0].numRequests / 1000000 : content[1].number
        return [Number(pops.toFixed()), Number(numRequestsServed.toFixed())]
    }else {
        return [0,0]
    }
}