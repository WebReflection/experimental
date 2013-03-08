(this.define || Object)(
  (this.exports || this).experimental = function(cache){
    /*! (C) Andrea Giammarchi - Mit Style License */
    var
      prefixes = [
        "Khtml", "khtml",
        "O",     "o",
        "MS",    "ms",
        "Moz",   "moz",
        "WebKit","Webkit", "webKit",
        "webkit",
        ""
      ],
      hasPrefix = new RegExp("\\b(?:" + prefixes.join("|").slice(0, -1) + ")\\b"),
      hasOwnProperty = cache.hasOwnProperty,
      reUp = /-([a-z])/g,
      reDown = /([A-Z])/g,
      placeUp = function (m, c) {
        return c.toUpperCase();
      },
      placeDown = function (m, c) {
        return "-" + c.toLowerCase();
      }
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
      var
        key = (assign === "css") + what,
        result = cache[key] || (
          cache[key] = find(object, what.replace(reUp, placeUp))
        );
      switch(assign) {
        case 1:
        case true:
          if (result && !hasOwnProperty.call(object, what)) {
            object[what] = object[result];
          }
          break;
        case "css":
          if (result) {
            result = result.replace(reDown, placeDown);
            if (hasPrefix.test(result)) {
              result = "-" + result;
            }
          }
          break;
      }
      return result;
    };
  }({})
);