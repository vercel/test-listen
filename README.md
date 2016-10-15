# test-listen

[![Build Status](https://travis-ci.org/zeit/test-listen.svg?branch=master)](https://travis-ci.org/zeit/test-listen)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

URLs with ephemeral ports. `async`/`await` ready.

## Example

Pass a `http.Server` to `test-listen` and it'll return a URL in the format `http://localhost:{port}`.

Useful for running HTTP server testsuites:

```js
import http from 'http';
import listen from 'test-listen';

const srv = http.createServer((req, res) => res.end('1'));
const srv2 = http.createServer((req, res) => res.end('2'));

test('urls', async t => {
  let url = await listen(srv);
  t.ok(url == 'http://localhost:11401');
  let url = await listen(srv2);
  t.ok(url == 'http://localhost:42333');
});
```

## Credits

- Copyright © 2016 Zeit, Inc and project authors.
- Licensed under MIT.
- ▲
