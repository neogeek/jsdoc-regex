
# jsdoc-regex

[![](http://img.shields.io/npm/v/jsdoc-regex.svg?style=flat)](https://www.npmjs.org/package/jsdoc-regex/)

> Regular expression for matching JSDoc comment blocks and the code below them.

## Install

```bash
$ npm install jsdoc-regex --save
```

## Usage

```javascript
const jsdocRegex = require('jsdoc-regex');

const methods = contents.match(jsdocRegex());

console.log(methods[0]);
```
