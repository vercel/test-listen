import test from 'ava';
import http from 'http';
import listen from '../lib/';
import request from 'request-promise';

const srv = http.createServer((req, res) => res.end('1'));
const srv2 = http.createServer((req, res) => res.end('2'));

test('it works', async t => {
  const url = await listen(srv);
  t.ok(/http:\/\/localhost:\d+/.test(url));
  const data = await request(url);
  t.same('1', data);

  const url2 = await listen(srv2);
  t.ok(url2 !== url);
  t.ok(/http:\/\/localhost:\d+/.test(url2));
  const data2 = await request(url2);
  t.same('2', data2);
});
