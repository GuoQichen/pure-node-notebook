### lesson6
#### 模版引擎
1. 为什么要用模版引擎

    1. SEO
    2. 首屏加载
2. 经典网络架构

    1. 前后端不分离 ===> view engine

        1. node主流的两种模版引擎 ===> ejs、jade
    2. 前后端分离 ===> SPA
3. 基本需求，根据提供的变量动态渲染
4. ejs.compile原理是new Function()，将字符串变成function

    ```
    const f = new Function('a', 'b', 'c', 'return a+b+c')
    f(1,2,3)
    ```
5. ejs.compile中存在自己的命名空间

    ```
    ejs.compile(`hello <%- world %>`) ===> (locals) ===> 'hello' + lcoals.world
    ```
6. 主要tags

    1. `<% %>` 逻辑运算，控制流，不输出
    2. `<%- %>` unescape
    3. `<%= %>` escape
7. unescape 和 escape ===> 防止XSS

   1. 使用`<%- %>`不转义

        ```
        const html = `hello 
            <% if(world.match('guo')) { %>
            <%- world %>
            <% } %>
            <%- test %>
            `
        const world = 'guoqichen'
        const test = `<script>alert('heelo')<script>`
        console.log(ejs.compile(html)({ world, test }))
        ```
    2. 使用`<%= %>`不转义
8. ejs遇到include会调用fs.readFileSync()
9. ejs debugger

    ```
    ejs.compile(html, {
        compileDebug: true
    })
    ```
10. include的文件和父文件共同使用同一个上下文
11. 静态资源 ===> 图片，字体文件，js，css，不包含动态生成的html
12. 对于静态资源需要写 content-type ===> npm 模块 mime
#### webpack2
1. babelrc ===> babel root config 