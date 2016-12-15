/* global describe it */
var chai = require('chai')
var expect = chai.expect
var happyNumbers = require('../happyNumbers')

describe('happyNumbers()', function () {
  it('returns true if happy Number is given', function () {
    expect(happyNumbers(19)).to.equal(true)
    expect(happyNumbers(97)).to.equal(true)
    expect(happyNumbers(82)).to.equal(true)
    expect(happyNumbers(28)).to.equal(true)
    expect(happyNumbers(68)).to.equal(true)
    expect(happyNumbers(86)).to.equal(true)
    expect(happyNumbers(10)).to.equal(true)
    expect(happyNumbers(100)).to.equal(true)
    expect(happyNumbers(1000)).to.equal(true)
    expect(happyNumbers(23)).to.equal(true)
  })

  it('returns false if no happy Number is given', function () {
    expect(happyNumbers(20)).to.equal(false)
    expect(happyNumbers(21)).to.equal(false)
    expect(happyNumbers(22)).to.equal(false)
    expect(happyNumbers(1562)).to.equal(false)
    expect(happyNumbers(5984)).to.equal(false)
    expect(happyNumbers(124)).to.equal(false)
    expect(happyNumbers(945)).to.equal(false)
  })
})
