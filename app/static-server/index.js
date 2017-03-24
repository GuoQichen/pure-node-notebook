
/**
 * @author AckyGuo
 * @param {*} url 
 */

const path = require('path')
const fs = require('fs')
const STATIC = 'public'
const staticServerAsync = url => {  
    const getUrl = url => { 
        const staticPrex = path.resolve(process.cwd(), STATIC)
        if(url === '/') url = '/index.html'    
        return path.resolve(staticPrex, `.${url}`)
    }
    
    const _path = getUrl(url)
    
    return new Promise((resolve, reject) => {
        fs.readFile(_path, (error, data) => {
            if(error) reject(error)
            resolve(data)
        })        
    })
}

module.exports = staticServerAsync
