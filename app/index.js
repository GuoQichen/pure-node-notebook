const staticServerAsync = require('./static-server')
const apiServer = require('./api')
const urlParser = require('./url-parser')
const querystring = require('querystring')
class App {
    constructor() {
        this.middleWareList = []
    }

    use(middleWare) {
        this.middleWareList.push(middleWare)
    }

    composeMiddleware(context) {
        return this.middleWareList.reduce((chain, middleWare) => chain.then((...arg) => {
            return middleWare(context, ...arg)
        }), Promise.resolve())
    }

    initServer() {
        return (request, response) => {
            const context = {
                request,
                response,
                requestCtx: {
                    method: request.method.toLowerCase(),
                    query: querystring.parse(request.query),
                    body: ''
                },
                responseCtx: {
                    statusMessage: 'resolved ok',
                    statusCode: 200,
                    headers: {},
                    body: ''
                }
            }

            const handleError = (error) => console.log(error)

            this.composeMiddleware(context)
                .catch(handleError)
        }
    }
}

module.exports = App