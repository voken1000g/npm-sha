const crypto = require('crypto')

const sha1 = function (value) {
  return crypto.createHash('sha1').update(value).digest()
}

const sha224 = function (value) {
  return crypto.createHash('sha224').update(value).digest()
}

const sha256 = function (value) {
  return crypto.createHash('sha256').update(value).digest()
}

const sha384 = function (value) {
  return crypto.createHash('sha384').update(value).digest()
}

const sha512 = function (value) {
  return crypto.createHash('sha512').update(value).digest()
}

module.exports = {
  sha1: sha1,
  sha224: sha224,
  sha256: sha256,
  sha384: sha384,
  sha512: sha512,
}
