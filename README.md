experimental
============

cross platform way to retrieve experimental features


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