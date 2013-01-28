// e.g. experimental(window, "requestAnimationFrame");
var
  define = define || Object,
  exports = this.exports || this
;
define(
  exports.experimental = function (cache){
    var
      prefixes = [
        "O",    "o",
        "MS",   "ms",
        "Moz",  "moz",
        "WebKit", "Webkit", "webKit",
        "webkit",
        ""
      ],
      proto
    ;
    function empty() {}
    function find(object, what) {
      for(var
        style = object.style,
        firstChar = what.charAt(0),
        what = what.slice(1),
        i = prefixes.length,
        key; i--;
      ) {
        key = prefixes[i];
        key += (
          key ? firstChar.toUpperCase() : firstChar
        ) + what;
        if (key in object || style && key in style) return key;
        if (low("on" + key) in object) return low(key);
      }
    }
    function low(key) {
      return key.toLowerCase();
    }
    return function experimental(object, what) {
      return cache[what] || (
        cache[what] = find(object, what)
      );
    };
  }({})
);

exports.experimental

/* add just a slash before this line ..
alert([
  // new stuff, if present
  experimental(window, "indexedDB"),
  experimental(window, "URL"),
  experimental(window, "performance"),
  experimental(window, "performance") &&
  experimental(
    window[
      experimental(window, "performance")
    ],
    "timing"
  ),
  // direct method
  experimental(window, "requestAnimationFrame"),
  experimental(document, "readyStateChange"),
  experimental(window, "transitionEnd"),
  experimental(document.documentElement.style, "transition")
].join("\n"));
//*/