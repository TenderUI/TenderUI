import { FC, MouseEventHandler, PropsWithChildren } from 'react';
declare type ButtonPropsType = {
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
};
declare type ButtonPropsTypeWithChildren = PropsWithChildren<ButtonPropsType>;
/**
 * A simple button.
 */
declare const Button: FC<ButtonPropsTypeWithChildren>;
export default Button;
