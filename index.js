const http = require('http')
const App = require('./app')
const PORT = 7000

const server = new App()

http.createServer(server.initServer()).listen(PORT, () => {
    console.log(`listen in ${PORT}`)
})