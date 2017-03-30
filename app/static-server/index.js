/**
 * @author AckyGuo
 * staticServerAsync 
 */


const path = require('path')
const fs = require('fs')
const STATIC = 'public'

const mapUrlToRegExp = require('../utils/mapRegExp')

const staticServerAsync = request => {  
    const { url, method } = request
    if(!mapUrlToRegExp('static').test(url)) return Promise.resolve(request)

    const getUrl = url => { 
        const staticPrex = path.resolve(process.cwd(), STATIC)
        if(url === '/') url = '/index.html'    
        return path.resolve(staticPrex, `.${url}`)
    }
        
    return new Promise((resolve, reject) => {
        fs.readFile(getUrl(url), (error, data) => {
            if(error) reject(error)
            resolve({ data })
        })        
    })
}

module.exports = staticServerAsync
