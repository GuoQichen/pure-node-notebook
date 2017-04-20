const fs = require('fs')
const request = require('superagent') 
const http = require('http')
const PORT = 8080


const parseCookie = cookie => {
	if(!cookie) return {}
	return cookie.split(';').map(item => item.trim()).reduce((result, item) => {
		const cookiePair = item.split('=')
		result[cookiePair[0]] = cookiePair[1]
		return result
	}, {})
}

const getDataAsync = () => {
	return Promise.resolve({ then(next) {
		request
			.get('https://movie.douban.com/j/search_subjects')
			.query({ type: 'movie' })
			.query({ tag: '热门' })
			.query({ sort: 'recommend' })
			.query({ page_limit: 40 })
			.query({ page_start: 0 })
			.end((error, data) => {
				if(error) return console.log(error)
				next(data.text)
			})	
	}})

}

const setCookie = (req, res) => {
	const { headers, url } = req
	const { cookie } = headers
	const cookieObj = parseCookie(cookie)
	const cookieAge = (time) => `Max-Age=${time}`
	if(url === '/name_guoqichen') {
		res.setHeader('Set-Cookie', `auth=true;${cookieAge(60*5)}`)
	}
	if(url === '/logout') {
		res.setHeader('Set-Cookie', `auth=true;${cookieAge(0)}`)
	}
	if(cookieObj.auth) {
		getDataAsync()
			.then((data) => {
				res.end(data)
			})
	} else {
		res.end('hello please sign up')
	}
}

http.createServer((req, res) => {
	setCookie(req, res)
}).listen(PORT, () => {
	console.log(`listening at port ${PORT}`)
})