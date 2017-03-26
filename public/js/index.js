window.onload = () => {
    setTimeout(() => {
        $.ajax('/user.action').done(data => {
            const list = data.map(ele => `<li>${ele}</li>`)
            $('#root').html(list)
        }).fail(error => {
            console.log(error)
        })
    }, 1000) 

    $.ajax('/list.action').done(data => {
        const list = data.map(ele => `<li>${ele}</li>`)
        $('#shop').html(list)      
    }).fail(error => {
        console.log(error)
    })
}