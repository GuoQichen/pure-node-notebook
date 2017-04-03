const staticServerAsync = require('./static-server')
const apiServer = require('./api')
const urlParser = require('./url-parser')
const querystring = require('querystring')
class App {
    constructor() {

    }

    initServer() {
        return (request, response) => {
            request.context = {
                method: request.method.toLowerCase(),
                query: querystring.parse(request.query),
                header: {},
                body: '',
            }

            const resFunc = () => {
                const { body, header } = request.context
                response.writeHead(200, 'ok', Object.assign(header, { 'X-powered-by': 'Node' }))
                response.end(body)
            }

            const handleError = error => console.log(error)

            urlParser(request)
                .then(staticServerAsync)
                .then(apiServer)
                .then(resFunc)
                .catch(handleError)
        }
    }
}

module.exports = App