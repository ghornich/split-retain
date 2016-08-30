# split-retain
Split a string and preserve the delimiters.

<!-- toc -->

- [Install](#install)
- [Usage](#usage)
- [Documentation](#documentation)
  * [Arguments](#arguments)
  * [Results](#results)
- [Tests](#tests)
- [Coverage](#coverage)
- [TODO](#todo)
- [License](#license)

<!-- tocstop -->

## Install

**Node.js**  
`npm install split-retain --save`

`var splitRetain = require('split-retain');`

**Browser**  
Include the full or minified version on your webpage from `browser/`, then use `splitRetain(...)`.

`<script src="path/to/split-retain.min.js">`

## Examples

```js
splitRetain('home/jack/images/photo12.jpeg', '/')
// ['home/', 'jack/', 'images/', 'photo12.jpeg']

splitRetain('home/jack/images/photo12.jpeg', '/', { leadingSeparator: true })
// ['home', '/jack', '/images', '/photo12.jpeg']

...
```

## Documentation

`splitRetain(string, separator[, options])`

### Arguments

| argument | type | desription |
| --- | --- | --- |
| string | String | string to split |
| separator | String<br>———<br>RegExp | single character<br>———<br>must have grouping parentheses and global flag, e.g. `/(\d+)/g` |
| [options = `{}`] | Object | - |
| [options.leadingSeparator = `false`] | Boolean | if `true`, the separator will be placed at the beginning of the split tokens |

### Results

| property | type | description |
| --- | --- | --- |
| @return | String[] | array of split tokens |
| @throws | Error | on incorrect argument types |

## Tests

`npm test`

## Coverage

`npm run cover`

## TODO

* create 'publish' gulp task
* create 'publish steps'
* replace browserify with UMD?
* more examples in Examples
* changelog
* lint
* ...

## License

MIT
