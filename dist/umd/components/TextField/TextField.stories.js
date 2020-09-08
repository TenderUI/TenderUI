(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../config", "./TextField", "../../styles/init.scss"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../config"), require("./TextField"), require("../../styles/init.scss"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.config, global.TextField, global.init);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _config, _TextField) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.sizes = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _TextField2 = _interopRequireDefault(_TextField);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    component: _TextField2.default,
    title: 'TextField'
  };

  const sizes = exports.sizes = () => /*#__PURE__*/_react2.default.createElement("div", {
    className: "story-container"
  }, _config.sizeVariants.map(size => /*#__PURE__*/_react2.default.createElement("div", {
    key: size,
    className: "story-item"
  }, /*#__PURE__*/_react2.default.createElement(_TextField2.default, {
    size: size,
    placeholder: "Text field"
  })))); // export const disabled = () => (
  //   <div className="story-container">
  //     {sizeVariants.map((size: any) => (
  //       <div key={size} className="story-item">
  //         <TextField onClick={action('clicked')} size={size} disabled={true} placeholder="Text field"  />
  //       </div>
  //     ))}
  //   </div>
  // )
  // export const withIcon = () => (
  //   <div className="story-container">
  //     {sizeVariants.map((size: any) => (
  //       <div key={size} className="story-item">
  //         <Button onClick={action('clicked')} size={size}>
  //           <ShareIcon {...a11yIconHiddenProps} /> Button
  //         </Button>
  //       </div>
  //     ))}
  //    </div>
  // )
  // export const shapes = () => (
  //   <div className="story-container">
  //     {shapeVariants.map((shape: any) => (
  //       <div key={shape} className="story-item">
  //         <TextField onClick={action('clicked')} shape={shape} placeholder="Text field" />
  //       </div>
  //     ))}
  //   </div>
  // )

});
//# sourceMappingURL=TextField.stories.js.map