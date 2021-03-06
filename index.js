const http = require('http')
const App = require('./app')
// middleWare
const apiServer = require('./app/api')
const staticServer = require('./app/static-server')
const urlParser = require('./app/url-parser')
const handleResponse = require('./app/handle-response')
const viewServer = require('./app/view-server')
const cookieParser = require('./app/cookie-parser')

const PORT = 7000

const server = new App()

server.use(cookieParser)
server.use(urlParser)
server.use(apiServer)
server.use(staticServer)
server.use(viewServer)
server.use(handleResponse)

http.createServer(server.initServer()).listen(PORT, () => {
    console.log(`listen in ${PORT}`)
})