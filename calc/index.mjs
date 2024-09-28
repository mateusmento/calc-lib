import _ from 'lodash'

export function record(values) {
  return _.mapValues(values, (v) => [v]);
}
