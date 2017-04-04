### lesson5
1. 对传递数据进行抽象，抽象成一个对象，每次把数据挂载在“小型数据库”上，代替直接使用resolve传递数据
2. 异步编程数据的最佳实践，使用ctx传递数据，流水线加工，在一个对象上不断去包装、修改
3. writeHeader 和 setHeader 的区别

    1. writeHeader 会覆盖 setHeader，只是简单的对象覆盖
    2. response.setHeader(name, value)

       ```
        var body = "hello world";
        response.setHeader("Content-Length", body.length);
        response.setHeader("Content-Type", "text/plain");
        response.setHeader("Set-Cookie", "type=ninja");
        response.status(200);
       ```
       一次只能设置一个headers
    3. response.writeHeader(statusCode, [reasonPhrase], [headers])

        ```
        var body = "hello world";
        response.writeHead(200, 'ok', {
            "Content-Length": body.length,
            "Content-Type": "text/plain",
            "Set-Cookie": "type=ninja"
        });        
        ```
        可以同时设置多个headers，几乎可以设置所有关于response header的信息，status code，content，headers
4. 中间件只依赖三个东西，promise，request，response，其中promise为中间件内部关心的事情，外部不需要关心，所以把request和response整合到一个context中
5. 抽象中间件的好处

    1. 每个中间件只需要修改context对象，彼此独立
    2. 使用use和compose来创建promise链
    3. 开发者只需要专注中间件的开发

#### Buffer
1. Buffer的场景

    1. 网络I／O中，TCP／IP协议中使用数据包传递数据，数据包的数据类型使用Buffer
    2. fs，操作本地文件使用buffer
1. 重点要掌握的方法，`Buffer.from`，`Buffer.isBuffer`，`Buffer.isEncoding`，`Buffer.concat`
2. Buffer和字符串之间的转换

    1. `const buf = Buffer.from('hello world', 'utf8')`可以把字符串转化成buffer
    2. `buf.toString()`可以把buffer转化成字符串
3. 汉字转码 ===> utf8（可变长度字符编码） ===> 一个汉字右多位buffer来表示，例如：

    1. 窗，使用buffer表示就是`<Buffer e7 aa 97>`
4. `Buffer.concat(list[, totalLength])`，最好手动指定`totalLength`，避免额外的计算，速度更快

    ```
    const buf1 = Buffer.from([0xe7])
    const buf2 = Buffer.from([0xaa])
    const buf3 = Buffer.from([0x97])
    assert.equal(Buffer.concat([buf1, buf2, buf3], 3).toString(), '窗')
    ```
5. 字符串丢失（Buffer的应用场景）===> stream读取字节丢失，不过Node已经做了兼容

    ```
    const data = fs.createReadStream('./test/tem', {
        highWaterMark: 1
    })
    const out = []
    data.on('data', chunk => {
        out.push(chunk)
    }).on('end', () => {
        const length = out.length
        console.log(Buffer.concat(out, length).toString())
    })
    ```
