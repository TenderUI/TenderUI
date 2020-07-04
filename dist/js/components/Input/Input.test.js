"use strict";

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _Input = _interopRequireDefault(require("./Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Input', function () {
  afterEach(_react.cleanup);
  it('displays the label', function () {
    var _render = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_Input.default, null)),
        container = _render.container;

    expect(container.firstChild).toBeInTheDocument();
  });
});
//# sourceMappingURL=Input.test.js.map