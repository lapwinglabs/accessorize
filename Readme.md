
# accessorize

  Simple access function for getting and setting properties.

## Installation

```
npm install accessorize
```

## Usage

```js
var access = accessorize({ apple: 'red' });
access() // GET ALL: { apple: 'red' }
access({ banana: 'yellow' }) // EXTEND STATE: { apple: 'red', banana: 'yellow' }
access({ pear: 'green' }, { plum: 'purple' }) // EXTEND STATE
access('blueberry', 'blue') // SETTER: { apple: 'red', ..., blueberry: 'blue' }
access() // GET ALL: { apple: 'red', ... }
access('pear', null) // DELETE KEY: delete pear key
access('plum') // GET VALUE: 'purple'
```

## License

(The MIT License)

Copyright (c) 2015 Matthew Mueller &lt;matt@lapwinglabs.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
