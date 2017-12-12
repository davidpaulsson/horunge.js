# Horunge.js [![Build Status](https://travis-ci.org/davidpaulsson/horunge.js.svg)](https://travis-ci.org/davidpaulsson/horunge.js)

Easily prevent typographic orphans.

![](https://raw.github.com/davidpaulsson/horunge.js/master/horunge.gif)

Horunge is the Swedish equivalent for orphans when we’re talking typography. Supports CommonJS, AMD or browser globals.

## Install

### NPM

`npm install horunge`

### Manual install

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/davidpaulsson/horunge.js/master/dist/horunge.min.js
[max]: https://raw.github.com/davidpaulsson/horunge.js/master/dist/horunge.js

## Usage

Browser globals

```html
<h1>This is a sample heading</h1>

<script src="horunge.min.js"></script>
<script>
  const headlines = document.querySelectorAll("h1")
  headlines.forEach(function(headline) {
    headline.innerHTML = horunge(headline.innerHTML)
  });
</script>
```

CommonJS

```js
import horunge from 'horunge';

const heading = 'This is a sample heading';
const fixedHeading = horunge(heading);
```

### Api

`horunge(string, [opt = 2]);`

| Param         | Description   |
| ------------- | ------------- |
| string        | String to fix |
| opt           | Number of words to keep at same row (optional) (default: 2) |

[List of releases](https://github.com/davidpaulsson/horunge.js/releases)
[List of contributors](https://github.com/davidpaulsson/horunge.js/graphs/contributors)
