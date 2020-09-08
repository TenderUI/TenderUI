(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.undefined = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  const a11yIconHiddenProps = exports.a11yIconHiddenProps = {
    "aria-hidden": true,
    focusable: false
  };
  const sizeVariants = exports.sizeVariants = ['large', 'normal', 'small'];
  const shapeVariants = exports.shapeVariants = ['circle', 'rounded'];
});
//# sourceMappingURL=config.js.map