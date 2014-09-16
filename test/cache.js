var test = require('tap').test
var npmconf = require('../npmconf.js')
var common = require('./00-setup.js')

test('cache path can be set via environment variable', function (t) {
  process.env.NPM_CONFIG_CACHE = '/tmp/npmcache'

  npmconf.load({}, common.builtin, function (er, conf) {
    if (er) throw er
    t.equal(conf.get('cache'), '/tmp/npmcache')
    t.end()
  })
})

