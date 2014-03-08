# get [![Build Status](https://travis-ci.org/jasonkuhrt/get.png?branch=master)](https://travis-ci.org/jasonkuhrt/get)

Safely, succinctly, access hash data

## Installation

    npm install jasonkuhrt-get

## API

#### get(path, object)

`path`
- May be a `String` or `[String]`.

`object`
- Any object.

`return`
- If `path` lookup fails, the last found value.
- If `path` lookup totally fails (not a single found key from `path` in `object`), the given `object`.
- If given `object` is not actually an object, `{}`.


## Examples
Access object properties in `String` or `Array` style:
```
var o = {a: { b: c: 'c' } };

get('a.b.c',  o) === get(['a','b','c'], o); // true
```

`get` is curried to allow creation of accessors on the fly:

```
var ids = users.map(get('id')); // e.g. [1, 45, 82, 8392, ...etc]
```

For mroe see [tests](https://github.com/jasonkuhrt/get/blob/master/test/index.js).