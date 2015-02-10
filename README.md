# Horunge.js

Easily prevent typographic orphans.

![](https://raw.github.com/davidpaulsson/horunge.js/master/horunge.gif)

Horunge is the Swedish equivalent for orphans when we’re talking typography.

## Install

### Bower

`bower install jquery-horunge`

### Manual install

Download the [production version][min] (409 B minified, 302 B with gzip) or the [development version][max].

[min]: https://raw.github.com/davidpaulsson/horunge.js/master/dist/jquery.horunge.min.js
[max]: https://raw.github.com/davidpaulsson/horunge.js/master/dist/jquery.horunge.js

## Usage

In your web page:

```html
<h1>This is a sample heading</h1>

<script src="jquery.js"></script>
<script src="jquery.horunge.min.js"></script>
<script>
$(function() {
  $('h1').horunge();
});
</script>
```

### Release history

- 0.0.2 - Feb 10, 2015
- - Wrote tests
- - Fixed an issue where Horunge is applied to a paragraph with only 2 words, it removes the words from the page
- 0.0.1 - Mar 19, 2014
- - First release
