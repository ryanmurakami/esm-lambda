require('@std/esm')

const today = require('./today.mjs').default
const yesterday = require('./yesterday.mjs').default
const todayGzipped = require('./today.mjs.gz').default
const yesterdayGzipped = require('./yesterday.mjs.gz').default

module.exports.whatday = (event, context, callback) => {
  const message = `Today is ${today()} and yesterday was ${yesterday()}
    Gzipped: Today is ${todayGzipped()} and yesterday was ${yesterdayGzipped()}`

  const response = {
    statusCode: 200,
    body: message,
    headers: {
      'Content-Type': 'text/html'
    }
  }

  callback(null, response)
}
