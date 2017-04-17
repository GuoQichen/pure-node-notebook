const request = require('superagent') 
const fs = require('fs')

let result = ''

request
	.get('https://movie.douban.com/j/search_subjects')
	.query({ type: 'movie' })
	.query({ tag: '热门' })
	.query({ sort: 'recommend' })
	.query({ page_limit: 40 })
	.query({ page_start: 0 })
	.end((error, data) => {
		if(error) return console.log(error)
		result = data.text
	})


module.exports = result