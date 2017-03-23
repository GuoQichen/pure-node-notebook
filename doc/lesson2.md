## lesson2
### http
1. extensible 通过headers语义沟通客户端和服务端
2. stateless but not sessionless ==> 通过cookie来达到not sessionless达到
3. http连接

    1. http 1.0 open tcp for each request/response
    2. http 1.1 复用tcp连接
    3. http 2   单链接多信道，更有效率
4. http flow
5. HTTP Messages

    1. `http://www.baidu.com/adf/asdf/asdf`

        注意，后面的/adf/asdf/asdf才是path，而不是整个url是path

### path模块
1. posix概念

    表示可移植操作系统的借口，node在系统的API之上，例如fs.lstat ===> ls

### fs模块
1. 常用方法

    - `fs.readFile()`
        
        1. 第一个参数接受一个相当`process.cwd()`的参数，
        2. 第二个参数，可以选择读文件的编码方式，例如'utf8'，'binary'
        3. 因为readFile是异步I/O，所以会有一个callback（node中异步I／O方法的最后一个参数都是回调函数），callback的第一个参数保留给error
    - `fs.readFileSync()`

        1. 异步方法的同步方式，在方法名后面添加Sync
        2. 如果过程中需要处理错误，需要使用try...catch

            ```
            try {
                fs.readFileSync()
            } catch(error) {
                console.log(error.stack)
            }
            ```
