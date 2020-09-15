(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./components/Button/Button", "./components/IconButton/IconButton", "./components/TextField/TextField"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./components/Button/Button"), require("./components/IconButton/IconButton"), require("./components/TextField/TextField"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Button, global.IconButton, global.TextField);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Button, _IconButton, _TextField) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TextField = exports.IconButton = exports.Button = undefined;

  var _Button2 = _interopRequireDefault(_Button);

  var _IconButton2 = _interopRequireDefault(_IconButton);

  var _TextField2 = _interopRequireDefault(_TextField);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.Button = _Button2.default;
  exports.IconButton = _IconButton2.default;
  exports.TextField = _TextField2.default;
});
//# sourceMappingURL=index.js.map