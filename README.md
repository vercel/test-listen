# test-listen

[![Build Status](https://travis-ci.org/zeit/test-listen.svg?branch=master)](https://travis-ci.org/zeit/test-listen)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

URLs with ephemeral ports. `async`/`await` ready.

## Usage

Install it:

```
npm install --save-dev test-listen
```

Pass a `http.Server` to `test-listen` and it will return an URL in the format `http://localhost:{port}`.

The second parameter can optionally be a hostname to return in the URL
instead of `localhost`.

Useful for running HTTP server testsuites:

```js
const http = require('http');
const listen = require('test-listen');

const srv = http.createServer((req, res) => res.end('1'))
const srv2 = http.createServer((req, res) => res.end('2'))

test('urls', async t => {
  let url = await listen(srv)
  t.ok(url == 'http://localhost:11401')
  let url = await listen(srv2)
  t.ok(url == 'http://localhost:42333')
})
```

## Authors

- Guillermo Rauch ([@rauchg](https://twitter.com/rauchg)) - [▲ZEIT](https://zeit.co)
- Leo Lamprecht ([@notquiteleo](https://twitter.com/notquiteleo)) - [▲ZEIT](https://zeit.co)
