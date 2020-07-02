import classNames from 'classnames';
import React, { FC, MouseEventHandler, PropsWithChildren } from 'react';
import Button from '../Button/Button';
import styles from './IconButton.module.scss';

type IconButtonPropsType = {
  /**
   * Define button behavior. Default: button
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Define button size. Default: normal.
   */
  size?: 'normal' | 'small' | 'large';

  /**
   * Disable button. Default: false.
   */
  disabled?: boolean;

  /**
   * Register click event handler.
   */
  onClick?: MouseEventHandler;

  /**
   * Define the shape of the button (border radius). Default: rounded.
   */
  shape?: 'rounded' | 'circle';
}

type IconButtonPropsTypeWithChildren = PropsWithChildren<IconButtonPropsType>

/**
 * A button with an icon.
 */
const IconButton: FC<IconButtonPropsTypeWithChildren> = ({
  onClick,
  disabled = false,
  type = 'button',
  size = 'normal',
  shape = 'rounded',
  children
}) => {
  const classes = classNames(
    styles.icon,
    styles[size],
    styles[shape]
  );

  return (
    <Button 
      size={size} 
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default IconButton;
