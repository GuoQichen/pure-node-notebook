### lesson1

1. package.json

    1. npm ls, 显示当前文件下下node_modules下所有的npm包
    2. npm install --save --verbose, 冗余模式打印安装过程
2. node_moudles
    
    1. require查找的路径

        如果require的模块id不是node的核心模块，那么模块的路径不以路径开始，则node会不断去上一级递归查找node_modules目录，如果module.paths数组里的路径都找完没有找到模块，就抛出错误
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