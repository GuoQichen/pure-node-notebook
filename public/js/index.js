window.onload = () => {
    const $ = () => document.querySelector('body')

    const div = document.createElement('div')
    div.innerText = 'js work'

    $('body').appendChild(div)
}