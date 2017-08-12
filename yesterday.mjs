import moment from 'moment'

export default () => {
  return moment()
    .startOf('day')
    .fromNow()
    .format('MMM Do YYYY')
}
