var test = require('tap').test
var npmconf = require('../npmconf.js')
var common = require('./00-setup.js')

test('with malformed', function (t) {
  npmconf.load({}, common.malformed, function (er, conf) {
    t.ok(er, 'Expected parse error')
    if (!(er && /Failed parsing JSON config key email/.test(er.message))) {
      throw er
    }
    t.end()
  })
})
