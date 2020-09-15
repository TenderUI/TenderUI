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

  const childIcon = /*#__PURE__*/_react3.default.createElement(_iconFlag.ReactComponent, null);

  const ariaLabel = 'Test label';
  describe('IconButton', () => {
    afterEach(_react.cleanup);
    it('displays the icon', () => {
      const {
        container
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_IconButton2.default, {
        ariaLabel: ariaLabel
      }, childIcon));
      expect(container.firstChild).toContainHTML("icon-flag.svg");
    });
    it('cannot include text', () => {
      const {
        container
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_IconButton2.default, {
        ariaLabel: ariaLabel
      }, ariaLabel));
      expect(container.firstChild.firstChild.firstChild).toBeNull();
    });
    it('adds accessibility attributes to the child icon', () => {
      const {
        container
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_IconButton2.default, {
        ariaLabel: ariaLabel
      }, childIcon));
      expect(container.firstChild.firstChild.firstChild).toHaveAttribute('aria-hidden', 'true');
      expect(container.firstChild.firstChild.firstChild).toHaveAttribute('focusable', 'false');
    });
    it('can be of the type submit', () => {
      const {
        container
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_IconButton2.default, {
        type: "submit",
        ariaLabel: ariaLabel
      }, childIcon));
      expect(container.firstChild.firstChild).toHaveAttribute('type', 'submit');
    });
    it('can be of the type reset', () => {
      const {
        container
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_IconButton2.default, {
        type: "reset",
        ariaLabel: ariaLabel
      }, childIcon));
      expect(container.firstChild.firstChild).toHaveAttribute('type', 'reset');
    });
    it('can be of the type button', () => {
      const {
        container
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_IconButton2.default, {
        type: "button",
        ariaLabel: ariaLabel
      }, childIcon));
      expect(container.firstChild.firstChild).toHaveAttribute('type', 'button');
    });
    it('is of the type button by default', () => {
      const {
        container
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_IconButton2.default, {
        ariaLabel: ariaLabel
      }, childIcon));
      expect(container.firstChild.firstChild).toHaveAttribute('type', 'button');
    });
    it('handles clicks', () => {
      const handleClick = jest.fn();
      const {
        container
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_IconButton2.default, {
        onClick: handleClick,
        ariaLabel: ariaLabel
      }, childIcon));
      const element = container.firstChild.firstChild;

      _react.fireEvent.click(element);

      expect(handleClick).toHaveBeenCalled();
    });
    it('ignores clicks when disabled', () => {
      const handleClick = jest.fn();
      const {
        container
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_IconButton2.default, {
        onClick: handleClick,
        ariaLabel: ariaLabel,
        disabled: true
      }, childIcon));
      const element = container.firstChild.firstChild;

      _react.fireEvent.click(element);

      expect(handleClick).not.toHaveBeenCalled();
    });
    it('supports small size', () => {
      const {
        container
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_IconButton2.default, {
        size: "small",
        ariaLabel: ariaLabel
      }, childIcon));
      expect(container.firstChild).toHaveClass('small');
    });
    it('supports aria-label attribute', () => {
      const {
        container
      } = (0, _react.render)( /*#__PURE__*/_react3.default.createElement(_IconButton2.default, {
        ariaLabel: ariaLabel
      }, childIcon));
      expect(container.firstChild.firstChild).toHaveAttribute('aria-label', ariaLabel);
    });
  });
});
//# sourceMappingURL=IconButton.test.js.map