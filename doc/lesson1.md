### lesson1

1. package.json

    1. npm ls, 显示当前文件下下node_modules下所有的npm包
    2. npm install --save --verbose, 冗余模式打印安装过程
2. node_moudles
    
    1. require查找的路径

        核心模块 ===> node_modules ===> 文件模块，
        如果查找的是node_modules，那么查找路径就是不断是找上一级的node_modules目录，查找的路径可以在module.paths数组中找到，如果没找到就抛出错误
        ```
        [ '/Users/gqc/code/pure-node-notebook/node_modules',
        '/Users/gqc/code/node_modules',
        '/Users/gqc/node_modules',
        '/Users/node_modules',
        '/node_modules' ]
        ```
        查找策略，先看是路径还是只是一个id，是id再看是不是核心模块（fs，http，path），再看是不是node_modules包，按照module.paths去找
    2. require文件的后缀

        require的时候会进行后缀补齐，补齐的后缀包括.js, .json，如果既有package.js也有package.json，会先去找package.js
    3. requrie文件夹
    
        其实一个npm模块就是一个文件夹，package.json中有一个main字段，表示的就是npm包的入口，require默认会去找package.json里main指定的文件夹，默认是index.js
    4. node在初始化一个脚本的时候，都会在头尾包裹一些内容
        
        ```
        function(exports, require, modules) {
            // 
        }
        ```
3. CommonJS规范, 愿景是希望js能在任何地方运行

    1. 包括模块，二进制，buffer，I/O，网关等
    2. node借鉴CommonJS实现一套简易的模块系统
4. http模块

    1. 可以简单的认为，端口即服务
    2. linux命令，

        1. lsof -i:7000，这个命令可以查看7000这个端口正在运行的服务
        2. PID，process id即进程的id
        3. curl -i localhost:7000，-i 详细模式
    3. node --inspect index，开启chrome的debugger模式

        1. chrome://flags，启用开发者工具实用性功能
        2. 重启浏览器
        3. 控制台打开设置
        4. experiments中按6下shift，勾选node debugging
    4. 如果requrie的是json，在输出的时候会自动对文件JSON.parse，如果希望返回的还是JSON文件，就需要JSON.stringify

        ```
        http.createServer((request, response) => {
            const fielPackage = require('./package') // get package.json
            console.log(typeof file) //object
            const fileJson = JSON.stringify(filePackage)
            console.log(typeof fileJson) // string
            response.end(fileJson)
        })
        ```
    5. require一个文件夹，会去找文件夹下的index.js

        ```
        // app是一个文件夹，app下有index.js，下面的require就会默认拿到index.js的内容
        const App = require('./app')
        // 相当于
        const App = require('./app/index.js')
        ```
    5. 持续构建 ===> nodemon代替node命令持续构建
    6. fs

        1. Node中的异步操作，最后一个参数都是一个回调函数， 回调函数的第一个参数都是error，如果没有就是null