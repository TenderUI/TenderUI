import classNames from 'classnames';
import React, { cloneElement, FC, isValidElement, MouseEventHandler, PropsWithChildren } from 'react';
import { a11yIconHiddenProps } from '../../lib/helpers';
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

  /**
   * Define 'aria-label' attribute for screen readers. 
   * Required for icon buttons because they don't have any other descriptive text.
   */
  ariaLabel: string;
}

type IconButtonPropsTypeWithChildren = PropsWithChildren<IconButtonPropsType>

/**
 * A square button with an icon.
 * Please note the children should be a single icon. In any other cases, 
 * use Button instead.
 */
const IconButton: FC<IconButtonPropsTypeWithChildren> = ({
  onClick,
  disabled = false,
  type = 'button',
  size = 'normal',
  shape = 'circle',
  ariaLabel,
  children
}) => {
  const classes = classNames(
    styles.icon,
    styles[size],
  );

  const icon = isValidElement(children) ? 
    cloneElement(children, a11yIconHiddenProps) : 
    null

  return (
    <Button 
      size={size} 
      shape={shape}
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      ariaLabel={ariaLabel}
    >
      {icon}
    </Button>
  );
};

export default IconButton;
