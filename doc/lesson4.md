### lesson4
#### promise回顾
1. then里面的函数触发是前面一个promise的状态改变
2. then里面return的结果会作为前一阶段的状态

    ```
    // origin
    Promise
        .resolve(1)
        .then(val => val + 1) // return val ===> 前面的resolve和第一个then这一阶段的结果
        .then(val => val)
    // equal
    Promise.resolve(2)
    ```
    1. 如果是一个值，返回的相当于`Promise.resolve(val).then()`
    2. 如果是一个promise实例，之后的then就会跟随promise的状态
3. then后面的执行完全依赖前面的状态
4. 判断是不是buffer

    1. instanceof
    2. Buffer.isBuffer()

### assert 
1. 断言模块

#### stream
1. 居然拿不到post请求的数据
2. nodejs和python中常用`_`来表示私有方法
3. 在request中查看原型链

    原型链： readable ===> stream ===> EventEmitter
4. node中的API设计也是链式API

    ```
    request.on('data', chunk => {
        //...
    }).on('end', () => { })
    ```
5. socket中文解释为管道

    B(post) ==socket== S (BS架构)
    
    前端通过管道把数据流向服务端，服务端监听事件处理
6. stream 有两种

    1. paused 死的
    2. flow 活的，流动的
7. requrest.on('data')相当于一个开关，把stream的状态从pause变成flow，把数据从缓存仓库的buffer拿过来，数据拿完之后触发end事件，数据拿光之后内存就被清空，被释放

#### 抽象url-parse


#### Promise抽象中间件模型


#### 链式处理static-server, api-server, url-parse, 中间件


#### 技术答疑