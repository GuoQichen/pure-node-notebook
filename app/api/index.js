/**
 * @author AckyGuo
 * apiServerAsync
 */

const querystring = require('querystring')
const mapUrlToRegExp = require('../utils/mapRegExp')

const apiServerAsync = request => {
    const { url, method } = request                

    if(method === 'POST') {
        return new Promise((resolve, reject) => {
            let data = ''
            setTimeout(() => {
                request.on('data', chunk => {
                    data += chunk
                }).on('end', () => {
                    const result = querystring.parse(data)
                    resolve({ data: JSON.stringify(result) })
                })
            }, 2000)
        })
    } else {

        if(!mapUrlToRegExp('api').test(url)) return Promise.resolve(request)

        const header = {
            'Content-Type': 'application/json'
        }
        const apiMapToSolution = {
            '/list.action': ['a', 'b', 'c'],
            '/user.action': ['guoqichen', 'man', 'chinese']
        }
        return Promise.resolve({ data: JSON.stringify(apiMapToSolution[url]), header })    
    }
}

module.exports = apiServerAsync