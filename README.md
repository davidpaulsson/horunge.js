# Horunge.js

Easily prevent typographic orphans. Note that this could be quite heavy, so use it on headings only. I don’t recommend to set it to scan your entire body.

Horunge is the Swedish equivalent for orphans when we’re talking typography.

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/davidpaulsson/Horunge.js/master/dist/jquery.horunge.min.js
[max]: https://raw.github.com/davidpaulsson/Horunge.js/master/dist/jquery.horunge.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.horunge.min.js"></script>
<script>
jQuery(function($) {
  $.horunge();
});
</script>
```

## Documentation
`_(Nothing yet)_`

## Examples
See under `/demo/` and view source to see how the headlines code have been altered.

## Release History
* 0.9.0 - First release.

## Roadmap
I do plan some minor updates. 

* Write better qUnit tests (part learning, part test of features).
* Make it run only if the last word is under a set amount of letters. In Swedish, for example, we can have quite long words and it would be unnecessary to fix line breaks for those.

## Notes
This small jQuery plugin built purely for my own education purposes. If you were to use it in a production envierment, please [tweet me](http://twitter.com/davidpaulsson/) and say so.

Inspired by [Chris Coyer’s post on CSS Tricks](css-tricks.com/preventing-widows-in-post-titles/).