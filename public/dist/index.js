webpackJsonp([0],{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {window.onload = () => {
    // setTimeout(() => {
    //     $.ajax('/user.action').done(data => {
    //         const list = data.map(ele => `<li>${ele}</li>`)
    //         $('#root').html(list)
    //     }).fail(error => {
    //         console.log(error)
    //     })
    // }, 1000) 

    $.ajax('/list.action').done(data => {
        const list = data.map(ele => `<li>${ele}</li>`);
        $('#shop').html(list);
    }).fail(error => {
        console.log(error);
    });
    // post

    $.ajax({
        url: '/list.action',
        method: 'post',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(['d', 'e', 'f'])
    }).done(data => {
        const list = data.map(ele => `<li>${ele}</li>`);
        $('body').append(list);
    });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

},[2]);
//# sourceMappingURL=index.js.map