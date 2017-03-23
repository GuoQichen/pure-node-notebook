const fs = require('fs')
const path = require('path')

class App {
    constructor() {

    }

    initServer() {
        

        return (request, response) => {

            const mapUrlToFile = {
                '/': 'public/index.html',
                '/css/index.css': 'public/css/index.css',
                '/js/index.js': 'public/js/index.js'
            }

            const url = mapUrlToFile[request.url] || ''

            path.resolve('hello', 'hi')
            fs.readFile(url, (error, data) => {
                if(error) data = 'sorry, NOT FOUND'
                response.end(data)
            })
            
        }
    }
}

module.exports = App