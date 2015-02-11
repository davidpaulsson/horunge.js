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

        var lastWords = wordArray.slice(-settings.words).join('&nbsp');
        wordArray.splice(wordArray.length-settings.words, settings.words, lastWords);

        $(this).html(wordArray.join(' '));
      }
    });
  };
}));
