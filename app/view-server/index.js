/**
 * view-server
 * @Author Acky.guo
 */

// 映射表，ejs动态渲染

const ejs = require('ejs')
const fs = require('fs')
const path = require('path')
const mime = require('mime')
module.exports = (context) => {
    const { request, responseCtx } = context    
    const { url } = request

    return Promise.resolve({ then(next, onRejected) {

        // 映射表
        const urlMap = {
            '/': {
                viewName: 'index.html'
            },
            '/about': {
                viewName: 'about.html'
            }
        }
        if(!urlMap[url]) return next()

        const { viewName } = urlMap[url]

        const file = fs.readFileSync(path.resolve(process.cwd(), 'public', viewName), 'utf8')

        responseCtx.headers = Object.assign(responseCtx.headers, {
            'Content-Type': mime.lookup(viewName)
        })

        const render = ejs.compile(file, {
            compileDebug: true,
        })

        responseCtx.body = render()

        next()
    }})
}