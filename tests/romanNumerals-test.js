/* global describe it */
var chai = require('chai')
var expect = chai.expect
var romanNumerals = require('../romanNumerals')

describe('romanNumerals()', function () {
  it('converts roman numbers correctly', function () {
    expect(romanNumerals('I')).to.equal(1)
    expect(romanNumerals('II')).to.equal(2)
    expect(romanNumerals('IV')).to.equal(4)
    expect(romanNumerals('V')).to.equal(5)
    expect(romanNumerals('IX')).to.equal(9)
    expect(romanNumerals('X')).to.equal(10)
    expect(romanNumerals('XLII')).to.equal(42)
    expect(romanNumerals('XCIX')).to.equal(99)
    expect(romanNumerals('MMXIII')).to.equal(2013)
  })
  
  it('stops at errors', function () {
    expect(romanNumerals('IIII')).to.be.false
    expect(romanNumerals('IIV')).to.be.false
    expect(romanNumerals('MXIIM')).to.be.false
    expect(romanNumerals('IM')).to.be.false
    expect(romanNumerals('IC')).to.be.false
    expect(romanNumerals('XM')).to.be.false
    expect(romanNumerals('VM')).to.be.false
    expect(romanNumerals('IC')).to.be.false
    expect(romanNumerals('MM XI II')).to.be.false
    expect(romanNumerals('VX')).to.be.false
    expect(romanNumerals('LC')).to.be.false
    expect(romanNumerals('DM')).to.be.false
  })
})
