/**
 * @author AckyGuo
 * apiServerAsync
 */

const mapUrlToRegExp = require('../utils/mapRegExp')

const apiServerAsync = url => {
    if(!mapUrlToRegExp('api').test(url)) return Promise.resolve(url)

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