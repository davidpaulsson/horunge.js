(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.horunge = mod.exports;
  }
})(this, function (module) {
  "use strict";

  module.exports = function (str) {
    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    var arr = str.trim().split(" ");
    if (arr.length > 2) {
      var lastWords = arr.slice(-opt).join("&nbsp;");
      arr.splice(-opt, opt, lastWords);
      return arr.join(" ");
    }
    return str;
  };
});
