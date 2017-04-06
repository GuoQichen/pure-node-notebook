const ejs = require('ejs')
const path = require('path')

// console.log(ejs)

const html = `hello 
    <% if(world.match('guo')) { %>
    <%- world %>
    <% } %>
    <%- include('./test') %>
    `
const world = 'guoqichen'
const test = `<script>alert('heelo')<script>`
console.log(ejs.compile(html, {
    filename: path.resolve(__filename),
    compileDebug: true,
})({ world }))

console.log(__filename)



