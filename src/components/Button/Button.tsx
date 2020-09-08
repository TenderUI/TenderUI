import classNames from 'clsx';
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
   * Define the shape of the button (border radius). Default: rounded.
   */
  shape?: 'rounded' | 'circle';

  /**
   * Disable button. Default: false
   */
  disabled?: boolean;

  /**
   * Register click event handler.
   */
  onClick?: MouseEventHandler;

  /**
   * Add a class name. Optional.
   */
  className?: string;

  /**
   * Define 'aria-label' attribute for screen readers. Optional.
   */
  ariaLabel?: string;
}

type ButtonPropsTypeWithChildren = PropsWithChildren<ButtonPropsType>

/**
 * A simple button.
 */
const Button: FC<ButtonPropsTypeWithChildren> = ({
  onClick,
  disabled = false,
  type = 'button',
  size = 'normal',
  shape = 'circle',
  children,
  className,
  ariaLabel
}) => {
  
  const a11yProps = ariaLabel ? 
    { "aria-label": ariaLabel } : 
    null;

  const classes = classNames(
    styles.wrapper,
    styles[size],
    styles[shape],
    {[styles.disabled]: disabled},
    className
  );

  return (
    <span className={classes}>
      <button
        className={styles.button}
        type={type}
        onClick={onClick}
        disabled={disabled}
        {... a11yProps}
      >
        {children}
      </button>
    </span>
  );
};

export default Button;
