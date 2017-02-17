
# jsdoc-regex

[![Greenkeeper badge](https://badges.greenkeeper.io/neogeek/jsdoc-regex.svg)](https://greenkeeper.io/)

[![](http://img.shields.io/npm/v/jsdoc-regex.svg?style=flat)](https://www.npmjs.org/package/jsdoc-regex/)

> Regular expression for matching JSDoc comment blocks.

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
