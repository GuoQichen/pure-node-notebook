const fs = require('fs')
const path = require('path')

const STATIC = 'public'

class App {
    constructor() {

    }

    initServer() {
        

        return (request, response) => {
            const { url } = request

            const getUrl = url => { 
                const staticPrex = path.resolve(process.cwd(), STATIC)
                if(url === '/') url = '/index.html'    
                return path.resolve(staticPrex, `.${url}`)
            }
            
            const _path = getUrl(url)
            fs.readFile(_path, (error, data) => {
                if(error) data = 'sorry, NOT FOUND'
                response.end(data)
            })
            // const mapUrlToFile = {
            //     '/': 'public/index.html',
            //     '/css/index.css': 'public/css/index.css',
            //     '/js/index.js': 'public/js/index.js'
            // }

            // const url = mapUrlToFile[request.url] || ''
        }
    }
}

module.exports = App