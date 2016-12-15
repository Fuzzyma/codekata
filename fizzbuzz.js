module.exports = function fizzbuzz (number) {
  // when array is given, we call fizzbuzz on every element and return an array
  if (Array.isArray(number)) {
    return number.map(function (i) {
      return fizzbuzz(i)
    })
  }

  // multiples of 3 and 5 map to 'fizzbuzz'
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzbuzz'
  }

  // multiples of 3 map to 'fizz'
  if (number % 3 === 0) {
    return 'fizz'
  }

  // multiples of 5 map to 'buzz'
  if (number % 5 === 0) {
    return 'buzz'
  }

  return number
}
