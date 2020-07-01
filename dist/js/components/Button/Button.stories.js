"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizes = exports.default = void 0;

var _addonActions = require("@storybook/addon-actions");

var _react = _interopRequireDefault(require("react"));

require("../../styles/init.scss");

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  component: _Button.default,
  title: 'Button'
};
exports.default = _default;

var sizes = function sizes() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: '2rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "small"
  }, "Small")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: '2rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "normal"
  }, "Normal")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: '2rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "large"
  }, "Large")));
}; // const disabled = () => (
//   <>
//     <div style={{marginBottom: '2rem', textAlign: 'center'}}>
//       <Button onClick={action('clicked')} disabled size='small'>
//         Small Disabled
//       </Button>
//     </div>
//     <div style={{marginBottom: '2rem', textAlign: 'center'}}>
//       <Button onClick={action('clicked')} disabled size='normal'>
//         Normal Disabled
//       </Button>
//     </div>
//     <div style={{marginBottom: '2rem', textAlign: 'center'}}>
//       <Button onClick={action('clicked')} disabled size='large'>
//         Big Disabled
//       </Button>
//     </div>
//   </>
// );


exports.sizes = sizes;
//# sourceMappingURL=Button.stories.js.map