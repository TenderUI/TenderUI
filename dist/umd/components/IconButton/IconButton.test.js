(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@testing-library/react", "react", "../../img/icons/icon-flag.svg", "./IconButton"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@testing-library/react"), require("react"), require("../../img/icons/icon-flag.svg"), require("./IconButton"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.react, global.iconFlag, global.IconButton);
    global.undefined = mod.exports;
  }
})(this, function (_react, _react2, _iconFlag, _IconButton) {
  "use strict";

  var _react3 = _interopRequireDefault(_react2);

  var _IconButton2 = _interopRequireDefault(_IconButton);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // @fixme Review tests and adapt them to IconButton.
  const testLabel = /*#__PURE__*/_react3.default.createElement(_iconFlag.ReactComponent, null);

  describe('IconButton', () => {
    afterEach(_react.cleanup);
    it('displays the label', () => {
      const {
        container
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_IconButton2.default, null, testLabel)); // const element = getByText(testLabel);

      expect(container.firstChild).toMatch('testLabel'); // expect(element).toBeInTheDocument();
    });
    it('can be of the type submit', () => {
      const {
        getByText
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_IconButton2.default, {
        type: "submit"
      }, testLabel));
      const element = getByText(testLabel);
      expect(element.closest('IconButton')).toHaveAttribute('type', 'submit');
    });
    it('can be of the type reset', () => {
      const {
        getByText
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_IconButton2.default, {
        type: "reset"
      }, testLabel));
      const element = getByText(testLabel);
      expect(element.closest('IconButton')).toHaveAttribute('type', 'reset');
    });
    it('can be of the type IconButton', () => {
      const {
        getByText
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_IconButton2.default, {
        type: "IconButton"
      }, testLabel));
      const element = getByText(testLabel);
      expect(element.closest('IconButton')).toHaveAttribute('type', 'IconButton');
    });
    it('is of the type IconButton by default', () => {
      const {
        getByText
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_IconButton2.default, null, testLabel));
      const element = getByText(testLabel);
      expect(element.closest('IconButton')).toHaveAttribute('type', 'IconButton');
    });
    it('handles clicks', () => {
      const handleClick = jest.fn();
      const {
        getByText
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_IconButton2.default, {
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
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_IconButton2.default, {
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
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_IconButton2.default, {
        size: "small"
      }, testLabel));
      const element = getByText(testLabel);
      expect(element.closest('IconButton')).toHaveClass('small');
    });
  });
});
//# sourceMappingURL=IconButton.test.js.map