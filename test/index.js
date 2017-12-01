// eslint-disable-next-line ava/no-ignored-test-files
import http from 'http'
import test from 'ava'
import request from 'request-promise'
import listen from '../'

const srv = http.createServer((req, res) => res.end('1'))
const srv2 = http.createServer((req, res) => res.end('2'))
const srv3 = http.createServer((req, res) => res.end('3'))

test('it works', async t => {
  const url = await listen(srv)
  t.true(/http:\/\/localhost:\d+/.test(url))
  const data = await request(url)
  t.deepEqual('1', data)

  const url2 = await listen(srv2)
  t.true(url2 !== url)
  t.true(/http:\/\/localhost:\d+/.test(url2))
  const data2 = await request(url2)
  t.deepEqual('2', data2)

  const url3 = await listen(srv3, '127.0.0.1')
  t.true(url3 !== url)
  t.true(/http:\/\/127.0.0.1:\d+/.test(url3))
  const data3 = await request(url3)
  t.deepEqual('3', data3)
})
