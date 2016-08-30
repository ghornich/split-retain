# split-retain
Split a string and preserve the delimiters.

* [Install](#install)
* [Usage](#usage)
* [Documentation](#documentation)
* [Tests](#tests)
* [Coverage](#coverage)
* [TODO](#todo)
* [License](#license)

## Install

**Node.js**  
`npm install split-retain --save`

**Browser**  
Include the full or minified version on your webpage from `browser/`

## Usage

**Node.js**  
`var splitRetain = require('split-retain');`

**Browser**  
`<script src="path/to/split-retain.min.js">`

```js
splitRetain('home/jack/images/photo12.jpeg', '/')
// ['home/', 'jack/', 'images/', 'photo12.jpeg']

splitRetain('home/jack/images/photo12.jpeg', '/', { leadingSeparator: true })
// ['home', '/jack', '/images', '/photo12.jpeg']

...
```

## Documentation

`splitRetain(string, separator[, options])`

| argument | type | desription |
| -------- | ---- | ---------- |
| string | String | string to split |
| separator | String / RegExp | one character, or regex (must have grouping and global flag, e.g. `/(\d+)/g`) |
| [options = `{}`] | Object | - |
| [options.leadingSeparator = `false`] | Boolean | if `true`, the separator will be placed at the beginning of the split tokens |

## Tests

`npm test`

## Coverage

`npm run cover`

## TODO

* create 'publish' gulp task
* create 'publish steps'
* replace browserify with UMD?
* more examples in Usage
* lint
* ...

## License

MIT
