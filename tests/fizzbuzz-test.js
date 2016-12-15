/* global describe it */
var chai = require('chai')
var expect = chai.expect
var fizzbuzz = require('../fizzbuzz')

describe('fizzbuzz()', function () {
  it('returns fizz when a multiple of 3', function () {
    for (var i = 3; i < 101; i += 3) {
      if (i % 5 === 0) continue
      expect(fizzbuzz(i)).to.equal('fizz')
    }
  })
  it('returns fizz when a multiple of 5', function () {
    for (var i = 5; i < 101; i += 5) {
      if (i % 3 === 0) continue
      expect(fizzbuzz(i)).to.equal('buzz')
    }
  })
  it('returns fizz when a multiple of 5', function () {
    for (var i = 15; i < 101; i += 15) {
      expect(fizzbuzz(i)).to.equal('fizzbuzz')
    }
  })
  it('returns the given numequalr if no multiple of 3 and 5', function () {
    for (var i = 1; i < 101; ++i) {
      if (i % 3 === 0 || i % 5 === 0) continue
      expect(fizzbuzz(i)).to.equal(i)
    }
  })
  it('returns an array with altered elements', function () {
    expect(fizzbuzz([1, 2, 3, 4, 5, 6, 7, 15, 16])).to.eql([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 'fizzbuzz', 16])
  })
})
