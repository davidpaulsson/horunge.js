# Horunge.js

Easily prevent typographic orphans.

![](https://raw.github.com/davidpaulsson/horunge.js/master/horunge.gif)

Horunge is the Swedish equivalent for orphans when we’re talking typography. Supports CommonJS, AMD or browser globals.

## Install

### Bower

`bower install jquery-horunge`

### Manual install

Download the [production version][min] or the [development version][max].

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

[List of releases](https://github.com/davidpaulsson/horunge.js/releases)
[List of contributors](https://github.com/davidpaulsson/horunge.js/graphs/contributors)
