import _ from 'lodash'

export function recordOfArrays(values) {
  return _.mapValues(values, (v) => [v]);
}
