/**
 * view-server
 * @Author Acky.guo
 */

// 映射表，ejs动态渲染

const ejs = require('ejs')
const fs = require('fs')
const path = require('path')
const mime = require('mime')
const urlrewriteMap = require('./urlrewrite')

module.exports = context => {
    const { request, responseCtx } = context    
    const { url } = request
    // const urlMap = {
    //     '/': {
    //         viewName: 'index.html'
    //     },
    //     '/about': {
    //         viewName: 'about.html'
    //     }
    // }

    return Promise.resolve({ then(next) {
        if(/action/.test(url) || /\./.test(url)) return next()

        const viewPath = path.resolve(__dirname, 'ejs')
        const ejsName = urlrewriteMap[url]
        if(ejsName) {
            const layoutPath = path.resolve(viewPath, `layout.ejs`)
            const layoutHtml = fs.readFileSync(layoutPath, 'utf8')

            const render = ejs.compile(layoutHtml, {
                filename: layoutPath,
                compileDebug: true,
            })

            responseCtx.body = render({
                templateName: ejsName,
                title: 'Guoqichen\'s world',
                hasUser: responseCtx.hasUser
            })
            responseCtx.headers = Object.assign(responseCtx.headers, {
                'Content-Type':  'text/html'
            })

            return next()
        } else {
            // 重定向，如果status code不正确，重定向会失败
            responseCtx.headers = Object.assign(responseCtx.headers, {
                'Location': '/'
            })
            responseCtx.statusCode = 302
            responseCtx.statusMessage = 'redirect'
            responseCtx.body = ''
            next()
        }
    }})




    // return Promise.resolve({ then(next, onRejected) {
    //     if(!urlMap[url]) return next()

    //     const { viewName } = urlMap[url]
    //     const file = fs.readFileSync(path.resolve(process.cwd(), 'public', viewName), 'utf8')
    //     responseCtx.headers = Object.assign(responseCtx.headers, {
    //         'Content-Type': mime.lookup(viewName)
    //     })
    //     const render = ejs.compile(file, {
    //         compileDebug: true,
    //     })
    //     responseCtx.body = render()
    //     next()
    // }})
}