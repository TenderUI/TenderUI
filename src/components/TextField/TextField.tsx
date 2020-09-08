import classNames from 'clsx';
import React, { FC } from 'react';
import styles from './TextField.module.scss';

type TextFieldPropsType = {
  /**
   * Define button behavior. Default: text
   */
  type?: 'text' | 'password';

  /**
   * Define input size. Default: normal
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
   * Add a class name. Optional.
   */
  className?: string;

  /**
   * Add a placeholder text. Optional.
   */
  placeholder?: string;
}
// } & AllHTMLAttributes<HTMLInputElement>;


/**
 * A text field.
 */
const TextField: FC<TextFieldPropsType> = ({
  type = 'text',
  size = 'normal',
  shape = 'circle',
  disabled = false,
  className,
  ...rest
}) => {

  const classes = classNames(
    styles.wrapper,
    (styles as any)[size],
    (styles as any)[shape],
    {[(styles as any).disabled]: disabled},
    className
  );

  return (
    <span className={classes}>
      <input
        className={styles.input}
        type={type}
        {...rest}
      />
    </span>
  );
};

export default TextField;
