const staticServerAsync = require('./static-server')
const apiServer = require('./api')
const urlParser = require('./url-parser')
class App {
    constructor() {

    }

    initServer() {
        return (request, response) => {
            const resFunc = ({ data, header = {} }) => {
                response.writeHead(200, 'ok', Object.assign(header, { 'X-powered-by': 'Node' }))
                response.end(data)
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