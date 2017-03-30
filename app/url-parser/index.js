/**
 * url-parser
 * 处理客户端数据
 */

// request: query + body + method

module.exports = (request) => {
    const { url, method } = request 

    
    return Promise.resolve({
        then: (onFulfilled, onRejected) => {
            let data = ''
            request.on('data', chunk => {
                data += chunk
            }).on('end', () => {
                resolve({ data })
            })
        }
    })
}