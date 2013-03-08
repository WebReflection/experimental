experimental
============

cross platform way to retrieve experimental features


### API

It's quite straight forward:

```javascript
experimental(
  object:Object,    // generic Object to check
  property:string   // generic property to check
  [,
    assign:boolean|string
                    // optional flag to set the value in "js"
                    // "js" as default "js" check
                    // "css" if property is a CSS one
  ]
):string            // the found property or undefined
```

The function returns the found string, if any, or undefined.

#### The Difference Using The Third Argument
By default, if we check `experimental(window, "requestAnimationFrame")` nothing will happen to the window object and, as example in Webkit browsers, the `"webkitRequestAnimationFrame"` string will be returned.

If we use the third argument, not only that string is returned, but the property is attached with the desired name if not already attached before (avoids pointless getters/setters).

```javascript
// check if present and use it
if (experimental(window, "requestAnimationFrame", true)) {
  // in this case attached directly to the global
  // so we can just use it all over
  requestAnimationFrame(callback);
} else {
  setTimeout(callback, 10);
}
```

Without the third argument if there's nothing to attach since we are not looking for a method. An example could be some CSS property or an event type.

```javascript
this.onload = function () {
  //* add just a slash before this line ..
  var body = document.body,
      TRANSITION = experimental(body.style, "transition"),
      TRANSITION_END = experimental(window, "transitionEnd");
      // please note it's camelCase, most likely
      // will be webkitTransitionEnd


  if (TRANSITION) {
    // property found, this could be
    // mozTransition or webkitTransition, etc
    body.style[TRANSITION] = "background-color 1s ease-out";
  }
  
  // we can set this regardless
  // in the worst case scenario it will never be fired
  // however, Firefox does not behave properly
  // so "transitionend" exists but it's hard to tell
  body.addEventListener(
    TRANSITION_END || // webkit wants camelCase, so does opera
    "transitionend"
    ,
    function (e) {
      alert(e.type);
    },
    false
  );

  // later on ...
  setTimeout(function () {
    body.style.backgroundColor = "blue";
  }, 1000);
}
```


### Some Generic Example

```javascript
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
  experimental(window, "requestAnimationFrame", true),
  experimental(document, "readyStateChange"),
  experimental(window, "transitionEnd"),
  experimental(document.documentElement.style, "transition"),
  
  // CSS
  experimental(document.documentElement.style, "transform", "css"),
  // -webkit-transform
  // -moz-transform
  // etc ..
  // JS
  experimental(document.documentElement.style, "transition", "js")
  // webkitTransition
  // mozTransition
  // etc ...
].join("\n"));
```


### node.js

    npm install experimental -g

Then in any JS file ...

```javascript
var experimental = require('experimental').experimental;
```

That's pretty much it.