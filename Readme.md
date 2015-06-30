# amock by [@michalbe](http://github.com/michalbe) #
Simplest data mock generator evaaaah.

```javascript
// amock.js
var amock = require('amock');

amock('cities', {
  id: "id",
  name: "names:1"
});

amock('products', {
  id: "id",
  name: "words:1",
  description: "sentences:5",
  price: "random-number:9-100",
  image: "image:500/500"
});

amock.get(); // TODO: concatenate the data, now it returns first data type only
amock.get('products', 100) // array of 100 products
```

Supported data types:
```javascript
 'id' // autoincremented number, no argument
 'words' // string, number of words as an argument
 'names' // capitalized string, number of names as an argument
 'sentences' // full sentence, number of sentences as an argument
 'random-number' // random number, range as an argument (min-max)
 'image' // link to the random image, resolution as an argument (width/height)
```

## Usage
```bash
npm i amock -g
amock path-to-file-with-mock-description.json [number of elements, optional] > output
```
