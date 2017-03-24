const staticServerAsync = require('./static-server')
class App {
    constructor() {

    }

    initServer() {
        

        return (request, response) => {
            const { url } = request
            staticServerAsync(url).then(data => {
                response.end(data)
            }).catch(error => {
                console.log(error)
            })
        }
    }
}

module.exports = App