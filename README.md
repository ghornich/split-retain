# split-retain
Split a string and preserve the delimiters.

## WORK IN PROGRESS @ 2016.08.29

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
console.log(splitRetain('home/jack/images/photo12.jpeg', '/'));
// ['home/', 'jack/', 'images/', 'photo12.jpeg']

console.log(splitRetain('home/jack/images/photo12.jpeg', '/', { leadingSeparator: true }));
// ['home', '/jack', '/images', '/photo12.jpeg']

...
```

## Documentation

...

## License

MIT
