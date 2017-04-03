/**
 * @author AckyGuo
 * apiServerAsync
 */

const querystring = require('querystring')
const mapUrlToRegExp = require('../utils/mapRegExp')

const apiServerAsync = request => {
    const { url, method } = request                

        if(!mapUrlToRegExp('api').test(url)) return request

        const header = {
            'Content-Type': 'application/json'
        }
        const apiMapToSolution = {
            '/list.action': ['a', 'b', 'c'],
            '/user.action': ['guoqichen', 'man', 'chinese']
        }
        return Promise.resolve({ data: JSON.stringify(apiMapToSolution[url]), header })    
}

module.exports = apiServerAsync