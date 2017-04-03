/**
 * @author AckyGuo
 * apiServerAsync
 */

const querystring = require('querystring')
const mapUrlToRegExp = require('../utils/mapRegExp')

const apiServerAsync = request => {
    const { url, context } = request                

        if(!mapUrlToRegExp('api').test(url)) return request

        const header = {
            'Content-Type': 'application/json'
        }
        const apiMapToSolution = {
            '/list.action': ['a', 'b', 'c'],
            '/user.action': ['guoqichen', 'man', 'chinese']
        }

        context.body = JSON.stringify(apiMapToSolution[url])
        context.header = header
        return Promise.resolve(request)    
}

module.exports = apiServerAsync