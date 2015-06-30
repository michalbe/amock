# amock by [@michalbe](http://github.com/michalbe) #
Simplest data mock generator evaaaah.

```javascript
// amock.js
var amock = require('amock');

amock('cities', {
  id: "number:0-",
  name: "words:1"
});

amock('products', {
  id: "number:0-",
  cityId: "random-number:0-5",
  name: "words:1",
  description: "sentences:5",
  price: "random-number:9-100",
  image: "image:500/500"
});
```
