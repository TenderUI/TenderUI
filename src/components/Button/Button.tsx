import classNames from 'classnames';
import React, { FC, MouseEventHandler, PropsWithChildren } from 'react';
import styles from './Button.module.scss';

type ButtonPropsType = {
  /**
   * Define button behavior. Default: button
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Define button size. Default: normal
   */
  size?: 'normal' | 'small' | 'large';

  /**
   * Disable button. Default: false
   */
  disabled?: boolean;

  /**
   * Register click event handler.
   */
  onClick?: MouseEventHandler;
}

type ButtonPropsTypeWithChildren = PropsWithChildren<ButtonPropsType>

/**
 * Simple Button encapsulating all design variations
 */
const Button: FC<ButtonPropsTypeWithChildren> = ({
  onClick,
  disabled = false,
  type = 'button',
  size = 'normal',
  children
}) => {
  const classes = classNames(
    styles.button,
    styles[size]
  );

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
