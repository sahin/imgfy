# Installing

```
npm i -g imgfy
```

# Usage: imgfy [options]

  Options:

    -h, --help               output usage information
    -o, --open               Open url in browser
    -c, --content <content>  Content file dir

# Example

```
imgfy --content content.json -o # Content file is : content.json, open in browser.
```

# Programmatically.

## File system example:

```
var app = require('./index');

var file = 'content.json'; // YOUR AWESOME CONTENT!
var open = true;

app(null, file, open)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  })


```

## Direct content example:

```
var app = require('imgfy');

var content = {

}

app(content, false, true) // Open in browser.
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  })

```

# Todo:

@cagatay, add content example.
