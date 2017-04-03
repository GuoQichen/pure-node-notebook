/**
 * url-parser
 * 处理客户端数据
 */

// request: query + body + method

module.exports = request => {
    const { context } = request

    return Promise.resolve({
        then(onFulfilled, onRejected) {
            if(context.method === 'post') {
                let data = ''
                setTimeout(() => {
                    request.on('data', chunk => {
                        data += chunk
                    }).on('end', () => {
                        context.body = data
                        onFulfilled(request)
                    })
                }, 1000)
            } else {
                onFulfilled(request)
            }
        }
    })
}