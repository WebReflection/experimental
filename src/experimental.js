var
  define = define || Object,
  exports = this.exports || this
;
define(
  exports.experimental = function (cache){
    /*! (C) Andrea Giammarchi - Mit Style License */
    var
      prefixes = [
        "O",    "o",
        "MS",   "ms",
        "Moz",  "moz",
        "WebKit", "Webkit", "webKit",
        "webkit",
        ""
      ],
      hasOwnProperty = cache.hasOwnProperty
    ;
    function find(object, what) {
      for(var
        firstChar = what.charAt(0),
        what = what.slice(1),
        i = prefixes.length,
        key; i--;
      ) {
        key = prefixes[i];
        key += (
          key ? firstChar.toUpperCase() : firstChar
        ) + what;
        if (
          key in object ||
          ("on" + key).toLowerCase() in object
        ) return key;
      }
    }
    return function experimental(object, what, assign) {
      var result = cache[what] || (
        cache[what] = find(object, what)
      );
      if (assign && result && !hasOwnProperty.call(object, what)) {
        object[what] = object[result];
      }
      return result;
    };
  }({})
);