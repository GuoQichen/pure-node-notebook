
const cookieParser = require('cookie')



const whiteNameList = ['/name_guoqichen']
module.exports = context => {
    const { request, response, responseCtx } = context
    const { url } = request
    const { cookie } = request.headers  
    // const testCookieParse = cookie.split(';').reduce((obj, cookiePair) => {
    //     const pair = cookie.split('=')
    //     obj[pair[0]] = pair[1]
    //     return obj
    // }, {})
    // console.log(testCookieParse)
    const cookieResult = cookie ? cookieParser.parse(cookie) : {}
    const cookieDirective = time => `auth=true; Max-Age=${time};`
    return Promise.resolve({ then(next, onRejected) {
        // setCookie for whieNmaeList
        if(whiteNameList.indexOf(url) !== -1) {
            response.setHeader('Set-Cookie', cookieDirective(60*60*1000))
        }
        // getUserCookie
        if(cookieResult.auth) {
            responseCtx.hasUser = true
            // 自动延长时间
            response.setHeader('Set-Cookie', cookieDirective(60*60*1000))            
        }

        // logout
        if(url === '/logout') {
            response.setHeader('Set-Cookie', cookieDirective(0))            
        }
        next()
    }})
}