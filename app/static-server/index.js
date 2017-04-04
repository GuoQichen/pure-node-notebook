/**
 * @author AckyGuo
 * staticServerAsync 
 */


const path = require('path')
const fs = require('fs')
const STATIC = 'public'

const mapUrlToRegExp = require('../utils/mapRegExp')

const staticServerAsync = context => {  
    const { request, responseCtx } = context
    const { url } = request

    const getUrl = url => { 
        const staticPrex = path.resolve(process.cwd(), STATIC)
        if(url === '/') url = '/index.html'    
        return path.resolve(staticPrex, `.${url}`)
    }    

    return Promise.resolve({
        then(next, onRejected) {
            if(!mapUrlToRegExp('static').test(url)) return next()
            fs.readFile(getUrl(url), (error, data) => {
                if(error) onRejected(error)
                responseCtx.body = data
                next()
            })
        }
    })



        
    return new Promise((resolve, reject) => {
       
    })
}

module.exports = staticServerAsync
