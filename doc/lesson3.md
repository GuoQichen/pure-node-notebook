## lesson3
### api服务（ajax服务）
1. ajax请求和普通的http请求没有区别
2. header多了`x-requested-with: 'XMLHttpRequest'`
3. 服务端区别ajax请求，作出特殊处理
4. 数据交换格式，response.end中希望得到的是string或者buffer，但是前端希望拿到的是对象或者数组等数据结构

### promise
1. Promise是一个构造函数 ===>  Promise.prototype ===> 原型上的方法then, catch ===> statci method  ===> Promise.all, Promise.race, Promise.resolve, Promise.reject
2. 研究promise

    1. new Promise ===> 函数接受的参数 
3. Promise的状态

    - pending
    - rejected
    - fulfilled
4. Promise.prototype.then 

    1. 如果是pending状态，将回调函数先存入处理的队列
    2. 如果不是pending状态，直接autoRun，然后存入队列
    3. 从数据结构的角度来说，链表
5. Promise 不是订阅／发布，原生实现是c++
6. 研究一个函数，首先研究参数和返回值，从起点和终点看
7. Promise的静态方法，返回值都是Promise
8. thenable，对象中存在一个then的key，then的value是funcion

    ```
    const p = Promise.resolve({
        then: (resolve, reject) => {
            resolve(2)
        }
    })
    p.then(val => {
        console.log(val)
    })
    ```
9. 为什么需要Promise.resolve，因为使用了Promise，那么就统一使用Promise，Promise.resolve可以返回一个状态是fulfilled的Promise对象
10. autoRun是异步的方式，如果是thenable的话， then对应的function是异步执行的，所以打印pedding