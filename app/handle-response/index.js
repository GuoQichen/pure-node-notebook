module.exports = context => {
    const { responseCtx, response } = context
    const { headers, body, statusCode, statusMessage } = responseCtx
    response.writeHead(statusCode, statusMessage, Object.assign(headers, { 'X-powered-by': 'Node' }))
    response.end(body)
}