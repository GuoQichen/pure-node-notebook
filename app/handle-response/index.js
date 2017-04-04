module.exports = (context) => {
    const { responseCtx, response } = context
    const { headers, body } = responseCtx
    response.writeHead(200, 'ok', Object.assign(headers, { 'X-powered-by': 'Node' }))
    response.end(body)
}