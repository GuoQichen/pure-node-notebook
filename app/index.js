const staticServerAsync = require('./static-server')
const apiServer = require('./api')
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

            staticServerAsync(request)
                .then(apiServer)
                .then(resFunc)
                .catch(handleError)
        }
    }
}

module.exports = App