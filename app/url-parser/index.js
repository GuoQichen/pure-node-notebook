/**
 * url-parser
 * 处理客户端数据
 */

// request: query + body + method

module.exports = (request) => {
    const { url, method } = request 

    return Promise.resolve({
        then(onFulfilled, onRejected) {

            if(method === 'POST') {
                let data = ''
                setTimeout(() => {
                    request.on('data', chunk => {
                        data += chunk
                    }).on('end', () => {
                        onFulfilled({ data })
                    })
                }, 1000)
            } else {
                onFulfilled(request)
            }
        }
    })
}