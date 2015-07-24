# loge

My very own Node.js logging library! Crazy that no one else thought of this first!

```sh
npm install loge --save
```

Or in your `package.json`:

```json
{
  "dependencies": {
    "loge": "*",
    ...
  },
  ...
}
```


## Basic use

```js
import {logger} from 'loge';

logger.level = 'error';
logger.warning('You should probably get a doctor to look at that.');
// (nothing)
logger.critical('OMG your face I you what no really just does it hurt?');
// [critical] OMG your face I you what no really just does it hurt?
```

**Formatting:**

Loge's calls Node's [`util.format`](http://nodejs.org/api/util.html#util_util_format_format) (but only when the called method's level is greater than equal to the logger's `level`), so the following interpolation variables are available:

* `%s` - String
* `%d` - Number (integer / float)
* `%j` - JSON (`JSON.stringify()` called without replacer or indentation

Use `%%` for an escaped percent sign


## Levels

```js
import {Level} from 'loge';

console.log(Level.notset);
// 0
console.log(Level.debug);
// 10
console.log(Level.info);
// 20
console.log(Level.warning);
// 30
console.log(Level.error);
// 40
console.log(Level.critical);
// 50
```


## License

Copyright © 2014-2015 Christopher Brown. [MIT Licensed](http://chbrown.github.io/licenses/MIT/#2014-2015).
