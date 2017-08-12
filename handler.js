require('@std/esm')

import today from './today'
import yesterday from './yesterday'

module.exports.whatday = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: `Today is ${today()} and yesterday was ${yesterday()}`,
    headers: {
      'Content-Type': 'text/html'
    }
  }

  callback(null, response)
}
