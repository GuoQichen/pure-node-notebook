const fs = require('fs')

class App {
    constructor() {

    }

    initServer() {
        

        return (request, response) => {
            response.end('hello world')
        }
    }
}

module.exports = App