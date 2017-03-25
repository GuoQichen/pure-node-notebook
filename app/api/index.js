/**
 * api server
 */

module.exports = url => {

    const apiMapToSolution = {
        '/list.action': ['a', 'b', 'c'],
        '/user.action': ['guoqichen', 'man', 'chinese']
    }

    // return  apiMapToSolution[url]
    return Promise.resolve(apiMapToSolution[url])
}