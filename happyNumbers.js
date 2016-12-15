module.exports = function happyNumbers (number) {
  var stack = []

  while (number !== 1) {
    // convert number to string
    number = ('' + number)
      // split string into array
      .split('')
      // run parseInt in every value so we have numbers again
      .map(function (el) {
        return parseInt(el)
      })
      // suare each number in the array
      .map(function (el) {
        return el * el
      })
      // sum up all values
      .reduce(function (a, b) {
        return a + b
      }, 0)

    // if we see the same number twice we are in a loop
    if (stack.indexOf(number) > -1) return false

    // save the number on a stack
    stack.push(number)
  }

  return true
}
