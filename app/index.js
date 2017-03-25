const staticServerAsync = require('./static-server')
const apiServer = require('./api')
class App {
    constructor() {

    }

    initServer() {
        

        return (request, response) => {
            const { url } = request

            const resFunc = (data, header = {}) => {
                response.writeHead(200, 'ok', Object.assign(header, { 'X-powered-by': 'Node' }))
                response.end(data)
            }

            if(url.match('action')) {
                const header = {
                    'Content-Type': 'application/json'
                }
                // resFunc(JSON.stringify(apiServer(url)), header) // 同步
                apiServer(url).then(data => {
                    resFunc(JSON.stringify(data), header)
                })
            } else {
                staticServerAsync(url).then(data => {
                    resFunc(data)
                    // response.end(data) // 参数必须是buffer或者字符串
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
}

module.exports = App