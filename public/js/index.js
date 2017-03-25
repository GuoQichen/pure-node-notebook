window.onload = () => {
    // const $ = () => document.querySelector('body')

    // const div = document.createElement('div')
    // div.innerText = 'js work'

    // $('body').appendChild(div)


    // 
    setTimeout(() => {
        $.ajax({
            url: '/user.action', // 告诉服务端这是ajax请求
            method: 'get',
            success: function (data) {
                const list = data.map(ele => `<li>${ele}</li>`)
                $('#root').html(list)
            },
            error: function (error) {
                console.log(error)
            }
        })
    }, 1000)

    $.ajax({
        url: '/list.action', // 告诉服务端这是ajax请求
        method: 'get',
        success: function (data) {
            const list = data.map(ele => `<li>${ele}</li>`)
            $('#shop').html(list)
        },
        error: function (error) {
            console.log(error)
        }
    })    
}