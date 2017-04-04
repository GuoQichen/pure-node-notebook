/**
 * @author AckyGuo
 * apiServerAsync
 */

const querystring = require('querystring')
const mapUrlToRegExp = require('../utils/mapRegExp')

const apiServerAsync = (context) => {
    const { request, responseCtx } = context
    const { url } = request

    const headers = {
        'Content-Type': 'application/json'
    }
    const apiMapToSolution = {
        '/list.action': ['a', 'b', 'c'],
        '/user.action': ['guoqichen', 'man', 'chinese']
    }    

    return Promise.resolve({
        then(next) {
            if(!mapUrlToRegExp('api').test(url)) return next()
            responseCtx.body = JSON.stringify(apiMapToSolution[url])
            responseCtx.headers = Object.assign(responseCtx.headers, headers)
            next()
        }
    })
}

module.exports = apiServerAsync