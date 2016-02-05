# test-listen

![](https://cldup.com/xkoIJR2s2f.svg)

Little helper to produce URLs with ephemeral ports. `async`/`await` ready.

## How to use

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
