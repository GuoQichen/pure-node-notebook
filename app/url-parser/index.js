/**
 * url-parser
 * 处理客户端post请求的数据
 */

module.exports = context => {
    const { request, requestCtx } = context
    
    return Promise.resolve({
        then(next) {
            if(requestCtx.method !== 'post') return next()

            let data = ''
            request.on('data', chunk => {
                data += chunk
            }).on('end', () => {
                requestCtx.body = data
                next()
            })
    }
    })
}