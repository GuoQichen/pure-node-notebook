
const mapUrlToRegExp = serverType => {
    if(typeof serverType !== 'string') throw new TypeError(`serverType must be string, but ${typeof serverType}`)

    const map = {
        static: '\/css|\/js|\/$',
        api: 'action$',
    }
    return new RegExp(map[serverType])
}

module.exports = mapUrlToRegExp 