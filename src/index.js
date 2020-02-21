
exports.min = function min (array) {
  if (Array.isArray(array) && (array.length > 0))
    return array.sort(function(a, b) { return a - b }).reverse().pop()
  return 0;
}

exports.max = function max (array) {
  if (Array.isArray(array) && (array.length > 0))
    return array.sort(function(a, b) { return a - b }).pop()
  return 0;
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && (array.length > 0))
    return array.reduce(function(a, b) { return a + b }) / array.length
  return 0;
}
