require('@std/esm')

const today = require('../today.mjs').default
const yesterday = require('../yesterday.mjs').default
const todayGzipped = require('../today.mjs.gz').default
const yesterdayGzipped = require('../yesterday.mjs.gz').default

function hello(params) {
  const message = `Today is ${today()} and yesterday was ${yesterday()}
    Gzipped: Today is ${todayGzipped()} and yesterday was ${yesterdayGzipped()}`

  return { payload: message }
}

exports.hello = hello
