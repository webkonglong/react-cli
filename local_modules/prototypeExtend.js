/* eslint-disable */

'use strict'
// Number prototype custom start--------------
const getPrecision = (a = 0) => ((a.toString().split('.')[1] || []).length)

// 乘
Number.prototype.mul = function (b) {
  var snReg = /[eE]+/
  var d = this.toString()
  var e = b.toString()
  if (snReg.test(d) || snReg.test(e)) {
    return this * b
  }

  var c = 0
  c += getPrecision(d)
  c += getPrecision(e)
  return Number(d.replace('.', '')) * Number(e.replace('.', '')) / Math.pow(10, c)
}

// 除
Number.prototype.div = function (arg) {
  var l1 = this.toString().indexOf('.') > 0 ? this.toString().split(".")[1].length : 0
  var l2 = arg.toString().indexOf('.') > 0 ? arg.toString().split(".")[1].length : 0

  var r1 = Number(this.toString().replace(".", ""))
  var r2 = Number(arg.toString().replace(".", ""))
  return (r1 / r2) * window.Math.pow(10, l2 - l1)
}

// 加
Number.prototype.add = function (b) {
  var c, d, e
  c =getPrecision(this)
  d = getPrecision(b)
  return e = Math.pow(10, Math.max(c, d)), (this.mul(e) + b.mul(e)) / e
}

// 减
Number.prototype.sub = function (b) {
  var c = getPrecision(this)
  var d = getPrecision(b)
  var e = Math.pow(10, Math.max(c, d))
  return (this.mul(e) - Number(b).mul(e)) / e
}
// Number prototype custom end----------------
