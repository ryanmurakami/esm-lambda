require('@std/esm')

const today = require('./today.mjs')
const yesterday = require('./yesterday.mjs')

console.log(`Today is ${today()} and yesterday was ${yesterday()}`)
