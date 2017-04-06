
const assert = require('assert')
const fs = require('fs')

/**
 * 
 * Usage：
 * 
 * Buffer.from(array) 
 * returns a new Buffer containing a copy of the provided octets.
 * 
 * Buffer.from(arrayBuffer[, byteOffset [, length]]) 
 * returns a new Buffer that shares the same allocated memory as the given ArrayBuffer.
 * 
 * Buffer.from(buffer) 
 * returns a new Buffer containing a copy of the contents of the given Buffer.
 * 
 * Buffer.from(string[, encoding]) 
 * returns a new Buffer containing a copy of the provided string.
 * 
 */
// const buf1 = Buffer.from('hello world', 'utf8')

// const buf1 = Buffer.from([0xe7])
// const buf2 = Buffer.from([0xaa])
// const buf3 = Buffer.from([0x97])
// assert.equal(Buffer.concat([buf1, buf2, buf3], 3).toString(), '窗')

// const data = fs.createReadStream('./test/tem', {
//     highWaterMark: 1
// })
// const out = []
// data.on('data', chunk => {
//     out.push(chunk)
// }).on('end', () => {
//     const length = out.length
//     console.log(Buffer.concat(out, length).toString())
// })

// const data = fs.createReadStream('./test/tem', {
//     highWaterMark: 3
// })
// let out = ''
// data.on('data', chunk => {
//     out += chunk // out.toString() + chunk.toString()
// }).on('end', () => {
//     console.log(out)
// })