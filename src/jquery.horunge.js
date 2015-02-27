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

      // Split the title into an array of words
      var wordArray = $.trim($(this).html()).split(' ');

      // Only run if there's more than one word
      if (wordArray.length > 2) {

        // Join (settings.words) words with &nbsp
        var lastWords = wordArray.slice(-settings.words).join('&nbsp');

        // Remove (wordArray.length - settings.words) elements from index (settings.words), and inserts (lastWords)
        wordArray.splice(wordArray.length-settings.words, settings.words, lastWords);

        // Replace DOM with new string
        $(this).html(wordArray.join(' '));
      }
    });
  };
}));
