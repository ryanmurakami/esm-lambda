require('@std/esm')

const today = require('./today.mjs').default
const yesterday = require('./yesterday.mjs').default
const todayGzipped = require('./today.mjs.gz').default
const yesterdayGzipped = require('./yesterday.mjs.gz').default

console.log(`Today is ${today()} and yesterday was ${yesterday()}`)
console.log(`Gzipped: Today is ${todayGzipped()} and yesterday was ${yesterdayGzipped()}`)
