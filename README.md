# split-retain
Split a string and preserve the delimiters.

## WORK IN PROGRESS

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
| [options] | Object | - |
| [options.leadingSeparator] | Boolean | if `true`, the separator will be placed at the beginning of the split tokens |

## License

MIT
