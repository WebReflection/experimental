experimental
============

cross platform way to retrieve experimental features


### API
As easy as:

    experimental(object:Object, property:string):string

So it tells you the name of the property you are looking for, most likely in a contextual way such `style` objects, `global` or `window`, or anything else such `experimental({}, 'toSource')` which is there since ever in FF browser :-)


### Really, that's it!

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

The aim of this script is to tell you whenever a feature is mapped as string somehow for your current ENV.

Not much more to say, except: enjoy ;)


### node.js

    npm install experimental -g

Then in any js file ...

    var experimental = require('experimental').experimental;

Yeah, it's boring to type it like that, but it works :P