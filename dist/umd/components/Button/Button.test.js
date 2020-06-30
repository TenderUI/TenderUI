(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@testing-library/react", "react", "./Button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@testing-library/react"), require("react"), require("./Button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.react, global.Button);
    global.undefined = mod.exports;
  }
})(this, function (_react, _react2, _Button) {
  "use strict";

  var _react3 = _interopRequireDefault(_react2);

  var _Button2 = _interopRequireDefault(_Button);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const testLabel = 'A button';
  describe('Button', () => {
    afterEach(_react.cleanup);
    it('displays the label', () => {
      const {
        getByText
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_Button2.default, null, testLabel));
      const element = getByText(testLabel);
      expect(element).toBeInTheDocument();
    });
    it('can be of the type submit', () => {
      const {
        getByText
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_Button2.default, {
        type: "submit"
      }, testLabel));
      const element = getByText(testLabel);
      expect(element.closest('button')).toHaveAttribute('type', 'submit');
    });
    it('can be of the type reset', () => {
      const {
        getByText
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_Button2.default, {
        type: "reset"
      }, testLabel));
      const element = getByText(testLabel);
      expect(element.closest('button')).toHaveAttribute('type', 'reset');
    });
    it('can be of the type button', () => {
      const {
        getByText
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_Button2.default, {
        type: "button"
      }, testLabel));
      const element = getByText(testLabel);
      expect(element.closest('button')).toHaveAttribute('type', 'button');
    });
    it('is of the type button by default', () => {
      const {
        getByText
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_Button2.default, null, testLabel));
      const element = getByText(testLabel);
      expect(element.closest('button')).toHaveAttribute('type', 'button');
    });
    it('handles clicks', () => {
      const handleClick = jest.fn();
      const {
        getByText
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_Button2.default, {
        onClick: handleClick
      }, testLabel));
      const element = getByText(testLabel);

      _react.fireEvent.click(element);

      expect(handleClick).toHaveBeenCalled();
    });
    it('ignores clicks when disabled', () => {
      const handleClick = jest.fn();
      const {
        getByText
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_Button2.default, {
        onClick: handleClick,
        disabled: true
      }, testLabel));
      const element = getByText(testLabel);

      _react.fireEvent.click(element);

      expect(handleClick).not.toHaveBeenCalled();
    });
    it('supports small size', () => {
      const {
        getByText
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_Button2.default, {
        size: "small"
      }, testLabel));
      const element = getByText(testLabel);
      expect(element.closest('button')).toHaveClass('small');
    });
  });
});
//# sourceMappingURL=Button.test.js.map