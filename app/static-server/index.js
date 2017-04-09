/**
 * @author AckyGuo
 * staticServerAsync 
 */


const path = require('path')
const fs = require('fs')
const STATIC = 'public'
const mime = require('mime')

const staticServerAsync = context => {  
    const { request, responseCtx } = context
    const { url } = request

    const getUrl = url => { 
        const staticPrex = path.resolve(process.cwd(), STATIC)
        return path.resolve(staticPrex, `.${url}`)
    }    

    return Promise.resolve({
        then(next, onRejected) {
            if(!/(\/css|\/js)$/.test(url)) return next()

            fs.readFile(getUrl(url), (error, data) => {
                if(error) onRejected(error)
                responseCtx.headers = Object.assign(responseCtx.headers, {
                    'Content-Type': mime.lookup(getUrl(url)),
                })
                responseCtx.body = data
                next()
            })
        }
    })



        
    return new Promise((resolve, reject) => {
       
    })
}

module.exports = staticServerAsync
