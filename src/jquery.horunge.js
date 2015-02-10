/* global define */
/* global module */
/* global require */
/* global jQuery */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
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

  // Collection method.
  $.fn.horunge = function (options) {

    // Default options
    var settings = $.extend({
      words: 2
    }, options );

    // Run on each
    return this.each(function() {

      // Split the title into an array of words
      var wordArray = $(this).text().split(' ');

      // Only run if there's more than one word
      if (wordArray.length > 2) {

        // Get last two words (default) of wordArray and join with non breaking space
        var preventWidows = wordArray.slice(-settings.words).join('&nbsp;');

        // Join the non breaking space string with the wordArray (again)
        wordArray[wordArray.length-(settings.words+1)] += ' ' + preventWidows;

        // Remove the last items of the array (now redundant)
        var wordsToPop = 0;
        while ( wordsToPop < settings.words ) {
          wordArray.pop();
          wordsToPop++;
        }

        // Replace the title with the array joined back together with spaces
        $(this).html(wordArray.join(' '));
      }
    });
  };
}));
