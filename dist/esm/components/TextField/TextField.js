import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'clsx';
import React from 'react';
import styles from './TextField.module.scss';

// } & AllHTMLAttributes<HTMLInputElement>;

/**
 * A text field.
 */
const TextField = (_ref) => {
  let {
    type = 'text',
    size = 'normal',
    shape = 'circle',
    disabled = false,
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["type", "size", "shape", "disabled", "className"]);

  const classes = classNames(styles.wrapper, styles[size], styles[shape], {
    [styles.disabled]: disabled
  }, className);
  console.log(classes);
  return /*#__PURE__*/React.createElement("span", {
    className: classes
  }, /*#__PURE__*/React.createElement("input", _extends({
    className: styles.input,
    type: type
  }, rest)));
};

TextField.propTypes = {
  type: _pt.oneOf(['text', 'password']),
  size: _pt.oneOf(['normal', 'small', 'large']),
  shape: _pt.oneOf(['rounded', 'circle']),
  disabled: _pt.bool,
  className: _pt.string,
  placeholder: _pt.string
};
export default TextField;
//# sourceMappingURL=TextField.js.map