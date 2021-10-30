# test-listen

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
const http = require('http')
const listen = require('test-listen')

const srv = http.createServer((req, res) => res.end('1'))
const srv2 = http.createServer((req, res) => res.end('2'))

test('urls', async t => {
  let url = await listen(srv)
  t.ok(url == 'http://localhost:11401')
  let url = await listen(srv2)
  t.ok(url == 'http://localhost:42333')
})
```

It also works with Express:

```js
const http = require('http')
const express = require('experss')
const listen = require('test-listen')

const srv = express()

test('urls', async t => {
  let url = await listen(http.createServer(srv))
  t.ok(url == 'http://localhost:11401')
})
```

Or Koa:

```js
const http = require('http')
const Koa = require('koa')
const listen = require('test-listen')

const srv = new Koa();

test('urls', async t => {
  let url = await listen(http.createServer(srv.callback()))
  t.ok(url == 'http://localhost:11401')
})
```

## Authors

- Guillermo Rauch ([@rauchg](https://twitter.com/rauchg)) - [Vercel](https://vercel.com)
- Leo Lamprecht ([@notquiteleo](https://twitter.com/notquiteleo)) - [Vercel](https://vercel.com)
