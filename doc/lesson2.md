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

### static web server
1. 因为`fs.readFile`接受的文件夹路径，其实是基于`process.cwd()`，所以`fs.readyFile`的路径可以使用`path.resolve(process.cwd(), 'public')`拼接而成，然后把结果放进`fs.readFile`
2. 注意，`path.resolve()`是从右往左解析，遇到一个绝对路径就直接返回不再解析后面的路径
3. 程序设计的原则 ===> DRY ===> Don't Repeat Yourself
4. 如果`fs.readFile`的目标文件是图片，那么`response.end`的encoding和decoding必须一样，都是binary，或者不指定由node自己去解析
5. `fs.readFileSync('./avatar.jpeg', 'base64')`可以把图片转化成base64
6. response对象继承了stream
7. `response.end`默认是utf8，`response.end('helo world', 'utf8')`
8. Error, ENOENT, 表示 error no entry, 找不到这个文件