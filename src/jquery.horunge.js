(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {
  'use strict';

  // Collection method
  $.fn.horunge = function (options) {

    // Default options
    var settings = $.extend({
      words: 2
    }, options );

    // Run on each
    return this.each(function() {

      // Get the text and split into an array of words
      var text = this.textContent || this.innerText;
      var wordArray = $.trim().split(' ');

      // Only run if there's more than one word
      if (wordArray.length > 2) {

        // Get the last words by settings.words
        var lastWords = wordArray.splice(-settings.words);
        
        // Build a new string replacing the last words with \u00A0 (&nbsp) as space
        var newText = text.replace(lastWords.join(' '), lastWords.join('\u00A0'));

        // Empty the container
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
        // Append the new string
        this.appendChild(document.createTextNode(newText));
      }
    });
  };
}));
