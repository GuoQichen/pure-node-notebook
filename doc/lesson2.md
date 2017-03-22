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