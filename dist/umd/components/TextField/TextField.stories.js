(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../config", "./TextField", "../../img/icons/icon-search.svg", "../../img/icons/icon-eye.svg", "../../styles/init.scss"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../config"), require("./TextField"), require("../../img/icons/icon-search.svg"), require("../../img/icons/icon-eye.svg"), require("../../styles/init.scss"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.config, global.TextField, global.iconSearch, global.iconEye, global.init);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _config, _TextField, _iconSearch, _iconEye) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.shapes = exports.withRightIcon = exports.withLeftIcon = exports.disabled = exports.sizes = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _TextField2 = _interopRequireDefault(_TextField);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    component: _TextField2.default,
    title: "TextField"
  };

  const sizes = exports.sizes = () => /*#__PURE__*/_react2.default.createElement("div", {
    className: "story-container"
  }, _config.sizeVariants.map(size => /*#__PURE__*/_react2.default.createElement("div", {
    key: size,
    className: "story-item"
  }, /*#__PURE__*/_react2.default.createElement(_TextField2.default, {
    size: size,
    placeholder: "Text field"
  }))));

  const disabled = exports.disabled = () => /*#__PURE__*/_react2.default.createElement("div", {
    className: "story-container"
  }, _config.sizeVariants.map(size => /*#__PURE__*/_react2.default.createElement("div", {
    key: size,
    className: "story-item"
  }, /*#__PURE__*/_react2.default.createElement(_TextField2.default, {
    size: size,
    disabled: true,
    placeholder: "Text field"
  }))));

  const withLeftIcon = exports.withLeftIcon = () => /*#__PURE__*/_react2.default.createElement("div", {
    className: "story-container"
  }, _config.sizeVariants.map(size => /*#__PURE__*/_react2.default.createElement("div", {
    key: size,
    className: "story-item"
  }, /*#__PURE__*/_react2.default.createElement(_TextField2.default, {
    size: size,
    placeholder: "Text field",
    leftIcon: /*#__PURE__*/_react2.default.createElement(_iconSearch.ReactComponent, null)
  }))));

  const withRightIcon = exports.withRightIcon = () => /*#__PURE__*/_react2.default.createElement("div", {
    className: "story-container"
  }, _config.sizeVariants.map(size => /*#__PURE__*/_react2.default.createElement("div", {
    key: size,
    className: "story-item"
  }, /*#__PURE__*/_react2.default.createElement(_TextField2.default, {
    type: "password",
    size: size,
    placeholder: "Text field",
    rightIcon: /*#__PURE__*/_react2.default.createElement(_iconEye.ReactComponent, null)
  }))));

  const shapes = exports.shapes = () => /*#__PURE__*/_react2.default.createElement("div", {
    className: "story-container"
  }, _config.shapeVariants.map(shape => /*#__PURE__*/_react2.default.createElement("div", {
    key: shape,
    className: "story-item"
  }, /*#__PURE__*/_react2.default.createElement(_TextField2.default, {
    shape: shape,
    placeholder: "Text field"
  }))));
});
//# sourceMappingURL=TextField.stories.js.map