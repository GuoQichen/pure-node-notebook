### lesson8

#### cookie
1. cookie除了基本的名值对还有指令

    ```
    Set-Cookie: <cookie-name>=<cookie-value>;directive
    ```
    指令是对浏览器生效，例如：'Max-Age = 2'
2. http协议中以分号`;`来分隔
3. 如果不加directive，那么cookie相当于session cookie，浏览器关掉cookie就没用了，但是取决于浏览器的实现，IE关掉tab就无效了
4. 持久cookie，一般采用两种指令，

    1. Expires
    2. Max-Age
5. 如果cookie还没过期就刷新，那么后面的cookie会覆盖前面的cookie，时间重新算
6. 设置Expires时间一般使用UTC时间而不使用GMT时间，因为有格式要求`new Date().toUTCString()`
7. 登出的话其实直接让Expires过期就可以了
8. `Max-age`和`Expires`的优先级，`Max-age`优先
9. 可以设置`HttpOnly`防止JS去拿到cookie

    ```
    response.setHeader('Set-Cookie', 'HttpOnly')
    ```
10. 还可以通过`Secure`来设置cookie安全，在非https协议或者SSL协议下，cookie不生效，所有的指令都没有用处，一般使用`HttpOnly`

