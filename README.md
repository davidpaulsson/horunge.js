# Horunge.js

Easily prevent typographic orphans.

![](https://raw.github.com/davidpaulsson/horunge.js/master/horunge.gif)

Horunge is the Swedish equivalent for orphans when we’re talking typography. Supports CommonJS, AMD or browser globals.

## Install

### Bower

`bower install jquery-horunge`

### Manual install

Download the [production version][min] (544 B minified, 362 B gzip) or the [development version][max].

[min]: https://raw.github.com/davidpaulsson/horunge.js/master/dist/jquery.horunge.min.js
[max]: https://raw.github.com/davidpaulsson/horunge.js/master/dist/jquery.horunge.js

## Usage

In your web page:

```html
<h1>This is a sample heading</h1>

<script src="jquery.js"></script>
<script src="bower_components/jquery-horunge/dist/jquery.horunge.min.js"></script>
<script>
$(function() {
  $('h1').horunge();
});
</script>
```

### Options

```js
$.horunge({
  words: 2 // number of words to always keep at new line. default "2"
});
```

#### Release history

- 0.0.4 - Feb 10, 2015
- - Using slice instead of while loop (Thanks @rrostt)
- 0.0.3 - Feb 10, 2015
- - Support CommonJS, AMD or browser globals
- 0.0.2 - Feb 10, 2015
- - Wrote tests
- - Fixed an issue where Horunge is applied to a paragraph with only 2 words, it removes the words from the page
- 0.0.1 - Mar 19, 2014
- - First release
