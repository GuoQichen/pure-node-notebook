const staticServerAsync = require('./static-server')
const apiServer = require('./api')
class App {
    constructor() {

    }

    initServer() {
        return (request, response) => {
            const { url } = request                
            const resFunc = ({ data, header = {} }) => {
                response.writeHead(200, 'ok', Object.assign(header, { 'X-powered-by': 'Node' }))
                response.end(data)
            }
            const handleError = error => console.log(error)

            staticServerAsync(url)
                .then(apiServer)
                .then(resFunc)
                .catch(handleError)
        }
    }
}

module.exports = App