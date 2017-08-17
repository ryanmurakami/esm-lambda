import moment from 'moment'

export default () => {
  return moment()
    .subtract(1, 'days')
    .format('MMM Do YYYY')
}
