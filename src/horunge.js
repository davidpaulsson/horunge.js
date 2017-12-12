module.exports = function(str, opt = 2) {
  var arr = str.trim().split(" ");
  if (arr.length > 2) {
    var lastWords = arr.slice(-opt).join("&nbsp;");
    arr.splice(-opt, opt, lastWords);
    return arr.join(" ");
  }
  return str;
};
